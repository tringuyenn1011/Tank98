
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/player_tank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a08aC2QgxMyqzm8Nb+H/Tk', 'player_tank');
// Script/game/player_tank.js

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
var Tank = require('Tank');
var TagOfDirection = cc.Enum({
  up: 0,
  right: 1,
  down: 2,
  left: 3
});
cc.Class({
  "extends": Tank,
  properties: {
    tank_1: [cc.SpriteFrame],
    tank_2: [cc.SpriteFrame],
    tank_3: [cc.SpriteFrame],
    tank_4: [cc.SpriteFrame]
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    this.map = cc.vv.Global.game.map.getComponent('game_map');
    this._super();
    cc.vv.UserInfo.live--;
    this.is_enemy = false;
    this.moveSpeed = 2.625;
    this.fireSpeed = 5.25;
    this.tank_level = 1;
  },
  moveUp: function moveUp() {
    // console.log(this.node.width, this.node.height,1111)
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_over) return;
    if (!this.map) return;
    var direction = -this.node.angle / 90;
    // var a = this.map.getTiledRoundCoordinate(this.node.position)        
    var a = this.map.getTiledCoordinate(this.node.position);
    var b = this.node.position;
    if (direction == TagOfDirection.up) {} else if (direction == TagOfDirection.left) {
      var x = a.x % 2;
      if (x != 0) {
        a.x++;
      }
      var pos = this.map.getPosFromTiled(a);
      this.node.position = pos;
    } else if (direction == TagOfDirection.down) {
      var y = a.y % 2;
      if (y != 0) {
        a.y--;
      }
      var _pos = this.map.getPosFromTiled(a);
      this.node.position = _pos;
    } else if (direction == TagOfDirection.right) {
      var _x = a.x % 2;
      if (_x != 0) {
        a.x++;
      }
      var _pos2 = this.map.getPosFromTiled(a);
      this.node.position = _pos2;
    }
    this._super();
  },
  moveDown: function moveDown() {
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_over) return;
    if (!this.map) return;
    var direction = -this.node.angle / 90;
    var a = this.map.getTiledRoundCoordinate(this.node.position);
    if (direction == TagOfDirection.up) {
      var y = a.y % 2;
      if (y != 0) {
        a.y++;
      }
      var pos = this.map.getPosFromTiled(a);
      this.node.position = pos;
    } else if (direction == TagOfDirection.left) {
      var x = a.x % 2;
      if (x != 0) {
        a.x++;
      }
      var _pos3 = this.map.getPosFromTiled(a);
      this.node.position = _pos3;
    } else if (direction == TagOfDirection.down) {} else if (direction == TagOfDirection.right) {
      var _x2 = a.x % 2;
      if (_x2 != 0) {
        a.x--;
      }
      var _pos4 = this.map.getPosFromTiled(a);
      this.node.position = _pos4;
    }
    this._super();
  },
  moveLeft: function moveLeft() {
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_over) return;
    if (!this.map) return;
    var direction = -this.node.angle / 90;
    var a = this.map.getTiledRoundCoordinate(this.node.position);
    if (direction == TagOfDirection.up) {
      var y = a.y % 2;
      if (y != 0) {
        a.y++;
      }
      var pos = this.map.getPosFromTiled(a);
      this.node.position = pos;
    } else if (direction == TagOfDirection.left) {} else if (direction == TagOfDirection.down) {
      var _y = a.y % 2;
      if (_y != 0) {
        a.y--;
      }
      var _pos5 = this.map.getPosFromTiled(a);
      this.node.position = _pos5;
    } else if (direction == TagOfDirection.right) {
      var x = a.x % 2;
      if (x != 0) {
        a.x--;
      }
      var _pos6 = this.map.getPosFromTiled(a);
      this.node.position = _pos6;
    }
    this._super();
  },
  moveRight: function moveRight() {
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_over) return;
    if (!this.map) return;
    var direction = -this.node.angle / 90;
    var a = this.map.getTiledRoundCoordinate(this.node.position);
    if (direction == TagOfDirection.up) {
      var y = a.y % 2;
      if (y != 0) {
        a.y++;
      }
      var pos = this.map.getPosFromTiled(a);
      this.node.position = pos;
    } else if (direction == TagOfDirection.left) {
      var x = a.x % 2;
      if (x != 0) {
        a.x++;
      }
      var _pos7 = this.map.getPosFromTiled(a);
      this.node.position = _pos7;
    } else if (direction == TagOfDirection.down) {
      var _y2 = a.y % 2;
      if (_y2 != 0) {
        a.y--;
      }
      var _pos8 = this.map.getPosFromTiled(a);
      this.node.position = _pos8;
    } else if (direction == TagOfDirection.right) {}
    this._super();
  },
  onFire: function onFire() {
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_over) return;
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.node.active) {
      this._super();
    }
  },
  onDestroy: function onDestroy() {
    console.log('player tank destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxwbGF5ZXJfdGFuay5qcyJdLCJuYW1lcyI6WyJUYW5rIiwicmVxdWlyZSIsIlRhZ09mRGlyZWN0aW9uIiwiY2MiLCJFbnVtIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidGFua18xIiwiU3ByaXRlRnJhbWUiLCJ0YW5rXzIiLCJ0YW5rXzMiLCJ0YW5rXzQiLCJvbkxvYWQiLCJtYXAiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJnZXRDb21wb25lbnQiLCJfc3VwZXIiLCJVc2VySW5mbyIsImxpdmUiLCJpc19lbmVteSIsIm1vdmVTcGVlZCIsImZpcmVTcGVlZCIsInRhbmtfbGV2ZWwiLCJtb3ZlVXAiLCJpc19wYXVzZSIsImlzX292ZXIiLCJkaXJlY3Rpb24iLCJub2RlIiwiYW5nbGUiLCJhIiwiZ2V0VGlsZWRDb29yZGluYXRlIiwicG9zaXRpb24iLCJiIiwieCIsInBvcyIsImdldFBvc0Zyb21UaWxlZCIsInkiLCJtb3ZlRG93biIsImdldFRpbGVkUm91bmRDb29yZGluYXRlIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJvbkZpcmUiLCJwbGF5ZXIiLCJhY3RpdmUiLCJvbkRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUUxQixJQUFJQyxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUc7QUFDWCxDQUFDLENBQUM7QUFFRkwsRUFBRSxDQUFDTSxLQUFLLENBQUM7RUFDTCxXQUFTVCxJQUFJO0VBRWJVLFVBQVUsRUFB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QyxDQUFDTyxDQUFDLEdBQUMsQ0FBQztNQUNiLElBQUlBLEdBQUMsSUFBRSxDQUFDLEVBQUM7UUFDTFAsQ0FBQyxDQUFDTyxDQUFDLEVBQUU7TUFDVDtNQUNBLElBQUlGLEtBQUcsR0FBRyxJQUFJLENBQUN2QixHQUFHLENBQUN3QixlQUFlLENBQUNOLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUNGLElBQUksQ0FBQ0ksUUFBUSxHQUFHRyxLQUFHO0lBQzVCLENBQUMsTUFDSSxJQUFJUixTQUFTLElBQUk5QixjQUFjLENBQUNJLEtBQUssRUFBQyxDQUUzQztJQUNBLElBQUksQ0FBQ2dCLE1BQU0sRUFBRTtFQUNqQixDQUFDO0VBRUR5QixNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUk1QyxFQUFFLENBQUNlLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNVLFFBQVEsRUFBRTtJQUNoQyxJQUFJM0IsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVyxPQUFPLEVBQUU7SUFDL0IsSUFBSWlCLE1BQU0sR0FBRzdDLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQzRCLE1BQU07SUFDckMsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNmLElBQUksSUFBSWUsTUFBTSxDQUFDZixJQUFJLENBQUNnQixNQUFNLEVBQUM7TUFDNUMsSUFBSSxDQUFDM0IsTUFBTSxFQUFFO0lBQ2pCO0VBQ0osQ0FBQztFQUVENEIsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7RUFDdEM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmxldCBUYW5rID0gcmVxdWlyZSgnVGFuaycpXHJcblxyXG52YXIgVGFnT2ZEaXJlY3Rpb24gPSBjYy5FbnVtKHtcclxuICAgIHVwIDogMCxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIGRvd24gOiAyLFxyXG4gICAgbGVmdCA6IDMsXHJcbn0pXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBUYW5rLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0YW5rXzEgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfMiA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua18zIDogW2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICB0YW5rXzQgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNjLnZ2Lkdsb2JhbC5nYW1lLm1hcC5nZXRDb21wb25lbnQoJ2dhbWVfbWFwJylcclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICAgICAgY2MudnYuVXNlckluZm8ubGl2ZSAtLVxyXG4gICAgICAgIHRoaXMuaXNfZW5lbXkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gMi42MjVcclxuICAgICAgICB0aGlzLmZpcmVTcGVlZCA9IDUuMjVcclxuICAgICAgICB0aGlzLnRhbmtfbGV2ZWwgPSAxXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcCAoKXtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQsMTExMSlcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMubWFwKSByZXR1cm5cclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gLXRoaXMubm9kZS5hbmdsZSAvIDkwO1xyXG4gICAgICAgIC8vIHZhciBhID0gdGhpcy5tYXAuZ2V0VGlsZWRSb3VuZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKSAgICBcclxuICAgICAgICBsZXQgYiA9IHRoaXMubm9kZS5wb3NpdGlvblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVEb3duICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVMZWZ0ICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgICAgICAgbGV0IHkgPSBhLnklMlxyXG4gICAgICAgICAgICBpZiAoeSE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLnktLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVSaWdodCAoKXtcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMubWFwKSByZXR1cm5cclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gLXRoaXMubm9kZS5hbmdsZSAvIDkwO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5tYXAuZ2V0VGlsZWRSb3VuZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueSsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICAgICAgICBsZXQgeCA9IGEueCUyXHJcbiAgICAgICAgICAgIGlmICh4IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgIH0sXHJcblxyXG4gICAgb25GaXJlICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJcclxuICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5ub2RlICYmIHBsYXllci5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIHRhbmsgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=