"use strict";
cc._RF.push(module, 'a5115MVCu1KZIRXrsbU+qGb', 'direction');
// Script/game/direction.js

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
    diretion_icon: cc.Sprite,
    up: cc.SpriteFrame,
    down: cc.SpriteFrame,
    left: cc.SpriteFrame,
    right: cc.SpriteFrame,
    none: cc.SpriteFrame,
    up_icon: cc.Node,
    down_icon: cc.Node,
    left_icon: cc.Node,
    right_icon: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.diretion_icon.spriteFrame = this.none;
    this.direction = TagOfDirection.no;
    this.node.parent.on(cc.Node.EventType.TOUCH_START, this.cbTouchStart, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.cbTouchMove, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_END, this.cbTouchEnd, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.cbTouchCancel, this);
  },
  cbTouchStart: function cbTouchStart(event) {
    this.diretion_icon.spriteFrame = this.none;
    this.direction = TagOfDirection.no;
    console.log("check oke");
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
      this.diretion_icon.spriteFrame = this.none;
    } else if (this.direction == TagOfDirection.up) {
      this.diretion_icon.spriteFrame = this.up;
      // console.log('up')
      cc.vv.Global.game.player_direction = TagOfDirection.up;
    } else if (this.direction == TagOfDirection.down) {
      this.diretion_icon.spriteFrame = this.down;
      // console.log('down')
      cc.vv.Global.game.player_direction = TagOfDirection.down;
    } else if (this.direction == TagOfDirection.left) {
      this.diretion_icon.spriteFrame = this.left;
      // console.log('left')
      cc.vv.Global.game.player_direction = TagOfDirection.left;
    } else if (this.direction == TagOfDirection.right) {
      // console.log('right')
      this.diretion_icon.spriteFrame = this.right;
      cc.vv.Global.game.player_direction = TagOfDirection.right;
    }
  },
  onMoveLeft: function onMoveLeft() {
    this.direction = TagOfDirection.left;
  }
});

cc._RF.pop();