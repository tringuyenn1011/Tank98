
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/direction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxkaXJlY3Rpb24uanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJubyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpcmV0aW9uX2ljb24iLCJTcHJpdGUiLCJTcHJpdGVGcmFtZSIsIm5vbmUiLCJ1cF9pY29uIiwiTm9kZSIsImRvd25faWNvbiIsImxlZnRfaWNvbiIsInJpZ2h0X2ljb24iLCJzdGFydCIsInNwcml0ZUZyYW1lIiwiZGlyZWN0aW9uIiwibm9kZSIsInBhcmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJjYlRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwiY2JUb3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJjYlRvdWNoRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwiY2JUb3VjaENhbmNlbCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBvcyIsImdldExvY2F0aW9uIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwiY29udGFpbnMiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJwbGF5ZXJfZGlyZWN0aW9uIiwidXBkYXRlIiwib25Nb3ZlTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxFQUFFLEVBQUc7QUFDVCxDQUFDLENBQUM7QUFHRk4sRUFBRSxDQUFDTyxLQUFLLENBQUM7RUFDTCxXQUFTUCxFQUFFLENBQUNRLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxhQUFhLEVBQUVWLEVBQUUsQ0FBQ1csTUFBTTtJQUN4QlQsRUFBRSxFQUFFRixFQUFFLENBQUNZLFdBQVc7SUFDbEJSLElBQUksRUFBRUosRUFBRSxDQUFDWSxXQUFXO0lBQ3BCUCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1ksV0FBVztJQUNwQlQsS0FBSyxFQUFFSCxFQUFFLENBQUNZLFdBQVc7SUFDckJDLElBQUksRUFBRWIsRUFBRSxDQUFDWSxXQUFXO0lBRXBCRSxPQUFPLEVBQUVkLEVBQUUsQ0FBQ2UsSUFBSTtJQUNoQkMsU0FBUyxFQUFFaEIsRUFBRSxDQUFDZSxJQUFJO0lBQ2xCRSxTQUFTLEVBQUVqQixFQUFFLENBQUNlLElBQUk7SUFDbEJHLFVBQVUsRUFBRWxCLEVBQUUsQ0FBQ2U7RUFDbkIsQ0FBQztFQUVEO0VBRUE7RUFFQUksS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFDTCxJQUFJLENBQUNULGFBQWEsQ0FBQ1UsV0FBVyxHQUFHLElBQUksQ0FBQ1AsSUFBSTtJQUMxQyxJQUFJLENBQUNRLFNBQVMsR0FBR3RCLGNBQWMsQ0FBQ08sRUFBRTtJQUVsQyxJQUFJLENBQUNnQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDeEIsRUFBRSxDQUFDZSxJQUFJLENBQUNVLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQ0MsWUFBWSxFQUFFLElBQUksQ0FBQztJQUMzRSxJQUFJLENBQUNMLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLENBQUN4QixFQUFFLENBQUNlLElBQUksQ0FBQ1UsU0FBUyxDQUFDRyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQ3pFLElBQUksQ0FBQ1AsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsQ0FBQ3hCLEVBQUUsQ0FBQ2UsSUFBSSxDQUFDVSxTQUFTLENBQUNLLFNBQVMsRUFBRSxJQUFJLENBQUNDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDdkUsSUFBSSxDQUFDVCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDeEIsRUFBRSxDQUFDZSxJQUFJLENBQUNVLFNBQVMsQ0FBQ08sWUFBWSxFQUFFLElBQUksQ0FBQ0MsYUFBYSxFQUFFLElBQUksQ0FBQztFQUNqRixDQUFDO0VBRUROLFlBQVksV0FBQUEsYUFBQ08sS0FBSyxFQUFFO0lBQ2hCLElBQUksQ0FBQ3hCLGFBQWEsQ0FBQ1UsV0FBVyxHQUFHLElBQUksQ0FBQ1AsSUFBSTtJQUMxQyxJQUFJLENBQUNRLFNBQVMsR0FBR3RCLGNBQWMsQ0FBQ08sRUFBRTtJQUVsQzZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUV4QixJQUFJQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0ksV0FBVyxFQUFFO0lBQzdCO0lBQ0EsSUFBSSxJQUFJLENBQUN4QixPQUFPLENBQUN5QixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQ25EO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDRyxFQUFFO0lBQ3RDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYyxTQUFTLENBQUN1QixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzFEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDSyxJQUFJO0lBQ3hDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYSxTQUFTLENBQUNzQixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzFEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTSxJQUFJO0lBQ3hDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYSxVQUFVLENBQUNxQixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzNEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDSSxLQUFLO0lBQ3pDO0VBQ0osQ0FBQztFQUVEMEIsV0FBVyxXQUFBQSxZQUFDSyxLQUFLLEVBQUU7SUFDZixJQUFJRyxHQUFHLEdBQUdILEtBQUssQ0FBQ0ksV0FBVyxFQUFFO0lBQzdCO0lBQ0EsSUFBSSxJQUFJLENBQUN4QixPQUFPLENBQUN5QixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQ25EO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDRyxFQUFFO0lBQ3RDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYyxTQUFTLENBQUN1QixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzFEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDSyxJQUFJO0lBQ3hDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYSxTQUFTLENBQUNzQixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzFEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTSxJQUFJO0lBQ3hDO0lBQ0E7SUFBQSxLQUNLLElBQUksSUFBSSxDQUFDYSxVQUFVLENBQUNxQixxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNILEdBQUcsQ0FBQyxFQUFDO01BQzNEO01BQ0EsSUFBSSxDQUFDaEIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDSSxLQUFLO0lBQ3pDO0VBQ0osQ0FBQztFQUVENEIsVUFBVSxXQUFBQSxXQUFDRyxLQUFLLEVBQUU7SUFDZDtJQUNBLElBQUksQ0FBQ2IsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTyxFQUFFO0lBQ2xDTixFQUFFLENBQUN5QyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRzdDLGNBQWMsQ0FBQ08sRUFBRTtFQUMxRCxDQUFDO0VBRUQyQixhQUFhLFdBQUFBLGNBQUNDLEtBQUssRUFBRTtJQUNqQjtJQUNBLElBQUksQ0FBQ2IsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTyxFQUFFO0lBQ2xDTixFQUFFLENBQUN5QyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRzdDLGNBQWMsQ0FBQ08sRUFBRTtFQUMxRCxDQUFDO0VBRUR1QyxNQUFNLFdBQUFBLE9BQUEsRUFBRTtJQUNKLElBQUksSUFBSSxDQUFDeEIsU0FBUyxJQUFJdEIsY0FBYyxDQUFDTyxFQUFFLEVBQUM7TUFDcEMsSUFBSSxDQUFDSSxhQUFhLENBQUNVLFdBQVcsR0FBRyxJQUFJLENBQUNQLElBQUk7SUFDOUMsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDUSxTQUFTLElBQUl0QixjQUFjLENBQUNHLEVBQUUsRUFBQztNQUN6QyxJQUFJLENBQUNRLGFBQWEsQ0FBQ1UsV0FBVyxHQUFHLElBQUksQ0FBQ2xCLEVBQUU7TUFDeEM7TUFDQUYsRUFBRSxDQUFDeUMsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUc3QyxjQUFjLENBQUNHLEVBQUU7SUFDMUQsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDbUIsU0FBUyxJQUFJdEIsY0FBYyxDQUFDSyxJQUFJLEVBQUM7TUFDM0MsSUFBSSxDQUFDTSxhQUFhLENBQUNVLFdBQVcsR0FBRyxJQUFJLENBQUNoQixJQUFJO01BQzFDO01BQ0FKLEVBQUUsQ0FBQ3lDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGdCQUFnQixHQUFHN0MsY0FBYyxDQUFDSyxJQUFJO0lBQzVELENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ2lCLFNBQVMsSUFBSXRCLGNBQWMsQ0FBQ00sSUFBSSxFQUFDO01BQzNDLElBQUksQ0FBQ0ssYUFBYSxDQUFDVSxXQUFXLEdBQUcsSUFBSSxDQUFDZixJQUFJO01BQzFDO01BQ0FMLEVBQUUsQ0FBQ3lDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGdCQUFnQixHQUFHN0MsY0FBYyxDQUFDTSxJQUFJO0lBQzVELENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ2dCLFNBQVMsSUFBSXRCLGNBQWMsQ0FBQ0ksS0FBSyxFQUFDO01BQzVDO01BQ0EsSUFBSSxDQUFDTyxhQUFhLENBQUNVLFdBQVcsR0FBRyxJQUFJLENBQUNqQixLQUFLO01BQzNDSCxFQUFFLENBQUN5QyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRzdDLGNBQWMsQ0FBQ0ksS0FBSztJQUM3RDtFQUNKLENBQUM7RUFHRDJDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDekIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTSxJQUFJO0VBQ3hDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgVGFnT2ZEaXJlY3Rpb24gPSBjYy5FbnVtKHtcclxuICAgIHVwIDogMCxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIGRvd24gOiAyLFxyXG4gICAgbGVmdCA6IDMsXHJcbiAgICBubyA6IDQsXHJcbn0pXHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkaXJldGlvbl9pY29uOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgdXA6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIGRvd246IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIGxlZnQ6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIHJpZ2h0OiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICBub25lOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcbiAgICAgICAgdXBfaWNvbjogY2MuTm9kZSxcclxuICAgICAgICBkb3duX2ljb246IGNjLk5vZGUsXHJcbiAgICAgICAgbGVmdF9pY29uOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJpZ2h0X2ljb246IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5ub25lXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNiVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLmNiVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jYlRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jYlRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2JUb3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5ub25lXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG9rZVwiKVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyDkuIpcclxuICAgICAgICBpZiAodGhpcy51cF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXAnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnVwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4i1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZG93bl9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZG93bicpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24uZG93blxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlt6ZcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxlZnRfaWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlZnQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+zXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yaWdodF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnJpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjYlRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIOS4ilxyXG4gICAgICAgIGlmICh0aGlzLnVwX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5LiLXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kb3duX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb3duJylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5kb3duXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGVmdF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVmdCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubGVmdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj7NcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJpZ2h0X2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyaWdodCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ucmlnaHRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5kJylcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hDYW5jZWwoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2FuY2VsJylcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5ubyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMubm9uZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMudXBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwJylcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnVwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICB0aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmRvd25cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24uZG93blxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5sZWZ0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0JylcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0XHJcbiAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5yaWdodFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICBvbk1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5sZWZ0XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=