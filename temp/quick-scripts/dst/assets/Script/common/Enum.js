
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Enum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa62dA9PNtPeaiGEo4vIetV', 'Enum');
// Script/common/Enum.js

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

// 单机游戏级别
var Single_Game_Type = cc.Enum({
  Single1: 1,
  // 初出茅庐
  Single2: 2,
  // 小有名气
  Single3: 3,
  // 名扬四海
  Single4: 4 // 炉火纯青
});

// 游戏类别
var Game_Type = cc.Enum({
  type1: 1,
  // 对战
  type2: 2,
  // 揭棋
  type3: 3,
  // 残局
  type4: 4,
  // 单机
  type5: 5 // 推演
});

var Props = cc.Enum({
  zhalei: 1,
  // 炸雷
  maozi: 2,
  // 防护帽
  tieqiao: 3,
  // 铁锹
  star: 4,
  // 星星
  tank: 5,
  // tank
  dinglei: 6 // 定雷
});

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.Props = Props, this.Single_Game_Type = Single_Game_Type, this.Game_Type = Game_Type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEVudW0uanMiXSwibmFtZXMiOlsiU2luZ2xlX0dhbWVfVHlwZSIsImNjIiwiRW51bSIsIlNpbmdsZTEiLCJTaW5nbGUyIiwiU2luZ2xlMyIsIlNpbmdsZTQiLCJHYW1lX1R5cGUiLCJ0eXBlMSIsInR5cGUyIiwidHlwZTMiLCJ0eXBlNCIsInR5cGU1IiwiUHJvcHMiLCJ6aGFsZWkiLCJtYW96aSIsInRpZXFpYW8iLCJzdGFyIiwidGFuayIsImRpbmdsZWkiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQzNCQyxPQUFPLEVBQUUsQ0FBQztFQUFFO0VBQ1pDLE9BQU8sRUFBRSxDQUFDO0VBQUU7RUFDWkMsT0FBTyxFQUFFLENBQUM7RUFBRTtFQUNaQyxPQUFPLEVBQUUsQ0FBQyxDQUFFO0FBQ2hCLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUlDLFNBQVMsR0FBR04sRUFBRSxDQUFDQyxJQUFJLENBQUM7RUFDcEJNLEtBQUssRUFBRyxDQUFDO0VBQUU7RUFDWEMsS0FBSyxFQUFHLENBQUM7RUFBRTtFQUNYQyxLQUFLLEVBQUcsQ0FBQztFQUFFO0VBQ1hDLEtBQUssRUFBRyxDQUFDO0VBQUU7RUFDWEMsS0FBSyxFQUFHLENBQUMsQ0FBRTtBQUNmLENBQUMsQ0FBQzs7QUFFRixJQUFJQyxLQUFLLEdBQUdaLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ2hCWSxNQUFNLEVBQUcsQ0FBQztFQUFFO0VBQ1pDLEtBQUssRUFBRyxDQUFDO0VBQUU7RUFDWEMsT0FBTyxFQUFHLENBQUM7RUFBRTtFQUNiQyxJQUFJLEVBQUcsQ0FBQztFQUFFO0VBQ1ZDLElBQUksRUFBRyxDQUFDO0VBQUU7RUFDVkMsT0FBTyxFQUFHLENBQUMsQ0FBRTtBQUNqQixDQUFDLENBQUM7O0FBRUZsQixFQUFFLENBQUNtQixLQUFLLENBQUM7RUFDTCxXQUFTbkIsRUFBRSxDQUFDb0IsU0FBUztFQUVyQkMsSUFBSSxXQUFBQSxLQUFBLEVBQUU7SUFDRixJQUFJLENBQUNULEtBQUssR0FBR0EsS0FBSyxFQUNsQixJQUFJLENBQUNiLGdCQUFnQixHQUFHQSxnQkFBZ0IsRUFDeEMsSUFBSSxDQUFDTyxTQUFTLEdBQUdBLFNBQVM7RUFDOUI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG4vLyDljZXmnLrmuLjmiI/nuqfliKtcclxubGV0IFNpbmdsZV9HYW1lX1R5cGUgPSBjYy5FbnVtKHtcclxuICAgIFNpbmdsZTE6IDEsIC8vIOWIneWHuuiMheW6kFxyXG4gICAgU2luZ2xlMjogMiwgLy8g5bCP5pyJ5ZCN5rCUXHJcbiAgICBTaW5nbGUzOiAzLCAvLyDlkI3miazlm5vmtbdcclxuICAgIFNpbmdsZTQ6IDQsIC8vIOeCieeBq+e6r+mdklxyXG59KVxyXG5cclxuLy8g5ri45oiP57G75YirXHJcbmxldCBHYW1lX1R5cGUgPSBjYy5FbnVtKHtcclxuICAgIHR5cGUxIDogMSwgLy8g5a+55oiYXHJcbiAgICB0eXBlMiA6IDIsIC8vIOaPreaji1xyXG4gICAgdHlwZTMgOiAzLCAvLyDmrovlsYBcclxuICAgIHR5cGU0IDogNCwgLy8g5Y2V5py6XHJcbiAgICB0eXBlNSA6IDUsIC8vIOaOqOa8lFxyXG59KVxyXG5cclxubGV0IFByb3BzID0gY2MuRW51bSh7XHJcbiAgICB6aGFsZWkgOiAxLCAvLyDngrjpm7dcclxuICAgIG1hb3ppIDogMiwgLy8g6Ziy5oqk5bi9XHJcbiAgICB0aWVxaWFvIDogMywgLy8g6ZOB6ZS5XHJcbiAgICBzdGFyIDogNCwgLy8g5pif5pifXHJcbiAgICB0YW5rIDogNSwgLy8gdGFua1xyXG4gICAgZGluZ2xlaSA6IDYsIC8vIOWumumbt1xyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLlByb3BzID0gUHJvcHMsXHJcbiAgICAgICAgdGhpcy5TaW5nbGVfR2FtZV9UeXBlID0gU2luZ2xlX0dhbWVfVHlwZSxcclxuICAgICAgICB0aGlzLkdhbWVfVHlwZSA9IEdhbWVfVHlwZVxyXG4gICAgfVxyXG59KTtcclxuIl19