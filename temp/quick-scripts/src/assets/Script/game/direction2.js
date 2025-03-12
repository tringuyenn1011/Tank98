"use strict";
cc._RF.push(module, '624e7AxM9hAfI1goHCy4uNj', 'direction2');
// Script/game/direction2.js

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
var TagOfDirection = cc.Enum({
  up: 0,
  right: 1,
  down: 2,
  left: 3,
  no: 4
});
cc.Class({
  "extends": cc.Component,
  properties: {
    // diretion_icon: cc.Sprite,
    up: cc.Sprite,
    down: cc.Sprite,
    left: cc.Sprite,
    right: cc.Sprite,
    up_icon: cc.Node,
    down_icon: cc.Node,
    left_icon: cc.Node,
    right_icon: cc.Node,
    "default": cc.SpriteFrame,
    clicked: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.up.spriteFrame = this["default"];
    this.down.spriteFrame = this["default"];
    this.left.spriteFrame = this["default"];
    this.right.spriteFrame = this["default"];

    //this.diretion_icon.spriteFrame = this.none
    this.direction = TagOfDirection.no;
    this.node.parent.on(cc.Node.EventType.TOUCH_START, this.cbTouchStart, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.cbTouchMove, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_END, this.cbTouchEnd, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.cbTouchCancel, this);
  },
  cbTouchStart: function cbTouchStart(event) {
    this.up.spriteFrame = this["default"];
    this.down.spriteFrame = this["default"];
    this.left.spriteFrame = this["default"];
    this.right.spriteFrame = this["default"];
    //this.diretion_icon.spriteFrame = this.none

    this.direction = TagOfDirection.no;
    var pos = event.getLocation();
    // 上
    if (this.up_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('up')
      this.direction = TagOfDirection.up;
    }
    // 下
    else if (this.down_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('down')
      this.direction = TagOfDirection.down;
    }
    // 左
    else if (this.left_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('left')
      this.direction = TagOfDirection.left;
    }
    // 右
    else if (this.right_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('right')
      this.direction = TagOfDirection.right;
    }
  },
  cbTouchMove: function cbTouchMove(event) {
    var pos = event.getLocation();
    // 上
    if (this.up_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('up')
      this.direction = TagOfDirection.up;
    }
    // 下
    else if (this.down_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('down')
      this.direction = TagOfDirection.down;
    }
    // 左
    else if (this.left_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('left')
      this.direction = TagOfDirection.left;
    }
    // 右
    else if (this.right_icon.getBoundingBoxToWorld().contains(pos)) {
      // console.log('right')
      this.direction = TagOfDirection.right;
    }
  },
  cbTouchEnd: function cbTouchEnd(event) {
    // console.log('end')
    this.direction = TagOfDirection.no;
    cc.vv.Global.game.player_direction = TagOfDirection.no;
  },
  cbTouchCancel: function cbTouchCancel(event) {
    // console.log('cancel')
    this.direction = TagOfDirection.no;
    cc.vv.Global.game.player_direction = TagOfDirection.no;
  },
  update: function update() {
    if (this.direction == TagOfDirection.no) {
      //this.diretion_icon.spriteFrame = this.none
      this.setDefault();
    } else if (this.direction == TagOfDirection.up) {
      //this.diretion_icon.spriteFrame = this.up
      this.setDefault();
      this.up.spriteFrame = this.clicked;
      // console.log('up')
      cc.vv.Global.game.player_direction = TagOfDirection.up;
    } else if (this.direction == TagOfDirection.down) {
      //this.diretion_icon.spriteFrame = this.down
      this.setDefault();
      this.down.spriteFrame = this.clicked;
      // console.log('down')
      cc.vv.Global.game.player_direction = TagOfDirection.down;
    } else if (this.direction == TagOfDirection.left) {
      // this.diretion_icon.spriteFrame = this.left
      this.setDefault();
      this.left.spriteFrame = this.clicked;
      // console.log('left')
      cc.vv.Global.game.player_direction = TagOfDirection.left;
    } else if (this.direction == TagOfDirection.right) {
      // console.log('right')
      // this.diretion_icon.spriteFrame = this.right
      this.setDefault();
      this.right.spriteFrame = this.clicked;
      cc.vv.Global.game.player_direction = TagOfDirection.right;
    }
  },
  setDefault: function setDefault() {
    this.up.spriteFrame = this["default"];
    this.down.spriteFrame = this["default"];
    this.left.spriteFrame = this["default"];
    this.right.spriteFrame = this["default"];
  }
});

cc._RF.pop();