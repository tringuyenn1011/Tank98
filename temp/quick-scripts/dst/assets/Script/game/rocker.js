
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/rocker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxyb2NrZXIuanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJubyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllck5vZGVTcGVlZCIsIk1heF9yIiwib25Mb2FkIiwicm9ja2VyQmciLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJqb3lzdGljayIsInNldFBvc2l0aW9uIiwidjIiLCJkaXIiLCJwYXJlbnQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImNiVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJjYlRvdWNoTW92ZSIsIlRPVUNIX0VORCIsImNiVG91Y2hFbmQiLCJUT1VDSF9DQU5DRUwiLCJjYlRvdWNoQ2FuY2VsIiwidXBkYXRlIiwiZHQiLCJtYWciLCJyIiwiTWF0aCIsImF0YW4yIiwieSIsIngiLCJkZWdyZWUiLCJQSSIsInZ2IiwiR2xvYmFsIiwiZ2FtZSIsInBsYXllcl9kaXJlY3Rpb24iLCJvbkNsaWNrRmlyZSIsInBsYXllciIsIm9uRmlyZSIsIm9uQ2xpY2tCdG4iLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJwb3MiLCJnZXRMb2NhdGlvbiIsImpQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImxlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxFQUFFLEVBQUc7QUFDVCxDQUFDLENBQUM7QUFFRk4sRUFBRSxDQUFDTyxLQUFLLENBQUM7RUFDTCxXQUFTUCxFQUFFLENBQUNRLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJ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Q0FBQ2tCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCO0lBQ0FnQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckJuRCxFQUFFLENBQUMwQyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRzlDLGNBQWMsQ0FBQ08sRUFBRTtFQUMxRDtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG4gICAgbm8gOiA0LFxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwbGF5ZXJOb2RlU3BlZWQ6IDEwMCxcclxuICAgICAgICBNYXhfcjogMTAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaRh+adhuiKgueCueW5tuWIneWni+WMluaRh+adhuiKgueCueS9jee9ruWPiuinkuW6plxyXG4gICAgICAgIHRoaXMucm9ja2VyQmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3JvY2tlckJnJylcclxuICAgICAgICB0aGlzLmpveXN0aWNrID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdqb3lzdGljaycpXHJcbiAgICAgICAgdGhpcy5qb3lzdGljay5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g5rOo5YaM54i26IqC54K555qEIHRvdWNoIOebkeWQrOS6i+S7tlxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuY2JUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuY2JUb3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNiVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmNiVG91Y2hDYW5jZWwsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigwLDApXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpci5tYWcoKSA8IDAuNSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgdnggPSB0aGlzLmRpci54ICogdGhpcy5wbGF5ZXJOb2RlU3BlZWQ7XHJcbiAgICAgICAgLy8gbGV0IHZ5ID0gdGhpcy5kaXIueSAqIHRoaXMucGxheWVyTm9kZVNwZWVkO1xyXG5cclxuICAgICAgICAvLyBsZXQgc3ggPSB2eCAqIGR0O1xyXG4gICAgICAgIC8vIGxldCBzeSA9IHZ5ICogZHQ7XHJcbiAgICAgICAgLy8gLy/np7vliqhcclxuICAgICAgICAvLyAvLyB0aGlzLnBsYXllck5vZGUueCArPSBzeDtcclxuICAgICAgICAvLyAvLyB0aGlzLnBsYXllck5vZGUueSArPSBzeTtcclxuXHJcblxyXG4gICAgICAgIC8v5pa55ZCR6K6h566XXHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLmF0YW4yKHRoaXMuZGlyLnksIHRoaXMuZGlyLngpO1xyXG4gICAgICAgIHZhciBkZWdyZWUgPSByICogMTgwIC8gKE1hdGguUEkpO1xyXG4gICAgICAgIC8vIGRlZ3JlZSA9IDM2MCAtIGRlZ3JlZSArIDkwO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyTm9kZS5yb3RhdGlvbiA9IGRlZ3JlZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWdyZWUsMTExKVxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gMOato+WPsyA5MOato+S4iiAxODDmraPlt6YgLTkw5q2j5LiLXHJcbiAgICAgICAgLy8g5Y+zXHJcbiAgICAgICAgLy8gaWYgKGRlZ3JlZSA+PSAtNDUgJiYgZGVncmVlIDwgNDUpe1xyXG4gICAgICAgIGlmIChkZWdyZWUgPj0gLTMwICYmIGRlZ3JlZSA8IDMwKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WPsycpXHJcbiAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5yaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICAgLy8g5YmNXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoZGVncmVlID49IDQ1ICYmIGRlZ3JlZSA8IDEzNSl7XHJcbiAgICAgICAgZWxzZSBpZiAoZGVncmVlID49IDYwICYmIGRlZ3JlZSA8IDEyMCl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfliY0nKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bemXHJcbiAgICAgICAgLy8gZWxzZSBpZiAoKGRlZ3JlZSA+PSAxMzUgJiYgZGVncmVlIDwxODApIHx8IChkZWdyZWUgPj0gLTE4MCAmJiBkZWdyZWUgPCAtMTM1KSl7XHJcbiAgICAgICAgZWxzZSBpZiAoKGRlZ3JlZSA+PSAxNTAgJiYgZGVncmVlIDwxODApIHx8IChkZWdyZWUgPj0gLTE4MCAmJiBkZWdyZWUgPCAtMTUwKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflt6YnKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubGVmdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuItcclxuICAgICAgICAvLyBlbHNlIGlmIChkZWdyZWUgPj0gLTEzNSAmJiBkZWdyZWUgPCAtNDUpe1xyXG4gICAgICAgIGVsc2UgaWYgKGRlZ3JlZSA+PSAtMTIwICYmIGRlZ3JlZSA8IC02MCl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkuIsnKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24uZG93blxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0ZpcmUoKXtcclxuICAgICAgICBpZiAoIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcil7XHJcbiAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllci5vbkZpcmUoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0J0bigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDExMTExKVxyXG4gICAgfSxcclxuXHJcbiAgICBjYlRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDliJ3lp4vljJbmkYfmnYboioLngrnkvY3nva7lj4rop5LluqZcclxuICAgICAgICB0aGlzLmpveXN0aWNrLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLmRpciA9IGNjLnYyKDAsIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYlRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgalBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpOyAgICAvLyDlsIbkuJbnlYzlnZDmoIfovazljJbkuLrmkYfmnYbnu4Tku7boioLngrnnmoTnm7jlr7nlnZDmoIdcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5pGH5p2G55qE6KeS5bqmXHJcbiAgICAgICAgbGV0IGxlbiA9IGpQb3MubWFnKCk7XHJcbiAgICAgICAgdGhpcy5kaXIueCA9IGpQb3MueCAvIGxlbjtcclxuICAgICAgICB0aGlzLmRpci55ID0galBvcy55IC8gbGVuO1xyXG5cclxuICAgICAgICAvLyDorr7nva7mkYfmnYbnmoTkvY3nva5cclxuICAgICAgICBpZiAobGVuID4gdGhpcy5NYXhfcikge1xyXG4gICAgICAgICAgICBqUG9zLnggPSB0aGlzLk1heF9yICogalBvcy54IC8gbGVuO1xyXG4gICAgICAgICAgICBqUG9zLnkgPSB0aGlzLk1heF9yICogalBvcy55IC8gbGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmpveXN0aWNrLnNldFBvc2l0aW9uKGpQb3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYlRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pGH5p2G6IqC54K55L2N572u5Y+K6KeS5bqmXHJcbiAgICAgICAgdGhpcy5qb3lzdGljay5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAvL3RoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW5kJylcclxuICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgIH0sXHJcblxyXG4gICAgY2JUb3VjaENhbmNlbChldmVudCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluaRh+adhuiKgueCueS9jee9ruWPiuinkuW6plxyXG4gICAgICAgIHRoaXMuam95c3RpY2suc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuZGlyID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCcpXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=