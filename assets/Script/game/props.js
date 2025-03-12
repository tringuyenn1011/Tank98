// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        props_arr : [cc.SpriteFrame],

        icon: cc.Sprite
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.vv.Audio.playPowerupAppear()
        this.type = 0
        let random = cc.vv.Tools.random(1, 7)
        // random = 2
        if (random == 1){
            this.type = cc.vv.Enum.Props.zhalei
        }
        else if (random == 2){
            this.type = cc.vv.Enum.Props.maozi
        }
        else if (random == 3){
            this.type = cc.vv.Enum.Props.tieqiao
        }
        else if (random == 4){
            this.type = cc.vv.Enum.Props.star
        }
        else if (random == 5){
            this.type = cc.vv.Enum.Props.tank
        }
        else if (random == 6){
            this.type = cc.vv.Enum.Props.dinglei
        }

        this.icon.spriteFrame = this.props_arr[this.type-1]

        this.schedule(()=>{
            this.icon.node.active = !this.icon.node.active
        }, 0.3)
    },
    
    update (dr){
        let player = cc.vv.Global.game.player
        if (player && player.node && player.node.active){
            let a = this.node.getBoundingBox().intersects(player.node.getBoundingBox())
            if (a){
                cc.vv.Audio.playPowerupPick()
                if (this.type == cc.vv.Enum.Props.zhalei){
                    this.zhalei()
                }
                else if (this.type == cc.vv.Enum.Props.maozi){
                    this.maozi()
                }
                else if (this.type == cc.vv.Enum.Props.tieqiao){
                    this.tieqiao()
                }
                else if (this.type == cc.vv.Enum.Props.star){
                    this.star()
                }
                else if (this.type == cc.vv.Enum.Props.tank){
                    this.tank()
                }
                else if (this.type == cc.vv.Enum.Props.dinglei){
                    this.dinglei()
                }
                this.node.destroy()
            }
        }
    },

    zhalei (){
        cc.vv.Global.game.enemy_tank_arr.forEach(enemy=>{
            if (enemy && enemy.node && enemy.node.active){
                let fire = cc.instantiate(cc.vv.Global.game.fire_flower_prefab)
                fire.position = enemy.node.position
                fire.parent = enemy.node.parent
                let data = {
                    level : 1,
                }
                fire.getComponent('fire_flower').init(data)

                enemy.node.destroy()
            }
        })
    },

    maozi (){
        let player = cc.vv.Global.game.player
        if (player && player.node && player.node.active){
            let shield = cc.instantiate(cc.vv.Global.game.shield_prefab)
            player.node.addChild(shield)
            shield.getComponent('shield').init(player, true)
        }
    },

    tieqiao (){
        cc.vv.Global.tieqiao_time = new Date().getTime()
    },

    star (){
        let player = cc.vv.Global.game.player
        if (player && player.node && player.node.active){
            player.tank_level ++
            if (player.tank_level > 4){
                player.tank_level = 4
            }
            let data = cc.vv.Config.getPlayerTankValue(player.tank_level)
            if (data){
                if (data.moveSpeed){
                    player.moveSpeed = data.moveSpeed
                }
                if (data.fireSpeed){
                    player.fireSpeed = data.fireSpeed
                }
            }
            // if (player.tank_level == 1){
                
            //     player.moveSpeed = 1.5
            //     player.fireSpeed = 3
            // }
            // else if (player.tank_level == 2){
            //     player.moveSpeed = 1.7
            //     player.fireSpeed = 3.8
            // }
            // else if (player.tank_level == 3){
            //     player.moveSpeed = 1.9
            //     player.fireSpeed = 4.8
            // }
            // else if (player.tank_level == 4){
            //     player.moveSpeed = 2.1
            //     player.fireSpeed = 5.3
            // }
            player.changeTankValue()
        }
    },

    tank (){
        cc.vv.UserInfo.live++
    },

    dinglei (){
        cc.vv.Global.dinglei_time = new Date().getTime()
    },

    onDestroy (){
        console.log('props destroy')
    }
});
