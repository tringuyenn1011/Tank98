// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// 单机游戏级别
let Single_Game_Type = cc.Enum({
    Single1: 1, // 初出茅庐
    Single2: 2, // 小有名气
    Single3: 3, // 名扬四海
    Single4: 4, // 炉火纯青
})

// 游戏类别
let Game_Type = cc.Enum({
    type1 : 1, // 对战
    type2 : 2, // 揭棋
    type3 : 3, // 残局
    type4 : 4, // 单机
    type5 : 5, // 推演
})

let Props = cc.Enum({
    zhalei : 1, // 炸雷
    maozi : 2, // 防护帽
    tieqiao : 3, // 铁锹
    star : 4, // 星星
    tank : 5, // tank
    dinglei : 6, // 定雷
})

cc.Class({
    extends: cc.Component,

    ctor(){
        this.Props = Props,
        this.Single_Game_Type = Single_Game_Type,
        this.Game_Type = Game_Type
    }
});
