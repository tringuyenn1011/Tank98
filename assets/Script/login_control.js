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

        hoverColor: cc.Color,
        defaultColor: cc.Color,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currentIndex = 0
        
    },

    start () {
        
        cc.vv = {}

        let Enum = require('Enum')
        cc.vv.Enum = new Enum()
        let Global = require('Global')
        cc.vv.Global = new Global()
        let Config = require('Config')
        cc.vv.Config = new Config()
        let UserInfo = require('UserInfo')
        cc.vv.UserInfo = new UserInfo()
        let Tools = require('Tools')
        cc.vv.Tools = new Tools()
        let Audio = require('Audio')
        cc.vv.Audio = new Audio()

        
    },

    onClickBtn(){
        cc.director.loadScene('home_scene')
    },
});
