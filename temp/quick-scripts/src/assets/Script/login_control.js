"use strict";
cc._RF.push(module, '29c1dKnSx9NGYhPpma5nZ22', 'login_control');
// Script/login_control.js

"use strict";

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
  "extends": cc.Component,
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
    defaultColor: cc.Color
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.currentIndex = 0;
  },
  start: function start() {
    cc.vv = {};
    var Enum = require('Enum');
    cc.vv.Enum = new Enum();
    var Global = require('Global');
    cc.vv.Global = new Global();
    var Config = require('Config');
    cc.vv.Config = new Config();
    var UserInfo = require('UserInfo');
    cc.vv.UserInfo = new UserInfo();
    var Tools = require('Tools');
    cc.vv.Tools = new Tools();
    var Audio = require('Audio');
    cc.vv.Audio = new Audio();
  },
  onClickBtn: function onClickBtn() {
    cc.director.loadScene('home_scene');
  }
});

cc._RF.pop();