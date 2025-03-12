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
        layout1: cc.Node,
        layout2: cc.Node,
        stage_lab: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.vv.Audio.playStart()

        this.layout1.active = false
        this.layout2.active = false
        this.layout1.width = this.node.width//cc.winSize.width
        this.layout1.height = this.node.height//cc.winSize.height
        this.layout1.position = cc.v2(0,0)
        this.layout2.width = this.node.width//cc.winSize.width
        this.layout2.height = this.node.height//cc.winSize.height
        this.layout2.position = cc.v2(0,0)
        this.layout1.y = cc.winSize.height
        this.layout2.y = -cc.winSize.height
        this.layout1.active = true
        this.layout2.active = true

        this.stage_lab.string = 'STAGE  ' + cc.vv.UserInfo.level

        this.layout1.runAction(cc.moveTo(0.6, cc.v2(0, 0)))
        this.layout2.runAction(cc.moveTo(0.6, cc.v2(0, 0)))

        this.scheduleOnce(()=>{
            cc.vv.Global.game.is_pause = false
            cc.vv.Global.game.is_over = false
            this.node.destroy()
        }, 2)
    },

    onDestroy(){
        console.log('stage destroy')
    }
});
