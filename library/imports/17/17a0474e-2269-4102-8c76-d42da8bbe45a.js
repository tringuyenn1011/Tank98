"use strict";
cc._RF.push(module, '17a04dOImlBAox21C2ou+Ra', 'fire_flower');
// Script/game/fire_flower.js

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
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  init: function init(data) {
    this.data = data;
    var anim = this.getComponent(cc.Animation);
    anim.play('fire_flower_1');
    if (this.data.collision_tuwall) {
      if (!this.data.is_enemy) {
        cc.vv.Audio.playTuWall();
      }
    } else if (this.data.collision_wall) {
      if (!this.data.is_enemy) {
        cc.vv.Audio.playWall();
      }
    } else if (this.data.collision_tank) {
      cc.vv.Audio.playTank();
    }
  },
  fireEnd: function fireEnd() {
    this.node.destroy();
  },
  onDestroy: function onDestroy() {
    // console.log('fire flower destroy')
  }
});

cc._RF.pop();