
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca435xLbA9KD58mH9KDL4jD', 'Global');
// Script/common/Global.js

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
  ctor: function ctor() {
    this.game = null;
    this.map = null;
    this.tieqiao_time = null;
    this.dinglei_time = null;
    this.enemy_count = 20;
    this.stage_info = null;
    this.die_tank = {
      tank_1: 0,
      tank_2: 0,
      tank_3: 0,
      tank_4: 0
    };
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  isGrassland: function isGrassland(tid) {
    if (tid >= 9 && tid <= 12 || tid >= 37 && tid <= 40 || tid >= 65 && tid <= 68 || tid >= 93 && tid <= 96) {
      return true;
    }
    return false;
  },
  isGoldWall: function isGoldWall(tid) {
    if (tid >= 5 && tid <= 8 || tid >= 33 && tid <= 36 || tid >= 61 && tid <= 64 || tid >= 89 && tid <= 92) {
      return true;
    }
    return false;
  },
  isCobWall: function isCobWall(tid) {
    if (tid >= 1 && tid <= 4 || tid >= 29 && tid <= 32 || tid >= 57 && tid <= 60 || tid >= 85 && tid <= 88) {
      return true;
    }
    return false;
  },
  isRiver: function isRiver(tid) {
    if (tid >= 13 && tid <= 20 || tid >= 41 && tid <= 48 || tid >= 69 && tid <= 76 || tid >= 97 && tid <= 104) {
      return true;
    }
    return false;
  },
  isHome: function isHome(tid) {
    if (tid >= 21 && tid <= 28 || tid >= 49 && tid <= 56 || tid >= 77 && tid <= 84 || tid >= 105 && tid <= 112) {
      return true;
    }
    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEdsb2JhbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsImdhbWUiLCJtYXAiLCJ0aWVxaWFvX3RpbWUiLCJkaW5nbGVpX3RpbWUiLCJlbmVteV9jb3VudCIsInN0YWdlX2luZm8iLCJkaWVfdGFuayIsInRhbmtfMSIsInRhbmtfMiIsInRhbmtfMyIsInRhbmtfNCIsInN0YXJ0IiwiaXNHcmFzc2xhbmQiLCJ0aWQiLCJpc0dvbGRXYWxsIiwiaXNDb2JXYWxsIiwiaXNSaXZlciIsImlzSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxJQUFJLFdBQUFBLEtBQUEsRUFBRTtJQUNGLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSTtJQUVmLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUk7SUFDeEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSTtJQUV4QixJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUk7SUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7TUFDWkMsTUFBTSxFQUFHLENBQUM7TUFDVkMsTUFBTSxFQUFHLENBQUM7TUFDVkMsTUFBTSxFQUFHLENBQUM7TUFDVkMsTUFBTSxFQUFHO0lBQ2IsQ0FBQztFQUNMLENBQUM7RUFFRDtFQUVBO0VBRUFDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUVEQyxXQUFXLFdBQUFBLFlBQUNDLEdBQUcsRUFBQztJQUNaLElBQUtBLEdBQUcsSUFBSSxDQUFDLElBQUlBLEdBQUcsSUFBSSxFQUFFLElBQU1BLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLEVBQUM7TUFDNUcsT0FBTyxJQUFJO0lBQ2Y7SUFDQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVEQyxVQUFVLFdBQUFBLFdBQUNELEdBQUcsRUFBQztJQUNYLElBQUtBLEdBQUcsSUFBSSxDQUFDLElBQUlBLEdBQUcsSUFBSSxDQUFDLElBQU1BLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLEVBQUM7TUFDM0csT0FBTyxJQUFJO0lBQ2Y7SUFDQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVERSxTQUFTLFdBQUFBLFVBQUNGLEdBQUcsRUFBQztJQUNWLElBQUtBLEdBQUcsSUFBSSxDQUFDLElBQUlBLEdBQUcsSUFBSSxDQUFDLElBQU1BLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLEVBQUM7TUFDM0csT0FBTyxJQUFJO0lBQ2Y7SUFDQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVERyxPQUFPLFdBQUFBLFFBQUNILEdBQUcsRUFBQztJQUNSLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFFLElBQU1BLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxHQUFJLEVBQUM7TUFDOUcsT0FBTyxJQUFJO0lBQ2Y7SUFDQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUNKLEdBQUcsRUFBQztJQUNQLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFFLElBQU1BLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxFQUFFLElBQUlBLEdBQUcsSUFBSSxFQUFHLElBQUtBLEdBQUcsSUFBSSxHQUFHLElBQUlBLEdBQUcsSUFBSSxHQUFJLEVBQUM7TUFDL0csT0FBTyxJQUFJO0lBQ2Y7SUFDQSxPQUFPLEtBQUs7RUFDaEI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG51bGxcclxuICAgICAgICB0aGlzLm1hcCA9IG51bGxcclxuXHJcbiAgICAgICAgdGhpcy50aWVxaWFvX3RpbWUgPSBudWxsXHJcbiAgICAgICAgdGhpcy5kaW5nbGVpX3RpbWUgPSBudWxsXHJcblxyXG4gICAgICAgIHRoaXMuZW5lbXlfY291bnQgPSAyMFxyXG4gICAgICAgIHRoaXMuc3RhZ2VfaW5mbyA9IG51bGxcclxuICAgICAgICB0aGlzLmRpZV90YW5rID0ge1xyXG4gICAgICAgICAgICB0YW5rXzEgOiAwLFxyXG4gICAgICAgICAgICB0YW5rXzIgOiAwLFxyXG4gICAgICAgICAgICB0YW5rXzMgOiAwLFxyXG4gICAgICAgICAgICB0YW5rXzQgOiAwLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGlzR3Jhc3NsYW5kKHRpZCl7XHJcbiAgICAgICAgaWYgKCh0aWQgPj0gOSAmJiB0aWQgPD0gMTIpIHx8ICh0aWQgPj0gMzcgJiYgdGlkIDw9IDQwKSB8fCAodGlkID49IDY1ICYmIHRpZCA8PSA2OCkgfHwgKHRpZCA+PSA5MyAmJiB0aWQgPD0gOTYpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGlzR29sZFdhbGwodGlkKXtcclxuICAgICAgICBpZiAoKHRpZCA+PSA1ICYmIHRpZCA8PSA4KSB8fCAodGlkID49IDMzICYmIHRpZCA8PSAzNikgfHwgKHRpZCA+PSA2MSAmJiB0aWQgPD0gNjQpIHx8ICh0aWQgPj0gODkgJiYgdGlkIDw9IDkyKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBpc0NvYldhbGwodGlkKXtcclxuICAgICAgICBpZiAoKHRpZCA+PSAxICYmIHRpZCA8PSA0KSB8fCAodGlkID49IDI5ICYmIHRpZCA8PSAzMikgfHwgKHRpZCA+PSA1NyAmJiB0aWQgPD0gNjApIHx8ICh0aWQgPj0gODUgJiYgdGlkIDw9IDg4KSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1JpdmVyKHRpZCl7XHJcbiAgICAgICAgaWYgKCh0aWQgPj0gMTMgJiYgdGlkIDw9IDIwKSB8fCAodGlkID49IDQxICYmIHRpZCA8PSA0OCkgfHwgKHRpZCA+PSA2OSAmJiB0aWQgPD0gNzYpIHx8ICh0aWQgPj0gOTcgJiYgdGlkIDw9IDEwNCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgaXNIb21lKHRpZCl7XHJcbiAgICAgICAgaWYgKCh0aWQgPj0gMjEgJiYgdGlkIDw9IDI4KSB8fCAodGlkID49IDQ5ICYmIHRpZCA8PSA1NikgfHwgKHRpZCA+PSA3NyAmJiB0aWQgPD0gODQpIHx8ICh0aWQgPj0gMTA1ICYmIHRpZCA8PSAxMTIpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9LFxyXG59KTtcclxuIl19