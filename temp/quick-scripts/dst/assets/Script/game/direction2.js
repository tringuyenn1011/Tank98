
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/direction2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxkaXJlY3Rpb24yLmpzIl0sIm5hbWVzIjpbIlRhZ09mRGlyZWN0aW9uIiwiY2MiLCJFbnVtIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0Iiwibm8iLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJTcHJpdGUiLCJ1cF9pY29uIiwiTm9kZSIsImRvd25faWNvbiIsImxlZnRfaWNvbiIsInJpZ2h0X2ljb24iLCJTcHJpdGVGcmFtZSIsImNsaWNrZWQiLCJzdGFydCIsInNwcml0ZUZyYW1lIiwiZGlyZWN0aW9uIiwibm9kZSIsInBhcmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJjYlRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwiY2JUb3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJjYlRvdWNoRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwiY2JUb3VjaENhbmNlbCIsImV2ZW50IiwicG9zIiwiZ2V0TG9jYXRpb24iLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJjb250YWlucyIsInZ2IiwiR2xvYmFsIiwiZ2FtZSIsInBsYXllcl9kaXJlY3Rpb24iLCJ1cGRhdGUiLCJzZXREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxJQUFJLENBQUM7RUFDekJDLEVBQUUsRUFBRyxDQUFDO0VBQ05DLEtBQUssRUFBRyxDQUFDO0VBQ1RDLElBQUksRUFBRyxDQUFDO0VBQ1JDLElBQUksRUFBRyxDQUFDO0VBQ1JDLEVBQUUsRUFBRztBQUNULENBQUMsQ0FBQztBQUdGTixFQUFFLENBQUNPLEtBQUssQ0FBQztFQUNMLFdBQVNQLEVBQUUsQ0FBQ1EsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQVAsRUFBRSxFQUFFRixFQUFFLENBQUNVLE1BQU07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QWMsQ0FBQ0ssSUFBSTtJQUM1RCxDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNnQixTQUFTLElBQUlyQixjQUFjLENBQUNNLElBQUksRUFBQztNQUM1QztNQUNBLElBQUksQ0FBQ3NDLFVBQVUsRUFBRTtNQUNqQixJQUFJLENBQUN0QyxJQUFJLENBQUNjLFdBQVcsR0FBRyxJQUFJLENBQUNGLE9BQU87TUFDbkM7TUFDQWpCLEVBQUUsQ0FBQ3NDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGdCQUFnQixHQUFHMUMsY0FBYyxDQUFDTSxJQUFJO0lBQzVELENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ2UsU0FBUyxJQUFJckIsY0FBYyxDQUFDSSxLQUFLLEVBQUM7TUFDNUM7TUFDRDtNQUNBLElBQUksQ0FBQ3dDLFVBQVUsRUFBRTtNQUNqQixJQUFJLENBQUN4QyxLQUFLLENBQUNnQixXQUFXLEdBQUcsSUFBSSxDQUFDRixPQUFPO01BQ3BDakIsRUFBRSxDQUFDc0MsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcxQyxjQUFjLENBQUNJLEtBQUs7SUFDN0Q7RUFDSixDQUFDO0VBR0R3QyxVQUFVLFdBQUFBLFdBQUEsRUFBRTtJQUNSLElBQUksQ0FBQ3pDLEVBQUUsQ0FBQ2lCLFdBQVcsR0FBRyxJQUFJLFdBQVE7SUFDbEMsSUFBSSxDQUFDZixJQUFJLENBQUNlLFdBQVcsR0FBRyxJQUFJLFdBQVE7SUFDcEMsSUFBSSxDQUFDZCxJQUFJLENBQUNjLFdBQVcsR0FBRyxJQUFJLFdBQVE7SUFDcEMsSUFBSSxDQUFDaEIsS0FBSyxDQUFDZ0IsV0FBVyxHQUFHLElBQUksV0FBUTtFQUN6QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxudmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG4gICAgbm8gOiA0LFxyXG59KVxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGlyZXRpb25faWNvbjogY2MuU3ByaXRlLFxyXG4gICAgICAgIHVwOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgZG93bjogY2MuU3ByaXRlLFxyXG4gICAgICAgIGxlZnQ6IGNjLlNwcml0ZSxcclxuICAgICAgICByaWdodDogY2MuU3ByaXRlLFxyXG5cclxuICAgICAgICB1cF9pY29uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRvd25faWNvbjogY2MuTm9kZSxcclxuICAgICAgICBsZWZ0X2ljb246IGNjLk5vZGUsXHJcbiAgICAgICAgcmlnaHRfaWNvbjogY2MuTm9kZSxcclxuXHJcbiAgICAgICAgZGVmYXVsdDogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgY2xpY2tlZDogY2MuU3ByaXRlRnJhbWUsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLnVwLnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5kb3duLnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5sZWZ0LnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5yaWdodC5zcHJpdGVGcmFtZSA9IHRoaXMuZGVmYXVsdFxyXG4gICAgICAgICBcclxuICAgICAgICAvL3RoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMubm9uZVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5jYlRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5jYlRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2JUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuY2JUb3VjaENhbmNlbCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIHRoaXMudXAuc3ByaXRlRnJhbWUgPSB0aGlzLmRlZmF1bHRcclxuICAgICAgICB0aGlzLmRvd24uc3ByaXRlRnJhbWUgPSB0aGlzLmRlZmF1bHRcclxuICAgICAgICB0aGlzLmxlZnQuc3ByaXRlRnJhbWUgPSB0aGlzLmRlZmF1bHRcclxuICAgICAgICB0aGlzLnJpZ2h0LnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgLy90aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLm5vbmVcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIOS4ilxyXG4gICAgICAgIGlmICh0aGlzLnVwX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5LiLXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kb3duX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb3duJylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5kb3duXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGVmdF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVmdCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubGVmdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj7NcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJpZ2h0X2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyaWdodCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ucmlnaHRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgaWYgKHRoaXMudXBfaWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwJylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi51cFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuItcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRvd25faWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmRvd25cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bemXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sZWZ0X2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0JylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5sZWZ0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWPs1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmlnaHRfaWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JpZ2h0JylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5yaWdodFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2JUb3VjaEVuZChldmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmQnKVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgIH0sXHJcblxyXG4gICAgY2JUb3VjaENhbmNlbChldmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5jZWwnKVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLm5vKXtcclxuICAgICAgICAgICAgLy90aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLm5vbmVcclxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgICAgICAvL3RoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMudXBcclxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy51cC5zcHJpdGVGcmFtZSA9IHRoaXMuY2xpY2tlZFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXAnKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5kb3duXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHRoaXMuZG93bi5zcHJpdGVGcmFtZSA9IHRoaXMuY2xpY2tlZFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZG93bicpXHJcbiAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5kb3duXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICAgICAgIC8vIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMubGVmdFxyXG4gICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdCgpXHJcbiAgICAgICAgICAgdGhpcy5sZWZ0LnNwcml0ZUZyYW1lID0gdGhpcy5jbGlja2VkXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0JylcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgIC8vIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMucmlnaHRcclxuICAgICAgICAgICB0aGlzLnNldERlZmF1bHQoKVxyXG4gICAgICAgICAgIHRoaXMucmlnaHQuc3ByaXRlRnJhbWUgPSB0aGlzLmNsaWNrZWRcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnJpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIHNldERlZmF1bHQoKXtcclxuICAgICAgICB0aGlzLnVwLnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5kb3duLnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5sZWZ0LnNwcml0ZUZyYW1lID0gdGhpcy5kZWZhdWx0XHJcbiAgICAgICAgdGhpcy5yaWdodC5zcHJpdGVGcmFtZSA9IHRoaXMuZGVmYXVsdFxyXG4gICAgfVxyXG59KTtcclxuIl19