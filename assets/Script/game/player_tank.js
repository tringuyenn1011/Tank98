// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let Tank = require('Tank')

var TagOfDirection = cc.Enum({
    up : 0,
    right : 1,
    down : 2,
    left : 3,
})

cc.Class({
    extends: Tank,

    properties: {
        tank_1 : [cc.SpriteFrame],
        tank_2 : [cc.SpriteFrame],
        tank_3 : [cc.SpriteFrame],
        tank_4 : [cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        this.map = cc.vv.Global.game.map.getComponent('game_map')
        this._super()
        cc.vv.UserInfo.live --
        this.is_enemy = false
        this.moveSpeed = 2.625
        this.fireSpeed = 5.25
        this.tank_level = 1
    },

    moveUp (){
        
        // console.log(this.node.width, this.node.height,1111)
        if (cc.vv.Global.game.is_pause) return
        if (cc.vv.Global.game.is_over) return
        if (!this.map) return
        var direction = -this.node.angle / 90;
        // var a = this.map.getTiledRoundCoordinate(this.node.position)        
        var a = this.map.getTiledCoordinate(this.node.position)    
        let b = this.node.position
        if (direction == TagOfDirection.up){
        }
        else if (direction == TagOfDirection.left){
            let x = a.x%2
            if (x!=0){
                a.x++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
            
        }
        else if (direction == TagOfDirection.down){
            let y = a.y%2
            if (y!=0){
                a.y--
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.right){
            let x = a.x%2
            if (x!=0){
                a.x++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
            
        }
        this._super()
    },

    moveDown (){
        if (cc.vv.Global.game.is_pause) return
        if (cc.vv.Global.game.is_over) return
        if (!this.map) return
        var direction = -this.node.angle / 90;
        var a = this.map.getTiledRoundCoordinate(this.node.position)
        
        if (direction == TagOfDirection.up){
            let y = a.y%2
            if (y!=0){
                a.y++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.left){
            let x = a.x%2
            if (x!=0){
                a.x++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.down){
        }
        else if (direction == TagOfDirection.right){
            let x = a.x%2
            if (x!=0){
                a.x--
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        this._super()
    },

    moveLeft (){
        if (cc.vv.Global.game.is_pause) return
        if (cc.vv.Global.game.is_over) return
        if (!this.map) return
        var direction = -this.node.angle / 90;
        var a = this.map.getTiledRoundCoordinate(this.node.position)
        if (direction == TagOfDirection.up){
            let y = a.y%2
            if (y!=0){
                a.y++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.left){
        }
        else if (direction == TagOfDirection.down){
            let y = a.y%2
            if (y!=0){
                a.y--
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.right){
            let x = a.x%2
            if (x!=0){
                a.x--
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        this._super()
    },

    moveRight (){
        if (cc.vv.Global.game.is_pause) return
        if (cc.vv.Global.game.is_over) return
        if (!this.map) return
        var direction = -this.node.angle / 90;
        var a = this.map.getTiledRoundCoordinate(this.node.position)
        
        if (direction == TagOfDirection.up){
            let y = a.y%2
            if (y!=0){
                a.y++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.left){
            let x = a.x%2
            if (x!=0){
                a.x++
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.down){
            let y = a.y%2
            if (y!=0){
                a.y--
            }
            let pos = this.map.getPosFromTiled(a)
            this.node.position = pos
        }
        else if (direction == TagOfDirection.right){

        }
        this._super()
    },

    onFire (){
        if (cc.vv.Global.game.is_pause) return
        if (cc.vv.Global.game.is_over) return
        let player = cc.vv.Global.game.player
        if (player && player.node && player.node.active){
            this._super()
        }
    },

    onDestroy (){
        console.log('player tank destroy')
    }
});
