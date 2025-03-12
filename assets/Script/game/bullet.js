// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var TagOfDirection = cc.Enum({
    up : 0,
    right : 1,
    down : 2,
    left : 3,
})

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.collision_tuwall = false
        this.collision_wall = false
        this.collision_tank = false
    },

    init(data){
        this.data = data
        this.is_enemy = this.data.is_enemy
       
        this.is_shield = false
        this.is_destroy = false

      
    },

    moveUp(){
        this.node.angle = -90 * TagOfDirection.up
        let speed = this.data.speed
        this.node.y += speed
        if (this.node.y >= 728){
            this.collision_wall = true
            this.node.destroy()
        }
    },

    moveLeft(){
        this.node.angle = -90 * TagOfDirection.left
        let speed = this.data.speed
        this.node.x -= speed
        if (this.node.x <= 0){
            this.collision_wall = true
            this.node.destroy()
        }
    },

    moveDown(){
        this.node.angle = -90 * TagOfDirection.down
        let speed = this.data.speed
        this.node.y -= speed
        if (this.node.y <= 0){
            this.collision_wall = true
            this.node.destroy()
        }
    },

    moveRight(){
        this.node.angle = -90 * TagOfDirection.right
        let speed = this.data.speed
        this.node.x += speed
        if (this.node.x >= 728){
            this.collision_wall = true
            this.node.destroy()
        }
    },

    update (dt) {
        let direction = this.data.direction
        let map = this.data.map
        if (!map) return
        let is_enemy = this.data.is_enemy
        this.is_enemy = is_enemy
        let pos = this.node.position
        // let leftPos1 = pos.add(cc.v2(-4,0))
        // let leftPos2 = pos.add(cc.v2(-4-8,0))
        // let rightPos1 = pos.add(cc.v2(4,0))
        // let rightPos2 = pos.add(cc.v2(4+8,0))
        // let upPos1 = pos.add(cc.v2(0, 4))
        // let upPos2 = pos.add(cc.v2(0, 4+8))
        // let downPos1 = pos.add(cc.v2(0,-4))
        // let downPos2 = pos.add(cc.v2(0,-4-8))

        let leftPos1 = pos.add(cc.v2(-7,0))
        let leftPos2 = pos.add(cc.v2(-7-14,0))
        let rightPos1 = pos.add(cc.v2(7,0))
        let rightPos2 = pos.add(cc.v2(7+14,0))
        let upPos1 = pos.add(cc.v2(0, 7))
        let upPos2 = pos.add(cc.v2(0, 7+14))
        let downPos1 = pos.add(cc.v2(0,-7))
        let downPos2 = pos.add(cc.v2(0,-7-14))

        let pos_arr = []
        if (direction == TagOfDirection.up){
            this.moveUp();
            pos_arr = [leftPos1, leftPos2, rightPos1, rightPos2]
        }
        else if (direction == TagOfDirection.left){
            this.moveLeft();
            pos_arr = [upPos1, upPos2, downPos1, downPos2]
        }
        else if (direction == TagOfDirection.down){
            this.moveDown();
            pos_arr = [leftPos1, leftPos2, rightPos1, rightPos2]
        }
        else if (direction == TagOfDirection.right){
            this.moveRight();
            pos_arr = [upPos1, upPos2, downPos1, downPos2]
        }
        // 检查子弹之间的碰撞
        let p_arr = [...pos_arr]
        p_arr.push(pos)
        for (let i=0;i<p_arr.length;i++){
            let bullet = map.collisionBullet(p_arr[i], is_enemy)
            if (bullet){
                bullet.destroy()
                this.node.destroy()
                return
            }
        }
        // 检查子弹和坦克之间的碰撞
        for (let i=0;i<pos_arr.length;i++){
            // 敌人
            if (is_enemy){
                let tank = map.collisionBulletAndPlayerTanks(pos_arr[i])
                if (tank){
                    this.is_shield = tank.is_shield
                    if (!tank.is_shield){
                        
                        tank.node.destroy()
                        this.collision_tank = true
                    }
                    this.node.destroy()
                    return
                }
            }
            // 玩家
            else {
                let tank = map.collisionBulletAndEnemyTanks(pos_arr[i])
                if (tank){
                    console.log(tank.is_shield,11111)
                    if (!tank.is_shield){
                        tank.live--
                        if (tank.live <= 0){
                            let tank_level = tank.tank_level
                            cc.vv.Global.die_tank['tank_'+tank_level]++
                            
                            this.collision_tank = true
                            tank.node.destroy()
                        }
                        else {
                            this.collision_wall = true
                        }
                        if (tank.tank_hong){
                            console.log('红坦克')
                            map.initProps()
                        }
                        this.node.destroy()
                        return
                    }
                }
            }
        }
        // let pos_arr = [/*leftPos1, leftPos2, rightPos1, rightPos2,*/ upPos1, upPos2, downPos1, downPos2]
        for (let i=0;i<pos_arr.length;i++){
            let tid = map.getTiledIdFromPos(pos_arr[i])
            this.node.zIndex = -1
            if (tid > 0){
                if (cc.vv.Global.isGrassland(tid)){
                    // console.log('草地')
                }
                else if (cc.vv.Global.isGoldWall(tid)){
                    // console.log('金砖')
                    this.collision_wall = true
                    this.node.destroy()
                    return
                }
                else if (cc.vv.Global.isRiver(tid)){
                    // console.log('河')
                    this.node.zIndex = this.node.parent.childrenCount
                }
                else if (cc.vv.Global.isHome(tid)){
                    console.log('家被打，游戏结束')
                    map.bg3.node.active = true
                    this.is_destroy = true
                    cc.vv.Global.game.is_over = true
                }
                else {
                    // console.log(tid,i)
                    this.is_destroy = true
                    let gid_pos = map.getTiledCoordinate(pos_arr[i])
                    map.bg1.setTileGIDAt(0, gid_pos.x, gid_pos.y, 0)
                }
            }
        }
        if (this.is_destroy){
            this.collision_tuwall = true
            this.node.destroy()
        }
    },

    onDestroy (){
        if (!this.is_shield){
            let fire_flower = cc.instantiate(cc.vv.Global.game.fire_flower_prefab)
            fire_flower.position = this.node.position
            this.node.parent.addChild(fire_flower)

            let data = {
                level : 1,
                is_enemy : this.is_enemy,
                collision_tuwall : this.collision_tuwall,
                collision_wall : this.collision_wall,
                collision_tank  : this.collision_tank,
            }
            fire_flower.getComponent('fire_flower').init(data)
        }
        this.data.destroy()
        // console.log('bullet destroy')
    }
});
