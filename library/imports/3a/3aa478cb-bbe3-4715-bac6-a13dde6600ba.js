"use strict";
cc._RF.push(module, '3aa47jLu+NHFbrGoT3eZgC6', 'point');
// Script/ui/point.js

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
    points: [cc.SpriteFrame]
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;
    this.scheduleOnce(function () {
      _this.node.destroy();
    }, 2);
  },
  init: function init(point) {
    var icon = this.node.getComponent(cc.Sprite);
    if (point == 100) {} else if (point == 200) {} else if (point == 300) {} else if (point == 400) {} else if (point == 500) {}
  }
});

cc._RF.pop();