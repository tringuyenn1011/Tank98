
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/stage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bebf8SHoyhBfqEFZzEXkLGP', 'stage');
// Script/ui/stage.js

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
    layout1: cc.Node,
    layout2: cc.Node,
    stage_lab: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;
    cc.vv.Audio.playStart();
    this.layout1.active = false;
    this.layout2.active = false;
    this.layout1.width = this.node.width; //cc.winSize.width
    this.layout1.height = this.node.height; //cc.winSize.height
    this.layout1.position = cc.v2(0, 0);
    this.layout2.width = this.node.width; //cc.winSize.width
    this.layout2.height = this.node.height; //cc.winSize.height
    this.layout2.position = cc.v2(0, 0);
    this.layout1.y = cc.winSize.height;
    this.layout2.y = -cc.winSize.height;
    this.layout1.active = true;
    this.layout2.active = true;
    this.stage_lab.string = 'STAGE  ' + cc.vv.UserInfo.level;
    this.layout1.runAction(cc.moveTo(0.6, cc.v2(0, 0)));
    this.layout2.runAction(cc.moveTo(0.6, cc.v2(0, 0)));
    this.scheduleOnce(function () {
      cc.vv.Global.game.is_pause = false;
      cc.vv.Global.game.is_over = false;
      _this.node.destroy();
    }, 2);
  },
  onDestroy: function onDestroy() {
    console.log('stage destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxcc3RhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYXlvdXQxIiwiTm9kZSIsImxheW91dDIiLCJzdGFnZV9sYWIiLCJMYWJlbCIsInN0YXJ0IiwiX3RoaXMiLCJ2diIsIkF1ZGlvIiwicGxheVN0YXJ0IiwiYWN0aXZlIiwid2lkdGgiLCJub2RlIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ2MiIsInkiLCJ3aW5TaXplIiwic3RyaW5nIiwiVXNlckluZm8iLCJsZXZlbCIsInJ1bkFjdGlvbiIsIm1vdmVUbyIsInNjaGVkdWxlT25jZSIsIkdsb2JhbCIsImdhbWUiLCJpc19wYXVzZSIsImlzX292ZXIiLCJkZXN0cm95Iiwib25EZXN0cm95IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsT0FBTyxFQUFFSixFQUFFLENBQUNLLElBQUk7SUFDaEJDLE9BQU8sRUFBRU4sRUFBRSxDQUFDSyxJQUFJO0lBQ2hCRSxTQUFTLEVBQUVQLEVBQUUsQ0FBQ1E7RUFDbEIsQ0FBQztFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFBQSxJQUFBQyxLQUFBO0lBQ0xWLEVBQUUsQ0FBQ1csRUFBRSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsRUFBRTtJQUV2QixJQUFJLENBQUNULE9BQU8sQ0FBQ1UsTUFBTSxHQUFHLEtBQUs7SUFDM0IsSUFBSSxDQUFDUixPQUFPLENBQUNRLE1BQU0sR0FBRyxLQUFLO0lBQzNCLElBQUksQ0FBQ1YsT0FBTyxDQUFDVyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNELEtBQUs7SUFDcEMsSUFBSSxDQUFDWCxPQUFPLENBQUNhLE1BQU0sR0FBRyxJQUFJLENBQUNELElBQUksQ0FBQ0MsTUFBTTtJQUN0QyxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsUUFBUSxHQUFHbEIsRUFBRSxDQUFDbUIsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDYixPQUFPLENBQUNTLEtBQUssR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0QsS0FBSztJQUNwQyxJQUFJLENBQUNULE9BQU8sQ0FBQ1csTUFBTSxHQUFHLElBQUksQ0FBQ0QsSUFBSSxDQUFDQyxNQUFNO0lBQ3RDLElBQUksQ0FBQ1gsT0FBTyxDQUFDWSxRQUFRLEdBQUdsQixFQUFFLENBQUNtQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLENBQUMsR0FBR3BCLEVBQUUsQ0FBQ3FCLE9BQU8sQ0FBQ0osTUFBTTtJQUNsQyxJQUFJLENBQUNYLE9BQU8sQ0FBQ2MsQ0FBQyxHQUFHLENBQUNwQixFQUFFLENBQUNxQixPQUFPLENBQUNKLE1BQU07SUFDbkMsSUFBSSxDQUFDYixPQUFPLENBQUNVLE1BQU0sR0FBRyxJQUFJO0lBQzFCLElBQUksQ0FBQ1IsT0FBTyxDQUFDUSxNQUFNLEdBQUcsSUFBSTtJQUUxQixJQUFJLENBQUNQLFNBQVMsQ0FBQ2UsTUFBTSxHQUFHLFNBQVMsR0FBR3RCLEVBQUUsQ0FBQ1csRUFBRSxDQUFDWSxRQUFRLENBQUNDLEtBQUs7SUFFeEQsSUFBSSxDQUFDcEIsT0FBTyxDQUFDcUIsU0FBUyxDQUFDekIsRUFBRSxDQUFDMEIsTUFBTSxDQUFDLEdBQUcsRUFBRTFCLEVBQUUsQ0FBQ21CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUNiLE9BQU8sQ0FBQ21CLFNBQVMsQ0FBQ3pCLEVBQUUsQ0FBQzBCLE1BQU0sQ0FBQyxHQUFHLEVBQUUxQixFQUFFLENBQUNtQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDUSxZQUFZLENBQUMsWUFBSTtNQUNsQjNCLEVBQUUsQ0FBQ1csRUFBRSxDQUFDaUIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVEsR0FBRyxLQUFLO01BQ2xDOUIsRUFBRSxDQUFDVyxFQUFFLENBQUNpQixNQUFNLENBQUNDLElBQUksQ0FBQ0UsT0FBTyxHQUFHLEtBQUs7TUFDakNyQixLQUFJLENBQUNNLElBQUksQ0FBQ2dCLE9BQU8sRUFBRTtJQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQztFQUVEQyxTQUFTLFdBQUFBLFVBQUEsRUFBRTtJQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDaEM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxheW91dDE6IGNjLk5vZGUsXHJcbiAgICAgICAgbGF5b3V0MjogY2MuTm9kZSxcclxuICAgICAgICBzdGFnZV9sYWI6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLnZ2LkF1ZGlvLnBsYXlTdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0MS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGF5b3V0Mi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGF5b3V0MS53aWR0aCA9IHRoaXMubm9kZS53aWR0aC8vY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgIHRoaXMubGF5b3V0MS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0Ly9jYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgIHRoaXMubGF5b3V0MS5wb3NpdGlvbiA9IGNjLnYyKDAsMClcclxuICAgICAgICB0aGlzLmxheW91dDIud2lkdGggPSB0aGlzLm5vZGUud2lkdGgvL2NjLndpblNpemUud2lkdGhcclxuICAgICAgICB0aGlzLmxheW91dDIuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodC8vY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICB0aGlzLmxheW91dDIucG9zaXRpb24gPSBjYy52MigwLDApXHJcbiAgICAgICAgdGhpcy5sYXlvdXQxLnkgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgIHRoaXMubGF5b3V0Mi55ID0gLWNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5sYXlvdXQxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmxheW91dDIuYWN0aXZlID0gdHJ1ZVxyXG5cclxuICAgICAgICB0aGlzLnN0YWdlX2xhYi5zdHJpbmcgPSAnU1RBR0UgICcgKyBjYy52di5Vc2VySW5mby5sZXZlbFxyXG5cclxuICAgICAgICB0aGlzLmxheW91dDEucnVuQWN0aW9uKGNjLm1vdmVUbygwLjYsIGNjLnYyKDAsIDApKSlcclxuICAgICAgICB0aGlzLmxheW91dDIucnVuQWN0aW9uKGNjLm1vdmVUbygwLjYsIGNjLnYyKDAsIDApKSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0sIDIpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFnZSBkZXN0cm95JylcclxuICAgIH1cclxufSk7XHJcbiJdfQ==