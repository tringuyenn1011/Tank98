"use strict";
cc._RF.push(module, '42438F2BA9N4LhsZQLdeeHN', 'rocker');
// Script/game/rocker.js

"use strict";

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
    playerNodeSpeed: 100,
    Max_r: 100
  },
  onLoad: function onLoad() {
    // 获取摇杆节点并初始化摇杆节点位置及角度
    this.rockerBg = this.node.getChildByName('rockerBg');
    this.joystick = this.node.getChildByName('joystick');
    this.joystick.setPosition(cc.v2(0, 0));
    this.dir = cc.v2(0, 0);

    // 注册父节点的 touch 监听事件
    this.node.parent.on(cc.Node.EventType.TOUCH_START, this.cbTouchStart, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.cbTouchMove, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_END, this.cbTouchEnd, this);
    this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.cbTouchCancel, this);

    // this.node.position = cc.v2(0,0)
  },
  update: function update(dt) {
    if (this.dir.mag() < 0.5) {
      return;
    }

    // let vx = this.dir.x * this.playerNodeSpeed;
    // let vy = this.dir.y * this.playerNodeSpeed;

    // let sx = vx * dt;
    // let sy = vy * dt;
    // //移动
    // // this.playerNode.x += sx;
    // // this.playerNode.y += sy;

    //方向计算
    var r = Math.atan2(this.dir.y, this.dir.x);
    var degree = r * 180 / Math.PI;
    // degree = 360 - degree + 90;
    // this.playerNode.rotation = degree;
    // console.log(degree,111)

    // 0正右 90正上 180正左 -90正下
    // 右
    // if (degree >= -45 && degree < 45){
    if (degree >= -30 && degree < 30) {
      // console.log('右')
      cc.vv.Global.game.player_direction = TagOfDirection.right;
    }
    // 前
    // else if (degree >= 45 && degree < 135){
    else if (degree >= 60 && degree < 120) {
      // console.log('前')
      cc.vv.Global.game.player_direction = TagOfDirection.up;
    }
    // 左
    // else if ((degree >= 135 && degree <180) || (degree >= -180 && degree < -135)){
    else if (degree >= 150 && degree < 180 || degree >= -180 && degree < -150) {
      // console.log('左')
      cc.vv.Global.game.player_direction = TagOfDirection.left;
    }
    // 下
    // else if (degree >= -135 && degree < -45){
    else if (degree >= -120 && degree < -60) {
      // console.log('下')
      cc.vv.Global.game.player_direction = TagOfDirection.down;
    }
  },
  onClickFire: function onClickFire() {
    if (cc.vv.Global.game.player) {
      cc.vv.Global.game.player.onFire();
    }
  },
  onClickBtn: function onClickBtn() {
    console.log(11111);
  },
  cbTouchStart: function cbTouchStart(event) {
    var pos = event.getLocation();

    // 初始化摇杆节点位置及角度
    this.joystick.setPosition(cc.v2(0, 0));
    this.dir = cc.v2(0, 0);
  },
  cbTouchMove: function cbTouchMove(event) {
    var pos = event.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos); // 将世界坐标转化为摇杆组件节点的相对坐标

    // 获取摇杆的角度
    var len = jPos.mag();
    this.dir.x = jPos.x / len;
    this.dir.y = jPos.y / len;

    // 设置摇杆的位置
    if (len > this.Max_r) {
      jPos.x = this.Max_r * jPos.x / len;
      jPos.y = this.Max_r * jPos.y / len;
    }
    this.joystick.setPosition(jPos);
  },
  cbTouchEnd: function cbTouchEnd(event) {
    // 初始化摇杆节点位置及角度
    this.joystick.setPosition(cc.v2(0, 0));
    this.dir = cc.v2(0, 0);
    //this.node.active = false;
    console.log('end');
    cc.vv.Global.game.player_direction = TagOfDirection.no;
  },
  cbTouchCancel: function cbTouchCancel(event) {
    // 初始化摇杆节点位置及角度
    this.joystick.setPosition(cc.v2(0, 0));
    this.dir = cc.v2(0, 0);
    //this.node.active = false;
    console.log('cancel');
    cc.vv.Global.game.player_direction = TagOfDirection.no;
  }
});

cc._RF.pop();