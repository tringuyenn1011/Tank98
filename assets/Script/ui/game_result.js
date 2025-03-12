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

        bg: cc.Node,

        title: cc.Sprite,
        stage_lab: cc.Label,

        again_btn: cc.Node,
        next_btn: cc.Node,

        fail_sf: cc.SpriteFrame,
        success_sf: cc.SpriteFrame,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        let total_score = this.bg.getChildByName('total_score').getComponent(cc.Label)

        let score_1 = this.bg.getChildByName('score_1').getComponent(cc.Label)
        let tank_num_1 = this.bg.getChildByName('tank_num_1').getComponent(cc.Label)
        let jiantou_1 = this.bg.getChildByName('jiantou_1')
        let tank_1 = this.bg.getChildByName('tank_1')

        let score_2 = this.bg.getChildByName('score_2').getComponent(cc.Label)
        let tank_num_2 = this.bg.getChildByName('tank_num_2').getComponent(cc.Label)
        let jiantou_2 = this.bg.getChildByName('jiantou_2')
        let tank_2 = this.bg.getChildByName('tank_2')

        let score_3 = this.bg.getChildByName('score_3').getComponent(cc.Label)
        let tank_num_3 = this.bg.getChildByName('tank_num_3').getComponent(cc.Label)
        let jiantou_3 = this.bg.getChildByName('jiantou_3')
        let tank_3 = this.bg.getChildByName('tank_3')

        let score_4 = this.bg.getChildByName('score_4').getComponent(cc.Label)
        let tank_num_4 = this.bg.getChildByName('tank_num_4').getComponent(cc.Label)
        let jiantou_4 = this.bg.getChildByName('jiantou_4')
        let tank_4 = this.bg.getChildByName('tank_4')

        let line = this.bg.getChildByName('line')
        let total = this.bg.getChildByName('total')
        let total_tank_num = this.bg.getChildByName('total_tank_num').getComponent(cc.Label)

        // this.title.node.position = cc.v2(0, cc.winSize.height * 0.5 - 30)
        // stage.position = this.title.node.position.sub(cc.v2(0, 40))
        // player1.position = cc.v2(-95, stage.y - 25)
        // total_score.node.position = player1.position.sub(cc.v2(0, 35))
        
        // tank_1.position = cc.v2(0, total_score.node.position.y - 35)
        // jiantou_1.position = cc.v2(tank_1.x - 30, tank_1.y)
        // tank_num_1.node.position = cc.v2(jiantou_1.x - 15, jiantou_1.y)
        // score_1.node.position = cc.v2(player1.x, tank_num_1.node.y)

        let dif_y = 45
        // score_2.node.position = score_1.node.position.sub(cc.v2(0, dif_y))
        // tank_num_2.node.position = tank_num_1.node.position.sub(cc.v2( 0, dif_y))
        // jiantou_2.position = jiantou_1.position.sub(cc.v2( 0, dif_y))
        // tank_2.position = tank_1.position.sub(cc.v2(0, dif_y))

        // score_3.node.position = score_2.node.position.sub(cc.v2(0, dif_y))
        // tank_num_3.node.position = tank_num_2.node.position.sub(cc.v2( 0, dif_y))
        // jiantou_3.position = jiantou_2.position.sub(cc.v2( 0, dif_y))
        // tank_3.position = tank_2.position.sub(cc.v2(0, dif_y))

        // score_4.node.position = score_3.node.position.sub(cc.v2(0, dif_y))
        // tank_num_4.node.position = tank_num_3.node.position.sub(cc.v2( 0, dif_y))
        // jiantou_4.position = jiantou_3.position.sub(cc.v2( 0, dif_y))
        // tank_4.position = tank_3.position.sub(cc.v2(0, dif_y))

        // line.position = cc.v2(0, tank_4.y - 30)
        // total.position = cc.v2(score_4.node.x - score_4.node.width*0.5, tank_4.y - 50)
        // total_tank_num.node.position = tank_num_4.node.position.sub(cc.v2(0, 50))

        this.stage_lab.string = 'STAGE  '+ cc.vv.UserInfo.level

        score_1.string = 'PTS'
        score_2.string = 'PTS'
        score_3.string = 'PTS'
        score_4.string = 'PTS'
        tank_num_1.string = ''
        tank_num_2.string = ''
        tank_num_3.string = ''
        tank_num_4.string = ''
        total_tank_num.string = ''

        this.again_btn.active = false
        this.next_btn.active = false
        // cc.vv.Global.die_tank = {
        //     tank_1 : 3,
        //     tank_2 : 2,
        //     tank_3 : 3,
        //     tank_4 : 2,
        // }
        total_score.string = cc.vv.Global.die_tank.tank_1*100 + cc.vv.Global.die_tank.tank_2*200
                     + cc.vv.Global.die_tank.tank_3*300 + cc.vv.Global.die_tank.tank_4*400

        let index = 1
        let count = cc.vv.Global.die_tank.tank_1
        let count_temp = 0
        let callback = ()=>{
            cc.vv.Audio.playResult()
            if (index == 1){
                count = cc.vv.Global.die_tank.tank_1
                score_1.string = 100*count_temp+' PTS'
                tank_num_1.string = count_temp
            }
            else if (index == 2){
                count = cc.vv.Global.die_tank.tank_2
                score_2.string = 200*count_temp+' PTS'
                tank_num_2.string = count_temp
            }
            else if (index == 3){
                count = cc.vv.Global.die_tank.tank_3
                score_3.string = 300*count_temp+' PTS'
                tank_num_3.string = count_temp
            }
            else if (index == 4){
                count = cc.vv.Global.die_tank.tank_4
                score_4.string = 400*count_temp+' PTS'
                tank_num_4.string = count_temp
            }
            count_temp++
            if (count_temp > count){
                index++
                count_temp = 0
            }
            if (index >= 5){
                total_tank_num.string = cc.vv.Global.die_tank.tank_1 + cc.vv.Global.die_tank.tank_2
                     + cc.vv.Global.die_tank.tank_3 + cc.vv.Global.die_tank.tank_4
                     
                // 失败
                if (this.data.status == 0){
                    this.again_btn.x = 0
                    this.again_btn.active = true
                }
                // 胜利
                else if (this.data.status == 1){
                    // this.again_btn.active = true
                    this.next_btn.active = true
                }
                this.unschedule(callback)
            }
        }
        this.schedule(callback, 0.3)
        // this.scheduleOnce(()=>{
        //     let over = cc.instantiate(cc.vv.Global.game.game_over)
        //     cc.vv.Global.game.node.addChild(over)
        //     this.node.destroy()
        // }, 2)
    },

    init(data){
        this.data = data
        // 失败 -- thua
        if (data.status == 0){
            this.title.spriteFrame = this.fail_sf
        }
        // 胜利 -- thắng
        else if (data.status == 1){
            this.title.spriteFrame = this.success_sf
        }
    },

    onClickChongwan (){
        console.log('重玩')
        let UserInfo = require('UserInfo')
        cc.vv.UserInfo = new UserInfo()
        cc.vv.Global.game.startGame()
        this.node.destroy()
    },

    onClickNext (){
        console.log('下一关')
        cc.vv.UserInfo.level++
        cc.vv.Global.game.startGame()
        this.node.destroy()
    },

    onDestroy(){
        console.log('game result destroy')
    }
});
