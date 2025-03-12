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

    ctor (){
        this.stage = {}

        this.initStage()
    },

    getPlayerTankValue(tank_level){
        let data = {}
        if (tank_level > 4){
            tank_level = 4
        }
        if (tank_level == 1){
            data.moveSpeed = 2.625
            data.fireSpeed = 5.25
            data.live = 1
        }
        else if (tank_level == 2){
            data.moveSpeed = 2.975
            data.fireSpeed = 6,65
            data.live = 1
        }
        else if (tank_level == 3){
            data.moveSpeed = 3.325
            data.fireSpeed = 8.4
            data.live = 1
        }
        else if (tank_level == 4){
            data.moveSpeed = 3.675
            data.fireSpeed = 9.275
            data.live = 1
        }
        return data
    },

    getEnemyTankValue(tank_level){
        let data = {}
        if (tank_level == 1){
            data.fireSpeed = 4.375
            data.moveSpeed = 1.75
            data.live = 1
        }
        else if (tank_level == 2){
            data.fireSpeed = 4.375
            data.moveSpeed = 2.625
            data.live = 1
        }
        else if (tank_level == 3){
            data.fireSpeed = 5.25
            data.moveSpeed = 1.75
            data.live = 1
        }
        else if (tank_level == 4){
            data.fireSpeed = 4.375
            data.moveSpeed = 1.75
            data.live = 3
        }
        return data
    },

    initStage (){
        this.stage.stage_1 = ()=>{
            return {
                enemy : {
                    tank_1 : 18,
                    tank_2 : 2,
                    tank_3 : 0,
                    tank_4 : 0,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_2 = ()=>{
            return {
                enemy : {
                    tank_1 : 16,
                    tank_2 : 2,
                    tank_3 : 2,
                    tank_4 : 0,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_3 = ()=>{
            return {
                enemy : {
                    tank_1 : 15,
                    tank_2 : 2,
                    tank_3 : 2,
                    tank_4 : 1,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_4 = ()=>{
            return {
                enemy : {
                    tank_1 : 13,
                    tank_2 : 3,
                    tank_3 : 3,
                    tank_4 : 1,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_5 = ()=>{
            return {
                enemy : {
                    tank_1 : 12,
                    tank_2 : 4,
                    tank_3 : 3,
                    tank_4 : 1,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_6 = ()=>{
            return {
                enemy : {
                    tank_1 : 11,
                    tank_2 : 4,
                    tank_3 : 4,
                    tank_4 : 1,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_7 = ()=>{
            return {
                enemy : {
                    tank_1 : 10,
                    tank_2 : 4,
                    tank_3 : 4,
                    tank_4 : 2,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_8 = ()=>{
            return {
                enemy : {
                    tank_1 : 9,
                    tank_2 : 4,
                    tank_3 : 5,
                    tank_4 : 2,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_9 = ()=>{
            return {
                enemy : {
                    tank_1 : 8,
                    tank_2 : 5,
                    tank_3 : 5,
                    tank_4 : 2,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_10 = ()=>{
            return {
                enemy : {
                    tank_1 : 7,
                    tank_2 : 6,
                    tank_3 : 5,
                    tank_4 : 2,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_11 = ()=>{
            return {
                enemy : {
                    tank_1 : 6,
                    tank_2 : 6,
                    tank_3 : 6,
                    tank_4 : 2,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_12 = ()=>{
            return {
                enemy : {
                    tank_1 : 5,
                    tank_2 : 6,
                    tank_3 : 6,
                    tank_4 : 3,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_13 = ()=>{
            return {
                enemy : {
                    tank_1 : 4,
                    tank_2 : 6,
                    tank_3 : 6,
                    tank_4 : 4,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_14 = ()=>{
            return {
                enemy : {
                    tank_1 : 4,
                    tank_2 : 5,
                    tank_3 : 6,
                    tank_4 : 5,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_15 = ()=>{
            return {
                enemy : {
                    tank_1 : 5,
                    tank_2 : 4,
                    tank_3 : 6,
                    tank_4 : 5,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_16 = ()=>{
            return {
                enemy : {
                    tank_1 : 4,
                    tank_2 : 5,
                    tank_3 : 6,
                    tank_4 : 5,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_17 = ()=>{
            return {
                enemy : {
                    tank_1 : 4,
                    tank_2 : 6,
                    tank_3 : 5,
                    tank_4 : 5,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_18 = ()=>{
            return {
                enemy : {
                    tank_1 : 3,
                    tank_2 : 6,
                    tank_3 : 6,
                    tank_4 : 5,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_19 = ()=>{
            return {
                enemy : {
                    tank_1 : 2,
                    tank_2 : 6,
                    tank_3 : 6,
                    tank_4 : 6,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
        this.stage.stage_20 = ()=>{
            return {
                enemy : {
                    tank_1 : 3,
                    tank_2 : 5,
                    tank_3 : 6,
                    tank_4 : 6,
                },
                hong :  parseInt(Math.random() * 3) + 2
            }
        }
    },

});
