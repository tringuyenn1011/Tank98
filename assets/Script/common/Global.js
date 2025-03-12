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

    ctor(){
        this.game = null
        this.map = null

        this.tieqiao_time = null
        this.dinglei_time = null

        this.enemy_count = 20
        this.stage_info = null
        this.die_tank = {
            tank_1 : 0,
            tank_2 : 0,
            tank_3 : 0,
            tank_4 : 0,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    isGrassland(tid){
        if ((tid >= 9 && tid <= 12) || (tid >= 37 && tid <= 40) || (tid >= 65 && tid <= 68) || (tid >= 93 && tid <= 96)){
            return true
        }
        return false
    },

    isGoldWall(tid){
        if ((tid >= 5 && tid <= 8) || (tid >= 33 && tid <= 36) || (tid >= 61 && tid <= 64) || (tid >= 89 && tid <= 92)){
            return true
        }
        return false
    },

    isCobWall(tid){
        if ((tid >= 1 && tid <= 4) || (tid >= 29 && tid <= 32) || (tid >= 57 && tid <= 60) || (tid >= 85 && tid <= 88)){
            return true
        }
        return false
    },

    isRiver(tid){
        if ((tid >= 13 && tid <= 20) || (tid >= 41 && tid <= 48) || (tid >= 69 && tid <= 76) || (tid >= 97 && tid <= 104)){
            return true
        }
        return false
    },

    isHome(tid){
        if ((tid >= 21 && tid <= 28) || (tid >= 49 && tid <= 56) || (tid >= 77 && tid <= 84) || (tid >= 105 && tid <= 112)){
            return true
        }
        return false
    },
});
