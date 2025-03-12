
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFx0b2FzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5pdCIsImRhdGEiLCJfdGhpcyIsInN0YXRlIiwibGFiIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJ0ZXh0Iiwibm9kZSIsInkiLCJ3aW5TaXplIiwiaGVpZ2h0IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ2MiIsImRlbGF5VGltZSIsImNhbGxGdW5jIiwic3RhdHVzIiwicmVzdWx0IiwiaW5zdGFudGlhdGUiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJnYW1lX3Jlc3VsdCIsImFkZENoaWxkIiwiZGVzdHJveSIsIm9uRGVzdHJveSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUEsQ0FDSDtFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBRURDLElBQUksV0FBQUEsS0FBRUMsSUFBSSxFQUFDO0lBQUEsSUFBQUMsS0FBQTtJQUNQLElBQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRSxLQUFLLEVBQUM7SUFDdkIsSUFBSUMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDVixFQUFFLENBQUNXLEtBQUssQ0FBQztJQUNyQ0YsR0FBRyxDQUFDRyxNQUFNLEdBQUdOLElBQUksQ0FBQ08sSUFBSTtJQUV0QixJQUFJTCxLQUFLLElBQUksQ0FBQyxFQUFDO01BQ1gsSUFBSSxDQUFDTSxJQUFJLENBQUNDLENBQUMsR0FBRyxDQUFDZixFQUFFLENBQUNnQixPQUFPLENBQUNDLE1BQU0sR0FBRyxHQUFHO01BRXRDLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxTQUFTLENBQUNsQixFQUFFLENBQUNtQixRQUFRLENBQUNuQixFQUFFLENBQUNvQixNQUFNLENBQUMsR0FBRyxFQUFFcEIsRUFBRSxDQUFDcUIsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFFckIsRUFBRSxDQUFDc0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxDQUFDdUIsUUFBUSxDQUFDLFlBQUk7UUFDN0YsSUFBSWpCLElBQUksR0FBRztVQUNQa0IsTUFBTSxFQUFHO1FBQ2IsQ0FBQztRQUNELElBQUlDLE1BQU0sR0FBR3pCLEVBQUUsQ0FBQzBCLFdBQVcsQ0FBQzFCLEVBQUUsQ0FBQzJCLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztRQUMxRDlCLEVBQUUsQ0FBQzJCLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNmLElBQUksQ0FBQ2lCLFFBQVEsQ0FBQ04sTUFBTSxDQUFDO1FBQ3ZDQSxNQUFNLENBQUNmLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQ0wsSUFBSSxDQUFDQyxJQUFJLENBQUM7UUFDN0NDLEtBQUksQ0FBQ08sSUFBSSxDQUFDa0IsT0FBTyxFQUFFO01BQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUjtFQUNKLENBQUM7RUFFREMsU0FBUyxXQUFBQSxVQUFBLEVBQUU7SUFDUEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQ2hDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgKGRhdGEpe1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IGRhdGEuc3RhdGUgLy8gMea4uOaIj+e7k+adnyAy5pqC5YGcXHJcbiAgICAgICAgbGV0IGxhYiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGxhYi5zdHJpbmcgPSBkYXRhLnRleHRcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IC1jYy53aW5TaXplLmhlaWdodCAtIDEwMFxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDIuNSwgY2MudjIoMCwyMDApKSwgY2MuZGVsYXlUaW1lKDAuOCksIGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2MuaW5zdGFudGlhdGUoY2MudnYuR2xvYmFsLmdhbWUuZ2FtZV9yZXN1bHQpXHJcbiAgICAgICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5ub2RlLmFkZENoaWxkKHJlc3VsdClcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5nZXRDb21wb25lbnQoJ2dhbWVfcmVzdWx0JykuaW5pdChkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=