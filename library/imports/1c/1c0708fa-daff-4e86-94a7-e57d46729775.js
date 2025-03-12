"use strict";
cc._RF.push(module, '1c070j62v9OhpSn5X1Gcpd1', 'toast');
// Script/game/toast.js

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
    var _this = this;
    var state = data.state; // 1游戏结束 2暂停
    var lab = this.getComponent(cc.Label);
    lab.string = data.text;
    if (state == 1) {
      this.node.y = -cc.winSize.height - 100;
      this.node.runAction(cc.sequence(cc.moveTo(2.5, cc.v2(0, 200)), cc.delayTime(0.8), cc.callFunc(function () {
        var data = {
          status: 0
        };
        var result = cc.instantiate(cc.vv.Global.game.game_result);
        cc.vv.Global.game.node.addChild(result);
        result.getComponent('game_result').init(data);
        _this.node.destroy();
      })));
    }
  },
  onDestroy: function onDestroy() {
    console.log('toast destroy');
  }
});

cc._RF.pop();