
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/point.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxccG9pbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludHMiLCJTcHJpdGVGcmFtZSIsInN0YXJ0IiwiX3RoaXMiLCJzY2hlZHVsZU9uY2UiLCJub2RlIiwiZGVzdHJveSIsImluaXQiLCJwb2ludCIsImljb24iLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxDQUFDSixFQUFFLENBQUNLLFdBQVc7RUFDM0IsQ0FBQztFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFBQSxJQUFBQyxLQUFBO0lBQ0wsSUFBSSxDQUFDQyxZQUFZLENBQUMsWUFBSTtNQUNsQkQsS0FBSSxDQUFDRSxJQUFJLENBQUNDLE9BQU8sRUFBRTtJQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQztFQUVEQyxJQUFJLFdBQUFBLEtBQUVDLEtBQUssRUFBQztJQUNSLElBQUlDLElBQUksR0FBRyxJQUFJLENBQUNKLElBQUksQ0FBQ0ssWUFBWSxDQUFDZCxFQUFFLENBQUNlLE1BQU0sQ0FBQztJQUM1QyxJQUFJSCxLQUFLLElBQUksR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUNkLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQ25CLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQ25CLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQ25CLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUMsQ0FBQztFQUMzQjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcG9pbnRzOiBbY2MuU3ByaXRlRnJhbWVdXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgKHBvaW50KXtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGlmIChwb2ludCA9PSAxMDApe31cclxuICAgICAgICBlbHNlIGlmIChwb2ludCA9PSAyMDApe31cclxuICAgICAgICBlbHNlIGlmIChwb2ludCA9PSAzMDApe31cclxuICAgICAgICBlbHNlIGlmIChwb2ludCA9PSA0MDApe31cclxuICAgICAgICBlbHNlIGlmIChwb2ludCA9PSA1MDApe31cclxuICAgIH1cclxufSk7XHJcbiJdfQ==