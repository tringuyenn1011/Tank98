
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/common/Audio');
require('./assets/Script/common/Config');
require('./assets/Script/common/Enum');
require('./assets/Script/common/Global');
require('./assets/Script/common/Tank');
require('./assets/Script/common/Tools');
require('./assets/Script/common/UserInfo');
require('./assets/Script/game/appear');
require('./assets/Script/game/bullet');
require('./assets/Script/game/caozuo');
require('./assets/Script/game/direction');
require('./assets/Script/game/direction2');
require('./assets/Script/game/enemy_tank');
require('./assets/Script/game/fire_flower');
require('./assets/Script/game/game_map');
require('./assets/Script/game/player_tank');
require('./assets/Script/game/props');
require('./assets/Script/game/rocker');
require('./assets/Script/game/shield');
require('./assets/Script/game/toast');
require('./assets/Script/game_control');
require('./assets/Script/home_control');
require('./assets/Script/login_control');
require('./assets/Script/ui/game_over');
require('./assets/Script/ui/game_result');
require('./assets/Script/ui/point');
require('./assets/Script/ui/stage');
require('./assets/migration/use_reversed_rotateBy');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29c1dKnSx9NGYhPpma5nZ22', 'login_control');
// Script/login_control.js

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

    hoverColor: cc.Color,
    defaultColor: cc.Color
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.currentIndex = 0;
  },
  start: function start() {
    cc.vv = {};
    var Enum = require('Enum');
    cc.vv.Enum = new Enum();
    var Global = require('Global');
    cc.vv.Global = new Global();
    var Config = require('Config');
    cc.vv.Config = new Config();
    var UserInfo = require('UserInfo');
    cc.vv.UserInfo = new UserInfo();
    var Tools = require('Tools');
    cc.vv.Tools = new Tools();
    var Audio = require('Audio');
    cc.vv.Audio = new Audio();
  },
  onClickBtn: function onClickBtn() {
    cc.director.loadScene('home_scene');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpbl9jb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaG92ZXJDb2xvciIsIkNvbG9yIiwiZGVmYXVsdENvbG9yIiwib25Mb2FkIiwiY3VycmVudEluZGV4Iiwic3RhcnQiLCJ2diIsIkVudW0iLCJyZXF1aXJlIiwiR2xvYmFsIiwiQ29uZmlnIiwiVXNlckluZm8iLCJUb29scyIsIkF1ZGlvIiwib25DbGlja0J0biIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQUMsVUFBVSxFQUFFSixFQUFFLENBQUNLLEtBQUs7SUFDcEJDLFlBQVksRUFBRU4sRUFBRSxDQUFDSztFQUNyQixDQUFDO0VBRUQ7RUFFQUUsTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFDTixJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDO0VBRXpCLENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFFTFQsRUFBRSxDQUFDVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRVYsSUFBSUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzFCWixFQUFFLENBQUNVLEVBQUUsQ0FBQ0MsSUFBSSxHQUFHLElBQUlBLElBQUksRUFBRTtJQUN2QixJQUFJRSxNQUFNLEdBQUdELE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDOUJaLEVBQUUsQ0FBQ1UsRUFBRSxDQUFDRyxNQUFNLEdBQUcsSUFBSUEsTUFBTSxFQUFFO0lBQzNCLElBQUlDLE1BQU0sR0FBR0YsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM5QlosRUFBRSxDQUFDVSxFQUFFLENBQUNJLE1BQU0sR0FBRyxJQUFJQSxNQUFNLEVBQUU7SUFDM0IsSUFBSUMsUUFBUSxHQUFHSCxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2xDWixFQUFFLENBQUNVLEVBQUUsQ0FBQ0ssUUFBUSxHQUFHLElBQUlBLFFBQVEsRUFBRTtJQUMvQixJQUFJQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDNUJaLEVBQUUsQ0FBQ1UsRUFBRSxDQUFDTSxLQUFLLEdBQUcsSUFBSUEsS0FBSyxFQUFFO0lBQ3pCLElBQUlDLEtBQUssR0FBR0wsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM1QlosRUFBRSxDQUFDVSxFQUFFLENBQUNPLEtBQUssR0FBRyxJQUFJQSxLQUFLLEVBQUU7RUFHN0IsQ0FBQztFQUVEQyxVQUFVLFdBQUFBLFdBQUEsRUFBRTtJQUNSbEIsRUFBRSxDQUFDbUIsUUFBUSxDQUFDQyxTQUFTLENBQUMsWUFBWSxDQUFDO0VBQ3ZDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgaG92ZXJDb2xvcjogY2MuQ29sb3IsXG4gICAgICAgIGRlZmF1bHRDb2xvcjogY2MuQ29sb3IsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgICAgICBjYy52diA9IHt9XG5cbiAgICAgICAgbGV0IEVudW0gPSByZXF1aXJlKCdFbnVtJylcbiAgICAgICAgY2MudnYuRW51bSA9IG5ldyBFbnVtKClcbiAgICAgICAgbGV0IEdsb2JhbCA9IHJlcXVpcmUoJ0dsb2JhbCcpXG4gICAgICAgIGNjLnZ2Lkdsb2JhbCA9IG5ldyBHbG9iYWwoKVxuICAgICAgICBsZXQgQ29uZmlnID0gcmVxdWlyZSgnQ29uZmlnJylcbiAgICAgICAgY2MudnYuQ29uZmlnID0gbmV3IENvbmZpZygpXG4gICAgICAgIGxldCBVc2VySW5mbyA9IHJlcXVpcmUoJ1VzZXJJbmZvJylcbiAgICAgICAgY2MudnYuVXNlckluZm8gPSBuZXcgVXNlckluZm8oKVxuICAgICAgICBsZXQgVG9vbHMgPSByZXF1aXJlKCdUb29scycpXG4gICAgICAgIGNjLnZ2LlRvb2xzID0gbmV3IFRvb2xzKClcbiAgICAgICAgbGV0IEF1ZGlvID0gcmVxdWlyZSgnQXVkaW8nKVxuICAgICAgICBjYy52di5BdWRpbyA9IG5ldyBBdWRpbygpXG5cbiAgICAgICAgXG4gICAgfSxcblxuICAgIG9uQ2xpY2tCdG4oKXtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lX3NjZW5lJylcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b97a6rOkmFBtYvPGEX5Zbg2', 'bullet');
// Script/game/bullet.js

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
  left: 3
});
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
  start: function start() {
    this.collision_tuwall = false;
    this.collision_wall = false;
    this.collision_tank = false;
  },
  init: function init(data) {
    this.data = data;
    this.is_enemy = this.data.is_enemy;
    this.is_shield = false;
    this.is_destroy = false;
  },
  moveUp: function moveUp() {
    this.node.angle = -90 * TagOfDirection.up;
    var speed = this.data.speed;
    this.node.y += speed;
    if (this.node.y >= 728) {
      this.collision_wall = true;
      this.node.destroy();
    }
  },
  moveLeft: function moveLeft() {
    this.node.angle = -90 * TagOfDirection.left;
    var speed = this.data.speed;
    this.node.x -= speed;
    if (this.node.x <= 0) {
      this.collision_wall = true;
      this.node.destroy();
    }
  },
  moveDown: function moveDown() {
    this.node.angle = -90 * TagOfDirection.down;
    var speed = this.data.speed;
    this.node.y -= speed;
    if (this.node.y <= 0) {
      this.collision_wall = true;
      this.node.destroy();
    }
  },
  moveRight: function moveRight() {
    this.node.angle = -90 * TagOfDirection.right;
    var speed = this.data.speed;
    this.node.x += speed;
    if (this.node.x >= 728) {
      this.collision_wall = true;
      this.node.destroy();
    }
  },
  update: function update(dt) {
    var direction = this.data.direction;
    var map = this.data.map;
    if (!map) return;
    var is_enemy = this.data.is_enemy;
    this.is_enemy = is_enemy;
    var pos = this.node.position;
    // let leftPos1 = pos.add(cc.v2(-4,0))
    // let leftPos2 = pos.add(cc.v2(-4-8,0))
    // let rightPos1 = pos.add(cc.v2(4,0))
    // let rightPos2 = pos.add(cc.v2(4+8,0))
    // let upPos1 = pos.add(cc.v2(0, 4))
    // let upPos2 = pos.add(cc.v2(0, 4+8))
    // let downPos1 = pos.add(cc.v2(0,-4))
    // let downPos2 = pos.add(cc.v2(0,-4-8))

    var leftPos1 = pos.add(cc.v2(-7, 0));
    var leftPos2 = pos.add(cc.v2(-7 - 14, 0));
    var rightPos1 = pos.add(cc.v2(7, 0));
    var rightPos2 = pos.add(cc.v2(7 + 14, 0));
    var upPos1 = pos.add(cc.v2(0, 7));
    var upPos2 = pos.add(cc.v2(0, 7 + 14));
    var downPos1 = pos.add(cc.v2(0, -7));
    var downPos2 = pos.add(cc.v2(0, -7 - 14));
    var pos_arr = [];
    if (direction == TagOfDirection.up) {
      this.moveUp();
      pos_arr = [leftPos1, leftPos2, rightPos1, rightPos2];
    } else if (direction == TagOfDirection.left) {
      this.moveLeft();
      pos_arr = [upPos1, upPos2, downPos1, downPos2];
    } else if (direction == TagOfDirection.down) {
      this.moveDown();
      pos_arr = [leftPos1, leftPos2, rightPos1, rightPos2];
    } else if (direction == TagOfDirection.right) {
      this.moveRight();
      pos_arr = [upPos1, upPos2, downPos1, downPos2];
    }
    // 检查子弹之间的碰撞
    var p_arr = [].concat(pos_arr);
    p_arr.push(pos);
    for (var i = 0; i < p_arr.length; i++) {
      var bullet = map.collisionBullet(p_arr[i], is_enemy);
      if (bullet) {
        bullet.destroy();
        this.node.destroy();
        return;
      }
    }
    // 检查子弹和坦克之间的碰撞
    for (var _i = 0; _i < pos_arr.length; _i++) {
      // 敌人
      if (is_enemy) {
        var tank = map.collisionBulletAndPlayerTanks(pos_arr[_i]);
        if (tank) {
          this.is_shield = tank.is_shield;
          if (!tank.is_shield) {
            tank.node.destroy();
            this.collision_tank = true;
          }
          this.node.destroy();
          return;
        }
      }
      // 玩家
      else {
        var _tank = map.collisionBulletAndEnemyTanks(pos_arr[_i]);
        if (_tank) {
          console.log(_tank.is_shield, 11111);
          if (!_tank.is_shield) {
            _tank.live--;
            if (_tank.live <= 0) {
              var tank_level = _tank.tank_level;
              cc.vv.Global.die_tank['tank_' + tank_level]++;
              this.collision_tank = true;
              _tank.node.destroy();
            } else {
              this.collision_wall = true;
            }
            if (_tank.tank_hong) {
              console.log('红坦克');
              map.initProps();
            }
            this.node.destroy();
            return;
          }
        }
      }
    }
    // let pos_arr = [/*leftPos1, leftPos2, rightPos1, rightPos2,*/ upPos1, upPos2, downPos1, downPos2]
    for (var _i2 = 0; _i2 < pos_arr.length; _i2++) {
      var tid = map.getTiledIdFromPos(pos_arr[_i2]);
      this.node.zIndex = -1;
      if (tid > 0) {
        if (cc.vv.Global.isGrassland(tid)) {
          // console.log('草地')
        } else if (cc.vv.Global.isGoldWall(tid)) {
          // console.log('金砖')
          this.collision_wall = true;
          this.node.destroy();
          return;
        } else if (cc.vv.Global.isRiver(tid)) {
          // console.log('河')
          this.node.zIndex = this.node.parent.childrenCount;
        } else if (cc.vv.Global.isHome(tid)) {
          console.log('家被打，游戏结束');
          map.bg3.node.active = true;
          this.is_destroy = true;
          cc.vv.Global.game.is_over = true;
        } else {
          // console.log(tid,i)
          this.is_destroy = true;
          var gid_pos = map.getTiledCoordinate(pos_arr[_i2]);
          map.bg1.setTileGIDAt(0, gid_pos.x, gid_pos.y, 0);
        }
      }
    }
    if (this.is_destroy) {
      this.collision_tuwall = true;
      this.node.destroy();
    }
  },
  onDestroy: function onDestroy() {
    if (!this.is_shield) {
      var fire_flower = cc.instantiate(cc.vv.Global.game.fire_flower_prefab);
      fire_flower.position = this.node.position;
      this.node.parent.addChild(fire_flower);
      var data = {
        level: 1,
        is_enemy: this.is_enemy,
        collision_tuwall: this.collision_tuwall,
        collision_wall: this.collision_wall,
        collision_tank: this.collision_tank
      };
      fire_flower.getComponent('fire_flower').init(data);
    }
    this.data.destroy();
    // console.log('bullet destroy')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxidWxsZXQuanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImNvbGxpc2lvbl90dXdhbGwiLCJjb2xsaXNpb25fd2FsbCIsImNvbGxpc2lvbl90YW5rIiwiaW5pdCIsImRhdGEiLCJpc19lbmVteSIsImlzX3NoaWVsZCIsImlzX2Rlc3Ryb3kiLCJtb3ZlVXAiLCJub2RlIiwiYW5nbGUiLCJzcGVlZCIsInkiLCJkZXN0cm95IiwibW92ZUxlZnQiLCJ4IiwibW92ZURvd24iLCJtb3ZlUmlnaHQiLCJ1cGRhdGUiLCJkdCIsImRpcmVjdGlvbiIsIm1hcCIsInBvcyIsInBvc2l0aW9uIiwibGVmdFBvczEiLCJhZGQiLCJ2MiIsImxlZnRQb3MyIiwicmlnaHRQb3MxIiwicmlnaHRQb3MyIiwidXBQb3MxIiwidXBQb3MyIiwiZG93blBvczEiLCJkb3duUG9zMiIsInBvc19hcnIiLCJwX2FyciIsImNvbmNhdCIsInB1c2giLCJpIiwibGVuZ3RoIiwiYnVsbGV0IiwiY29sbGlzaW9uQnVsbGV0IiwidGFuayIsImNvbGxpc2lvbkJ1bGxldEFuZFBsYXllclRhbmtzIiwiY29sbGlzaW9uQnVsbGV0QW5kRW5lbXlUYW5rcyIsImNvbnNvbGUiLCJsb2ciLCJsaXZlIiwidGFua19sZXZlbCIsInZ2IiwiR2xvYmFsIiwiZGllX3RhbmsiLCJ0YW5rX2hvbmciLCJpbml0UHJvcHMiLCJ0aWQiLCJnZXRUaWxlZElkRnJvbVBvcyIsInpJbmRleCIsImlzR3Jhc3NsYW5kIiwiaXNHb2xkV2FsbCIsImlzUml2ZXIiLCJwYXJlbnQiLCJjaGlsZHJlbkNvdW50IiwiaXNIb21lIiwiYmczIiwiYWN0aXZlIiwiZ2FtZSIsImlzX292ZXIiLCJnaWRfcG9zIiwiZ2V0VGlsZWRDb29yZGluYXRlIiwiYmcxIiwic2V0VGlsZUdJREF0Iiwib25EZXN0cm95IiwiZmlyZV9mbG93ZXIiLCJpbnN0YW50aWF0ZSIsImZpcmVfZmxvd2VyX3ByZWZhYiIsImFkZENoaWxkIiwibGV2ZWwiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxJQUFJLENBQUM7RUFDekJDLEVBQUUsRUFBRyxDQUFDO0VBQ05DLEtBQUssRUFBRyxDQUFDO0VBQ1RDLElBQUksRUFBRyxDQUFDO0VBQ1JDLElBQUksRUFBRztBQUNYLENBQUMsQ0FBQztBQUVGTCxFQUFFLENBQUNNLEtBQUssQ0FBQztFQUNMLFdBQVNOLEVBQUUsQ0FBQ08sU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUEsQ0FDSDtFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFDTCxJQUFJLENBQUNDLGdCQUFnQixHQUFHLEtBQUs7SUFDN0IsSUFBSSxDQUFDQyxjQUFjLEdBQUcsS0FBSztJQUMzQixJQUFJLENBQUNDLGNBQWMsR0FBRyxLQUFLO0VBQy9CLENBQUM7RUFFREMsSUFBSSxXQUFBQSxLQUFDQyxJQUFJLEVBQUM7SUFDTixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNELElBQUksQ0FBQ0MsUUFBUTtJQUVsQyxJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBQ3RCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEtBQUs7RUFHM0IsQ0FBQztFQUVEQyxNQUFNLFdBQUFBLE9BQUEsRUFBRTtJQUNKLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUdy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QVksQ0FBQyxhQUFhLENBQUMsQ0FBQzFFLElBQUksQ0FBQ0MsSUFBSSxDQUFDO0lBQ3REO0lBQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUNTLE9BQU8sRUFBRTtJQUNuQjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxudmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbl90dXdhbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uX3dhbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uX3RhbmsgPSBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICB0aGlzLmlzX2VuZW15ID0gdGhpcy5kYXRhLmlzX2VuZW15XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmlzX3NoaWVsZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc19kZXN0cm95ID0gZmFsc2VcclxuXHJcbiAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlVXAoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtOTAgKiBUYWdPZkRpcmVjdGlvbi51cFxyXG4gICAgICAgIGxldCBzcGVlZCA9IHRoaXMuZGF0YS5zcGVlZFxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHNwZWVkXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID49IDcyOCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uX3dhbGwgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLTkwICogVGFnT2ZEaXJlY3Rpb24ubGVmdFxyXG4gICAgICAgIGxldCBzcGVlZCA9IHRoaXMuZGF0YS5zcGVlZFxyXG4gICAgICAgIHRoaXMubm9kZS54IC09IHNwZWVkXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbl93YWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlRG93bigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC05MCAqIFRhZ09mRGlyZWN0aW9uLmRvd25cclxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLmRhdGEuc3BlZWRcclxuICAgICAgICB0aGlzLm5vZGUueSAtPSBzcGVlZFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25fd2FsbCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVJpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLTkwICogVGFnT2ZEaXJlY3Rpb24ucmlnaHRcclxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLmRhdGEuc3BlZWRcclxuICAgICAgICB0aGlzLm5vZGUueCArPSBzcGVlZFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+PSA3Mjgpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbl93YWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuZGF0YS5kaXJlY3Rpb25cclxuICAgICAgICBsZXQgbWFwID0gdGhpcy5kYXRhLm1hcFxyXG4gICAgICAgIGlmICghbWFwKSByZXR1cm5cclxuICAgICAgICBsZXQgaXNfZW5lbXkgPSB0aGlzLmRhdGEuaXNfZW5lbXlcclxuICAgICAgICB0aGlzLmlzX2VuZW15ID0gaXNfZW5lbXlcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uXHJcbiAgICAgICAgLy8gbGV0IGxlZnRQb3MxID0gcG9zLmFkZChjYy52MigtNCwwKSlcclxuICAgICAgICAvLyBsZXQgbGVmdFBvczIgPSBwb3MuYWRkKGNjLnYyKC00LTgsMCkpXHJcbiAgICAgICAgLy8gbGV0IHJpZ2h0UG9zMSA9IHBvcy5hZGQoY2MudjIoNCwwKSlcclxuICAgICAgICAvLyBsZXQgcmlnaHRQb3MyID0gcG9zLmFkZChjYy52Mig0KzgsMCkpXHJcbiAgICAgICAgLy8gbGV0IHVwUG9zMSA9IHBvcy5hZGQoY2MudjIoMCwgNCkpXHJcbiAgICAgICAgLy8gbGV0IHVwUG9zMiA9IHBvcy5hZGQoY2MudjIoMCwgNCs4KSlcclxuICAgICAgICAvLyBsZXQgZG93blBvczEgPSBwb3MuYWRkKGNjLnYyKDAsLTQpKVxyXG4gICAgICAgIC8vIGxldCBkb3duUG9zMiA9IHBvcy5hZGQoY2MudjIoMCwtNC04KSlcclxuXHJcbiAgICAgICAgbGV0IGxlZnRQb3MxID0gcG9zLmFkZChjYy52MigtNywwKSlcclxuICAgICAgICBsZXQgbGVmdFBvczIgPSBwb3MuYWRkKGNjLnYyKC03LTE0LDApKVxyXG4gICAgICAgIGxldCByaWdodFBvczEgPSBwb3MuYWRkKGNjLnYyKDcsMCkpXHJcbiAgICAgICAgbGV0IHJpZ2h0UG9zMiA9IHBvcy5hZGQoY2MudjIoNysxNCwwKSlcclxuICAgICAgICBsZXQgdXBQb3MxID0gcG9zLmFkZChjYy52MigwLCA3KSlcclxuICAgICAgICBsZXQgdXBQb3MyID0gcG9zLmFkZChjYy52MigwLCA3KzE0KSlcclxuICAgICAgICBsZXQgZG93blBvczEgPSBwb3MuYWRkKGNjLnYyKDAsLTcpKVxyXG4gICAgICAgIGxldCBkb3duUG9zMiA9IHBvcy5hZGQoY2MudjIoMCwtNy0xNCkpXHJcblxyXG4gICAgICAgIGxldCBwb3NfYXJyID0gW11cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnVwKXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVXAoKTtcclxuICAgICAgICAgICAgcG9zX2FyciA9IFtsZWZ0UG9zMSwgbGVmdFBvczIsIHJpZ2h0UG9zMSwgcmlnaHRQb3MyXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgcG9zX2FyciA9IFt1cFBvczEsIHVwUG9zMiwgZG93blBvczEsIGRvd25Qb3MyXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24oKTtcclxuICAgICAgICAgICAgcG9zX2FyciA9IFtsZWZ0UG9zMSwgbGVmdFBvczIsIHJpZ2h0UG9zMSwgcmlnaHRQb3MyXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICBwb3NfYXJyID0gW3VwUG9zMSwgdXBQb3MyLCBkb3duUG9zMSwgZG93blBvczJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOajgOafpeWtkOW8ueS5i+mXtOeahOeisOaSnlxyXG4gICAgICAgIGxldCBwX2FyciA9IFsuLi5wb3NfYXJyXVxyXG4gICAgICAgIHBfYXJyLnB1c2gocG9zKVxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHBfYXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gbWFwLmNvbGxpc2lvbkJ1bGxldChwX2FycltpXSwgaXNfZW5lbXkpXHJcbiAgICAgICAgICAgIGlmIChidWxsZXQpe1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5qOA5p+l5a2Q5by55ZKM5Z2m5YWL5LmL6Ze055qE56Kw5pKeXHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8cG9zX2Fyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgLy8g5pWM5Lq6XHJcbiAgICAgICAgICAgIGlmIChpc19lbmVteSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFuayA9IG1hcC5jb2xsaXNpb25CdWxsZXRBbmRQbGF5ZXJUYW5rcyhwb3NfYXJyW2ldKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNfc2hpZWxkID0gdGFuay5pc19zaGllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhbmsuaXNfc2hpZWxkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25fdGFuayA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOeOqeWutlxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YW5rID0gbWFwLmNvbGxpc2lvbkJ1bGxldEFuZEVuZW15VGFua3MocG9zX2FycltpXSlcclxuICAgICAgICAgICAgICAgIGlmICh0YW5rKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YW5rLmlzX3NoaWVsZCwxMTExMSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhbmsuaXNfc2hpZWxkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5saXZlLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsubGl2ZSA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YW5rX2xldmVsID0gdGFuay50YW5rX2xldmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy52di5HbG9iYWwuZGllX3RhbmtbJ3RhbmtfJyt0YW5rX2xldmVsXSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uX3RhbmsgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YW5rLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbl93YWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnRhbmtfaG9uZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn57qi5Z2m5YWLJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5pbml0UHJvcHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBwb3NfYXJyID0gWy8qbGVmdFBvczEsIGxlZnRQb3MyLCByaWdodFBvczEsIHJpZ2h0UG9zMiwqLyB1cFBvczEsIHVwUG9zMiwgZG93blBvczEsIGRvd25Qb3MyXVxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHBvc19hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCB0aWQgPSBtYXAuZ2V0VGlsZWRJZEZyb21Qb3MocG9zX2FycltpXSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IC0xXHJcbiAgICAgICAgICAgIGlmICh0aWQgPiAwKXtcclxuICAgICAgICAgICAgICAgIGlmIChjYy52di5HbG9iYWwuaXNHcmFzc2xhbmQodGlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+iNieWcsCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjYy52di5HbG9iYWwuaXNHb2xkV2FsbCh0aWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6YeR56CWJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvbl93YWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNjLnZ2Lkdsb2JhbC5pc1JpdmVyKHRpZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmsrMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNjLnZ2Lkdsb2JhbC5pc0hvbWUodGlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wutuiiq+aJk++8jOa4uOaIj+e7k+adnycpXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLmJnMy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzX2Rlc3Ryb3kgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUuaXNfb3ZlciA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpZCxpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNfZGVzdHJveSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2lkX3BvcyA9IG1hcC5nZXRUaWxlZENvb3JkaW5hdGUocG9zX2FycltpXSlcclxuICAgICAgICAgICAgICAgICAgICBtYXAuYmcxLnNldFRpbGVHSURBdCgwLCBnaWRfcG9zLngsIGdpZF9wb3MueSwgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc19kZXN0cm95KXtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25fdHV3YWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3kgKCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzX3NoaWVsZCl7XHJcbiAgICAgICAgICAgIGxldCBmaXJlX2Zsb3dlciA9IGNjLmluc3RhbnRpYXRlKGNjLnZ2Lkdsb2JhbC5nYW1lLmZpcmVfZmxvd2VyX3ByZWZhYilcclxuICAgICAgICAgICAgZmlyZV9mbG93ZXIucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChmaXJlX2Zsb3dlcilcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbGV2ZWwgOiAxLFxyXG4gICAgICAgICAgICAgICAgaXNfZW5lbXkgOiB0aGlzLmlzX2VuZW15LFxyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uX3R1d2FsbCA6IHRoaXMuY29sbGlzaW9uX3R1d2FsbCxcclxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbl93YWxsIDogdGhpcy5jb2xsaXNpb25fd2FsbCxcclxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbl90YW5rICA6IHRoaXMuY29sbGlzaW9uX3RhbmssXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyZV9mbG93ZXIuZ2V0Q29tcG9uZW50KCdmaXJlX2Zsb3dlcicpLmluaXQoZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhLmRlc3Ryb3koKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdidWxsZXQgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/game_result.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13864uJuWtKCLVV8hGVghc1', 'game_result');
// Script/ui/game_result.js

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
    bg: cc.Node,
    title: cc.Sprite,
    stage_lab: cc.Label,
    again_btn: cc.Node,
    next_btn: cc.Node,
    fail_sf: cc.SpriteFrame,
    success_sf: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    var _this = this;
    var total_score = this.bg.getChildByName('total_score').getComponent(cc.Label);
    var score_1 = this.bg.getChildByName('score_1').getComponent(cc.Label);
    var tank_num_1 = this.bg.getChildByName('tank_num_1').getComponent(cc.Label);
    var jiantou_1 = this.bg.getChildByName('jiantou_1');
    var tank_1 = this.bg.getChildByName('tank_1');
    var score_2 = this.bg.getChildByName('score_2').getComponent(cc.Label);
    var tank_num_2 = this.bg.getChildByName('tank_num_2').getComponent(cc.Label);
    var jiantou_2 = this.bg.getChildByName('jiantou_2');
    var tank_2 = this.bg.getChildByName('tank_2');
    var score_3 = this.bg.getChildByName('score_3').getComponent(cc.Label);
    var tank_num_3 = this.bg.getChildByName('tank_num_3').getComponent(cc.Label);
    var jiantou_3 = this.bg.getChildByName('jiantou_3');
    var tank_3 = this.bg.getChildByName('tank_3');
    var score_4 = this.bg.getChildByName('score_4').getComponent(cc.Label);
    var tank_num_4 = this.bg.getChildByName('tank_num_4').getComponent(cc.Label);
    var jiantou_4 = this.bg.getChildByName('jiantou_4');
    var tank_4 = this.bg.getChildByName('tank_4');
    var line = this.bg.getChildByName('line');
    var total = this.bg.getChildByName('total');
    var total_tank_num = this.bg.getChildByName('total_tank_num').getComponent(cc.Label);

    // this.title.node.position = cc.v2(0, cc.winSize.height * 0.5 - 30)
    // stage.position = this.title.node.position.sub(cc.v2(0, 40))
    // player1.position = cc.v2(-95, stage.y - 25)
    // total_score.node.position = player1.position.sub(cc.v2(0, 35))

    // tank_1.position = cc.v2(0, total_score.node.position.y - 35)
    // jiantou_1.position = cc.v2(tank_1.x - 30, tank_1.y)
    // tank_num_1.node.position = cc.v2(jiantou_1.x - 15, jiantou_1.y)
    // score_1.node.position = cc.v2(player1.x, tank_num_1.node.y)

    var dif_y = 45;
    // score_2.node.position = score_1.node.position.sub(cc.v2(0, dif_y))
    // tank_num_2.node.position = tank_num_1.node.position.sub(cc.v2( 0, dif_y))
    // jiantou_2.position = jiantou_1.position.sub(cc.v2( 0, dif_y))
    // tank_2.position = tank_1.position.sub(cc.v2(0, dif_y))

    // score_3.node.position = score_2.node.position.sub(cc.v2(0, dif_y))
    // tank_num_3.node.position = tank_num_2.node.position.sub(cc.v2( 0, dif_y))
    // jiantou_3.position = jiantou_2.position.sub(cc.v2( 0, dif_y))
    // tank_3.position = tank_2.position.sub(cc.v2(0, dif_y))

    // score_4.node.position = score_3.node.position.sub(cc.v2(0, dif_y))
    // tank_num_4.node.position = tank_num_3.node.position.sub(cc.v2( 0, dif_y))
    // jiantou_4.position = jiantou_3.position.sub(cc.v2( 0, dif_y))
    // tank_4.position = tank_3.position.sub(cc.v2(0, dif_y))

    // line.position = cc.v2(0, tank_4.y - 30)
    // total.position = cc.v2(score_4.node.x - score_4.node.width*0.5, tank_4.y - 50)
    // total_tank_num.node.position = tank_num_4.node.position.sub(cc.v2(0, 50))

    this.stage_lab.string = 'STAGE  ' + cc.vv.UserInfo.level;
    score_1.string = 'PTS';
    score_2.string = 'PTS';
    score_3.string = 'PTS';
    score_4.string = 'PTS';
    tank_num_1.string = '';
    tank_num_2.string = '';
    tank_num_3.string = '';
    tank_num_4.string = '';
    total_tank_num.string = '';
    this.again_btn.active = false;
    this.next_btn.active = false;
    // cc.vv.Global.die_tank = {
    //     tank_1 : 3,
    //     tank_2 : 2,
    //     tank_3 : 3,
    //     tank_4 : 2,
    // }
    total_score.string = cc.vv.Global.die_tank.tank_1 * 100 + cc.vv.Global.die_tank.tank_2 * 200 + cc.vv.Global.die_tank.tank_3 * 300 + cc.vv.Global.die_tank.tank_4 * 400;
    var index = 1;
    var count = cc.vv.Global.die_tank.tank_1;
    var count_temp = 0;
    var callback = function callback() {
      cc.vv.Audio.playResult();
      if (index == 1) {
        count = cc.vv.Global.die_tank.tank_1;
        score_1.string = 100 * count_temp + ' PTS';
        tank_num_1.string = count_temp;
      } else if (index == 2) {
        count = cc.vv.Global.die_tank.tank_2;
        score_2.string = 200 * count_temp + ' PTS';
        tank_num_2.string = count_temp;
      } else if (index == 3) {
        count = cc.vv.Global.die_tank.tank_3;
        score_3.string = 300 * count_temp + ' PTS';
        tank_num_3.string = count_temp;
      } else if (index == 4) {
        count = cc.vv.Global.die_tank.tank_4;
        score_4.string = 400 * count_temp + ' PTS';
        tank_num_4.string = count_temp;
      }
      count_temp++;
      if (count_temp > count) {
        index++;
        count_temp = 0;
      }
      if (index >= 5) {
        total_tank_num.string = cc.vv.Global.die_tank.tank_1 + cc.vv.Global.die_tank.tank_2 + cc.vv.Global.die_tank.tank_3 + cc.vv.Global.die_tank.tank_4;

        // 失败
        if (_this.data.status == 0) {
          _this.again_btn.x = 0;
          _this.again_btn.active = true;
        }
        // 胜利
        else if (_this.data.status == 1) {
          // this.again_btn.active = true
          _this.next_btn.active = true;
        }
        _this.unschedule(callback);
      }
    };
    this.schedule(callback, 0.3);
    // this.scheduleOnce(()=>{
    //     let over = cc.instantiate(cc.vv.Global.game.game_over)
    //     cc.vv.Global.game.node.addChild(over)
    //     this.node.destroy()
    // }, 2)
  },
  init: function init(data) {
    this.data = data;
    // 失败 -- thua
    if (data.status == 0) {
      this.title.spriteFrame = this.fail_sf;
    }
    // 胜利 -- thắng
    else if (data.status == 1) {
      this.title.spriteFrame = this.success_sf;
    }
  },
  onClickChongwan: function onClickChongwan() {
    console.log('重玩');
    var UserInfo = require('UserInfo');
    cc.vv.UserInfo = new UserInfo();
    cc.vv.Global.game.startGame();
    this.node.destroy();
  },
  onClickNext: function onClickNext() {
    console.log('下一关');
    cc.vv.UserInfo.level++;
    cc.vv.Global.game.startGame();
    this.node.destroy();
  },
  onDestroy: function onDestroy() {
    console.log('game result destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxcZ2FtZV9yZXN1bHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiZyIsIk5vZGUiLCJ0aXRsZSIsIlNwcml0ZSIsInN0YWdlX2xhYiIsIkxhYmVsIiwiYWdhaW5fYnRuIiwibmV4dF9idG4iLCJmYWlsX3NmIiwiU3ByaXRlRnJhbWUiLCJzdWNjZXNzX3NmIiwib25Mb2FkIiwiX3RoaXMiLCJ0b3RhbF9zY29yZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50Iiwic2NvcmVfMSIsInRhbmtfbnVtXzEiLCJqaWFudG91XzEiLCJ0YW5rXzEiLCJzY29yZV8yIiwidGFua19udW1fMiIsImppYW50b3VfMiIsInRhbmtfMiIsInNjb3JlXzMiLCJ0YW5rX251bV8zIiwiamlhbnRvdV8zIiwidGFua18zIiwic2NvcmVfNCIsInRhbmtfbnVtXzQiLCJqaWFudG91XzQiLCJ0YW5rXzQiLCJsaW5lIiwidG90YWwiLCJ0b3RhbF90YW5rX251bSIsImRpZl95Iiwic3RyaW5nIiwidnYiLCJVc2VySW5mbyIsImxldmVsIiwiYWN0aXZlIiwiR2xvYmFsIiwiZGllX3RhbmsiLCJpbmRleCIsImNvdW50IiwiY291bnRfdGVtcCIsImNhbGxiYWNrIiwiQXVkaW8iLCJwbGF5UmVzdWx0IiwiZGF0YSIsInN0YXR1cyIsIngiLCJ1bnNjaGVkdWxlIiwic2NoZWR1bGUiLCJpbml0Iiwic3ByaXRlRnJhbWUiLCJvbkNsaWNrQ2hvbmd3YW4iLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZSIsImdhbWUiLCJzdGFydEdhbWUiLCJub2RlIiwiZGVzdHJveSIsIm9uQ2xpY2tOZXh0Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxX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QyxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEI5RCxFQUFFLENBQUN5QyxFQUFFLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3RCM0MsRUFBRSxDQUFDeUMsRUFBRSxDQUFDSSxNQUFNLENBQUNtQixJQUFJLENBQUNDLFNBQVMsRUFBRTtJQUM3QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ3ZCLENBQUM7RUFFREUsU0FBUyxXQUFBQSxVQUFBLEVBQUU7SUFDUFIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7RUFDdEM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBiZzogY2MuTm9kZSxcclxuXHJcbiAgICAgICAgdGl0bGU6IGNjLlNwcml0ZSxcclxuICAgICAgICBzdGFnZV9sYWI6IGNjLkxhYmVsLFxyXG5cclxuICAgICAgICBhZ2Fpbl9idG46IGNjLk5vZGUsXHJcbiAgICAgICAgbmV4dF9idG46IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIGZhaWxfc2Y6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIHN1Y2Nlc3Nfc2Y6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdG90YWxfc2NvcmUgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCd0b3RhbF9zY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlXzEgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdzY29yZV8xJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGxldCB0YW5rX251bV8xID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua19udW1fMScpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICBsZXQgamlhbnRvdV8xID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgnamlhbnRvdV8xJylcclxuICAgICAgICBsZXQgdGFua18xID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua18xJylcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlXzIgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdzY29yZV8yJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGxldCB0YW5rX251bV8yID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua19udW1fMicpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICBsZXQgamlhbnRvdV8yID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgnamlhbnRvdV8yJylcclxuICAgICAgICBsZXQgdGFua18yID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua18yJylcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlXzMgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdzY29yZV8zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGxldCB0YW5rX251bV8zID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua19udW1fMycpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICBsZXQgamlhbnRvdV8zID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgnamlhbnRvdV8zJylcclxuICAgICAgICBsZXQgdGFua18zID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua18zJylcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlXzQgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdzY29yZV80JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGxldCB0YW5rX251bV80ID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua19udW1fNCcpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICBsZXQgamlhbnRvdV80ID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgnamlhbnRvdV80JylcclxuICAgICAgICBsZXQgdGFua180ID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndGFua180JylcclxuXHJcbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdsaW5lJylcclxuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCd0b3RhbCcpXHJcbiAgICAgICAgbGV0IHRvdGFsX3RhbmtfbnVtID0gdGhpcy5iZy5nZXRDaGlsZEJ5TmFtZSgndG90YWxfdGFua19udW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcblxyXG4gICAgICAgIC8vIHRoaXMudGl0bGUubm9kZS5wb3NpdGlvbiA9IGNjLnYyKDAsIGNjLndpblNpemUuaGVpZ2h0ICogMC41IC0gMzApXHJcbiAgICAgICAgLy8gc3RhZ2UucG9zaXRpb24gPSB0aGlzLnRpdGxlLm5vZGUucG9zaXRpb24uc3ViKGNjLnYyKDAsIDQwKSlcclxuICAgICAgICAvLyBwbGF5ZXIxLnBvc2l0aW9uID0gY2MudjIoLTk1LCBzdGFnZS55IC0gMjUpXHJcbiAgICAgICAgLy8gdG90YWxfc2NvcmUubm9kZS5wb3NpdGlvbiA9IHBsYXllcjEucG9zaXRpb24uc3ViKGNjLnYyKDAsIDM1KSlcclxuICAgICAgICBcclxuICAgICAgICAvLyB0YW5rXzEucG9zaXRpb24gPSBjYy52MigwLCB0b3RhbF9zY29yZS5ub2RlLnBvc2l0aW9uLnkgLSAzNSlcclxuICAgICAgICAvLyBqaWFudG91XzEucG9zaXRpb24gPSBjYy52Mih0YW5rXzEueCAtIDMwLCB0YW5rXzEueSlcclxuICAgICAgICAvLyB0YW5rX251bV8xLm5vZGUucG9zaXRpb24gPSBjYy52MihqaWFudG91XzEueCAtIDE1LCBqaWFudG91XzEueSlcclxuICAgICAgICAvLyBzY29yZV8xLm5vZGUucG9zaXRpb24gPSBjYy52MihwbGF5ZXIxLngsIHRhbmtfbnVtXzEubm9kZS55KVxyXG5cclxuICAgICAgICBsZXQgZGlmX3kgPSA0NVxyXG4gICAgICAgIC8vIHNjb3JlXzIubm9kZS5wb3NpdGlvbiA9IHNjb3JlXzEubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoMCwgZGlmX3kpKVxyXG4gICAgICAgIC8vIHRhbmtfbnVtXzIubm9kZS5wb3NpdGlvbiA9IHRhbmtfbnVtXzEubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoIDAsIGRpZl95KSlcclxuICAgICAgICAvLyBqaWFudG91XzIucG9zaXRpb24gPSBqaWFudG91XzEucG9zaXRpb24uc3ViKGNjLnYyKCAwLCBkaWZfeSkpXHJcbiAgICAgICAgLy8gdGFua18yLnBvc2l0aW9uID0gdGFua18xLnBvc2l0aW9uLnN1YihjYy52MigwLCBkaWZfeSkpXHJcblxyXG4gICAgICAgIC8vIHNjb3JlXzMubm9kZS5wb3NpdGlvbiA9IHNjb3JlXzIubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoMCwgZGlmX3kpKVxyXG4gICAgICAgIC8vIHRhbmtfbnVtXzMubm9kZS5wb3NpdGlvbiA9IHRhbmtfbnVtXzIubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoIDAsIGRpZl95KSlcclxuICAgICAgICAvLyBqaWFudG91XzMucG9zaXRpb24gPSBqaWFudG91XzIucG9zaXRpb24uc3ViKGNjLnYyKCAwLCBkaWZfeSkpXHJcbiAgICAgICAgLy8gdGFua18zLnBvc2l0aW9uID0gdGFua18yLnBvc2l0aW9uLnN1YihjYy52MigwLCBkaWZfeSkpXHJcblxyXG4gICAgICAgIC8vIHNjb3JlXzQubm9kZS5wb3NpdGlvbiA9IHNjb3JlXzMubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoMCwgZGlmX3kpKVxyXG4gICAgICAgIC8vIHRhbmtfbnVtXzQubm9kZS5wb3NpdGlvbiA9IHRhbmtfbnVtXzMubm9kZS5wb3NpdGlvbi5zdWIoY2MudjIoIDAsIGRpZl95KSlcclxuICAgICAgICAvLyBqaWFudG91XzQucG9zaXRpb24gPSBqaWFudG91XzMucG9zaXRpb24uc3ViKGNjLnYyKCAwLCBkaWZfeSkpXHJcbiAgICAgICAgLy8gdGFua180LnBvc2l0aW9uID0gdGFua18zLnBvc2l0aW9uLnN1YihjYy52MigwLCBkaWZfeSkpXHJcblxyXG4gICAgICAgIC8vIGxpbmUucG9zaXRpb24gPSBjYy52MigwLCB0YW5rXzQueSAtIDMwKVxyXG4gICAgICAgIC8vIHRvdGFsLnBvc2l0aW9uID0gY2MudjIoc2NvcmVfNC5ub2RlLnggLSBzY29yZV80Lm5vZGUud2lkdGgqMC41LCB0YW5rXzQueSAtIDUwKVxyXG4gICAgICAgIC8vIHRvdGFsX3RhbmtfbnVtLm5vZGUucG9zaXRpb24gPSB0YW5rX251bV80Lm5vZGUucG9zaXRpb24uc3ViKGNjLnYyKDAsIDUwKSlcclxuXHJcbiAgICAgICAgdGhpcy5zdGFnZV9sYWIuc3RyaW5nID0gJ1NUQUdFICAnKyBjYy52di5Vc2VySW5mby5sZXZlbFxyXG5cclxuICAgICAgICBzY29yZV8xLnN0cmluZyA9ICdQVFMnXHJcbiAgICAgICAgc2NvcmVfMi5zdHJpbmcgPSAnUFRTJ1xyXG4gICAgICAgIHNjb3JlXzMuc3RyaW5nID0gJ1BUUydcclxuICAgICAgICBzY29yZV80LnN0cmluZyA9ICdQVFMnXHJcbiAgICAgICAgdGFua19udW1fMS5zdHJpbmcgPSAnJ1xyXG4gICAgICAgIHRhbmtfbnVtXzIuc3RyaW5nID0gJydcclxuICAgICAgICB0YW5rX251bV8zLnN0cmluZyA9ICcnXHJcbiAgICAgICAgdGFua19udW1fNC5zdHJpbmcgPSAnJ1xyXG4gICAgICAgIHRvdGFsX3RhbmtfbnVtLnN0cmluZyA9ICcnXHJcblxyXG4gICAgICAgIHRoaXMuYWdhaW5fYnRuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5uZXh0X2J0bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIGNjLnZ2Lkdsb2JhbC5kaWVfdGFuayA9IHtcclxuICAgICAgICAvLyAgICAgdGFua18xIDogMyxcclxuICAgICAgICAvLyAgICAgdGFua18yIDogMixcclxuICAgICAgICAvLyAgICAgdGFua18zIDogMyxcclxuICAgICAgICAvLyAgICAgdGFua180IDogMixcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdG90YWxfc2NvcmUuc3RyaW5nID0gY2MudnYuR2xvYmFsLmRpZV90YW5rLnRhbmtfMSoxMDAgKyBjYy52di5HbG9iYWwuZGllX3RhbmsudGFua18yKjIwMFxyXG4gICAgICAgICAgICAgICAgICAgICArIGNjLnZ2Lkdsb2JhbC5kaWVfdGFuay50YW5rXzMqMzAwICsgY2MudnYuR2xvYmFsLmRpZV90YW5rLnRhbmtfNCo0MDBcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMVxyXG4gICAgICAgIGxldCBjb3VudCA9IGNjLnZ2Lkdsb2JhbC5kaWVfdGFuay50YW5rXzFcclxuICAgICAgICBsZXQgY291bnRfdGVtcCA9IDBcclxuICAgICAgICBsZXQgY2FsbGJhY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICBjYy52di5BdWRpby5wbGF5UmVzdWx0KClcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBjYy52di5HbG9iYWwuZGllX3RhbmsudGFua18xXHJcbiAgICAgICAgICAgICAgICBzY29yZV8xLnN0cmluZyA9IDEwMCpjb3VudF90ZW1wKycgUFRTJ1xyXG4gICAgICAgICAgICAgICAgdGFua19udW1fMS5zdHJpbmcgPSBjb3VudF90ZW1wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT0gMil7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGNjLnZ2Lkdsb2JhbC5kaWVfdGFuay50YW5rXzJcclxuICAgICAgICAgICAgICAgIHNjb3JlXzIuc3RyaW5nID0gMjAwKmNvdW50X3RlbXArJyBQVFMnXHJcbiAgICAgICAgICAgICAgICB0YW5rX251bV8yLnN0cmluZyA9IGNvdW50X3RlbXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gY2MudnYuR2xvYmFsLmRpZV90YW5rLnRhbmtfM1xyXG4gICAgICAgICAgICAgICAgc2NvcmVfMy5zdHJpbmcgPSAzMDAqY291bnRfdGVtcCsnIFBUUydcclxuICAgICAgICAgICAgICAgIHRhbmtfbnVtXzMuc3RyaW5nID0gY291bnRfdGVtcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDQpe1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBjYy52di5HbG9iYWwuZGllX3RhbmsudGFua180XHJcbiAgICAgICAgICAgICAgICBzY29yZV80LnN0cmluZyA9IDQwMCpjb3VudF90ZW1wKycgUFRTJ1xyXG4gICAgICAgICAgICAgICAgdGFua19udW1fNC5zdHJpbmcgPSBjb3VudF90ZW1wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRfdGVtcCsrXHJcbiAgICAgICAgICAgIGlmIChjb3VudF90ZW1wID4gY291bnQpe1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgY291bnRfdGVtcCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gNSl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbF90YW5rX251bS5zdHJpbmcgPSBjYy52di5HbG9iYWwuZGllX3RhbmsudGFua18xICsgY2MudnYuR2xvYmFsLmRpZV90YW5rLnRhbmtfMlxyXG4gICAgICAgICAgICAgICAgICAgICArIGNjLnZ2Lkdsb2JhbC5kaWVfdGFuay50YW5rXzMgKyBjYy52di5HbG9iYWwuZGllX3RhbmsudGFua180XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5aSx6LSlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXR1cyA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFnYWluX2J0bi54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWdhaW5fYnRuLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOiDnOWIqVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLnN0YXR1cyA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFnYWluX2J0bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0X2J0bi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsYmFjaywgMC4zKVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgLy8gICAgIGxldCBvdmVyID0gY2MuaW5zdGFudGlhdGUoY2MudnYuR2xvYmFsLmdhbWUuZ2FtZV9vdmVyKVxyXG4gICAgICAgIC8vICAgICBjYy52di5HbG9iYWwuZ2FtZS5ub2RlLmFkZENoaWxkKG92ZXIpXHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAvLyB9LCAyKVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICAvLyDlpLHotKUgLS0gdGh1YVxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMuZmFpbF9zZlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDog5zliKkgLS0gdGjhuq9uZ1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGEuc3RhdHVzID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5zdWNjZXNzX3NmXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrQ2hvbmd3YW4gKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+mHjeeOqScpXHJcbiAgICAgICAgbGV0IFVzZXJJbmZvID0gcmVxdWlyZSgnVXNlckluZm8nKVxyXG4gICAgICAgIGNjLnZ2LlVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKClcclxuICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5zdGFydEdhbWUoKVxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja05leHQgKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S4i+S4gOWFsycpXHJcbiAgICAgICAgY2MudnYuVXNlckluZm8ubGV2ZWwrK1xyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnN0YXJ0R2FtZSgpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSByZXN1bHQgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c4d6jYfQpHaLqUB/V8VQrT', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlQnkuanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVCeSIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLEdBQUcsSUFBSSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIgdmVyc2lvbnMuXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXG4gKlxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuY2MuUm90YXRlQnkuX3JldmVyc2UgPSB0cnVlO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9e9cGqDgtP9Ymcxav1H3DE', 'Config');
// Script/common/Config.js

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
    this.stage = {};
    this.initStage();
  },
  getPlayerTankValue: function getPlayerTankValue(tank_level) {
    var data = {};
    if (tank_level > 4) {
      tank_level = 4;
    }
    if (tank_level == 1) {
      data.moveSpeed = 2.625;
      data.fireSpeed = 5.25;
      data.live = 1;
    } else if (tank_level == 2) {
      data.moveSpeed = 2.975;
      data.fireSpeed = 6, 65;
      data.live = 1;
    } else if (tank_level == 3) {
      data.moveSpeed = 3.325;
      data.fireSpeed = 8.4;
      data.live = 1;
    } else if (tank_level == 4) {
      data.moveSpeed = 3.675;
      data.fireSpeed = 9.275;
      data.live = 1;
    }
    return data;
  },
  getEnemyTankValue: function getEnemyTankValue(tank_level) {
    var data = {};
    if (tank_level == 1) {
      data.fireSpeed = 4.375;
      data.moveSpeed = 1.75;
      data.live = 1;
    } else if (tank_level == 2) {
      data.fireSpeed = 4.375;
      data.moveSpeed = 2.625;
      data.live = 1;
    } else if (tank_level == 3) {
      data.fireSpeed = 5.25;
      data.moveSpeed = 1.75;
      data.live = 1;
    } else if (tank_level == 4) {
      data.fireSpeed = 4.375;
      data.moveSpeed = 1.75;
      data.live = 3;
    }
    return data;
  },
  initStage: function initStage() {
    this.stage.stage_1 = function () {
      return {
        enemy: {
          tank_1: 18,
          tank_2: 2,
          tank_3: 0,
          tank_4: 0
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_2 = function () {
      return {
        enemy: {
          tank_1: 16,
          tank_2: 2,
          tank_3: 2,
          tank_4: 0
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_3 = function () {
      return {
        enemy: {
          tank_1: 15,
          tank_2: 2,
          tank_3: 2,
          tank_4: 1
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_4 = function () {
      return {
        enemy: {
          tank_1: 13,
          tank_2: 3,
          tank_3: 3,
          tank_4: 1
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_5 = function () {
      return {
        enemy: {
          tank_1: 12,
          tank_2: 4,
          tank_3: 3,
          tank_4: 1
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_6 = function () {
      return {
        enemy: {
          tank_1: 11,
          tank_2: 4,
          tank_3: 4,
          tank_4: 1
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_7 = function () {
      return {
        enemy: {
          tank_1: 10,
          tank_2: 4,
          tank_3: 4,
          tank_4: 2
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_8 = function () {
      return {
        enemy: {
          tank_1: 9,
          tank_2: 4,
          tank_3: 5,
          tank_4: 2
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_9 = function () {
      return {
        enemy: {
          tank_1: 8,
          tank_2: 5,
          tank_3: 5,
          tank_4: 2
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_10 = function () {
      return {
        enemy: {
          tank_1: 7,
          tank_2: 6,
          tank_3: 5,
          tank_4: 2
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_11 = function () {
      return {
        enemy: {
          tank_1: 6,
          tank_2: 6,
          tank_3: 6,
          tank_4: 2
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_12 = function () {
      return {
        enemy: {
          tank_1: 5,
          tank_2: 6,
          tank_3: 6,
          tank_4: 3
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_13 = function () {
      return {
        enemy: {
          tank_1: 4,
          tank_2: 6,
          tank_3: 6,
          tank_4: 4
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_14 = function () {
      return {
        enemy: {
          tank_1: 4,
          tank_2: 5,
          tank_3: 6,
          tank_4: 5
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_15 = function () {
      return {
        enemy: {
          tank_1: 5,
          tank_2: 4,
          tank_3: 6,
          tank_4: 5
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_16 = function () {
      return {
        enemy: {
          tank_1: 4,
          tank_2: 5,
          tank_3: 6,
          tank_4: 5
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_17 = function () {
      return {
        enemy: {
          tank_1: 4,
          tank_2: 6,
          tank_3: 5,
          tank_4: 5
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_18 = function () {
      return {
        enemy: {
          tank_1: 3,
          tank_2: 6,
          tank_3: 6,
          tank_4: 5
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_19 = function () {
      return {
        enemy: {
          tank_1: 2,
          tank_2: 6,
          tank_3: 6,
          tank_4: 6
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
    this.stage.stage_20 = function () {
      return {
        enemy: {
          tank_1: 3,
          tank_2: 5,
          tank_3: 6,
          tank_4: 6
        },
        hong: parseInt(Math.random() * 3) + 2
      };
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXENvbmZpZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsInN0YWdlIiwiaW5pdFN0YWdlIiwiZ2V0UGxheWVyVGFua1ZhbHVlIiwidGFua19sZXZlbCIsImRhdGEiLCJtb3ZlU3BlZWQiLCJmaXJlU3BlZWQiLCJsaXZlIiwiZ2V0RW5lbXlUYW5rVmFsdWUiLCJzdGFnZV8xIiwiZW5lbXkiLCJ0YW5rXzEiLCJ0YW5rXzIiLCJ0YW5rXzMiLCJ0YW5rXzQiLCJob25nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwic3RhZ2VfMiIsInN0YWdlXzMiLCJzdGFnZV80Iiwic3RhZ2VfNSIsInN0YWdlXzYiLCJzdGFnZV83Iiwic3RhZ2VfOCIsInN0YWdlXzkiLCJzdGFnZV8xMCIsInN0YWdlXzExIiwic3RhZ2VfMTIiLCJzdGFnZV8xMyIsInN0YWdlXzE0Iiwic3RhZ2VfMTUiLCJzdGFnZV8xNiIsInN0YWdlXzE3Iiwic3RhZ2VfMTgiLCJzdGFnZV8xOSIsInN0YWdlXzIwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWYsSUFBSSxDQUFDQyxTQUFTLEVBQUU7RUFDcEIsQ0FBQztFQUVEQyxrQkFBa0IsV0FBQUEsbUJBQUNDLFVBQVUsRUFBQztJQUMxQixJQUFJQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSUQsVUFBVSxHQUFHLENBQUMsRUFBQztNQUNmQSxVQUFVLEdBQUcsQ0FBQztJQUNsQjtJQUNBLElBQUlBLFVBQVUsSUFBSSxDQUFDLEVBQUM7TUFDaEJDLElB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WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGN0b3IgKCl7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFN0YWdlKClcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyVGFua1ZhbHVlKHRhbmtfbGV2ZWwpe1xyXG4gICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICBpZiAodGFua19sZXZlbCA+IDQpe1xyXG4gICAgICAgICAgICB0YW5rX2xldmVsID0gNFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFua19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgZGF0YS5tb3ZlU3BlZWQgPSAyLjYyNVxyXG4gICAgICAgICAgICBkYXRhLmZpcmVTcGVlZCA9IDUuMjVcclxuICAgICAgICAgICAgZGF0YS5saXZlID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YW5rX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICBkYXRhLm1vdmVTcGVlZCA9IDIuOTc1XHJcbiAgICAgICAgICAgIGRhdGEuZmlyZVNwZWVkID0gNiw2NVxyXG4gICAgICAgICAgICBkYXRhLmxpdmUgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRhbmtfbGV2ZWwgPT0gMyl7XHJcbiAgICAgICAgICAgIGRhdGEubW92ZVNwZWVkID0gMy4zMjVcclxuICAgICAgICAgICAgZGF0YS5maXJlU3BlZWQgPSA4LjRcclxuICAgICAgICAgICAgZGF0YS5saXZlID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0YW5rX2xldmVsID09IDQpe1xyXG4gICAgICAgICAgICBkYXRhLm1vdmVTcGVlZCA9IDMuNjc1XHJcbiAgICAgICAgICAgIGRhdGEuZmlyZVNwZWVkID0gOS4yNzVcclxuICAgICAgICAgICAgZGF0YS5saXZlID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRFbmVteVRhbmtWYWx1ZSh0YW5rX2xldmVsKXtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgaWYgKHRhbmtfbGV2ZWwgPT0gMSl7XHJcbiAgICAgICAgICAgIGRhdGEuZmlyZVNwZWVkID0gNC4zNzVcclxuICAgICAgICAgICAgZGF0YS5tb3ZlU3BlZWQgPSAxLjc1XHJcbiAgICAgICAgICAgIGRhdGEubGl2ZSA9IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFua19sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgZGF0YS5maXJlU3BlZWQgPSA0LjM3NVxyXG4gICAgICAgICAgICBkYXRhLm1vdmVTcGVlZCA9IDIuNjI1XHJcbiAgICAgICAgICAgIGRhdGEubGl2ZSA9IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFua19sZXZlbCA9PSAzKXtcclxuICAgICAgICAgICAgZGF0YS5maXJlU3BlZWQgPSA1LjI1XHJcbiAgICAgICAgICAgIGRhdGEubW92ZVNwZWVkID0gMS43NVxyXG4gICAgICAgICAgICBkYXRhLmxpdmUgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRhbmtfbGV2ZWwgPT0gNCl7XHJcbiAgICAgICAgICAgIGRhdGEuZmlyZVNwZWVkID0gNC4zNzVcclxuICAgICAgICAgICAgZGF0YS5tb3ZlU3BlZWQgPSAxLjc1XHJcbiAgICAgICAgICAgIGRhdGEubGl2ZSA9IDNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdFN0YWdlICgpe1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfMSA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzIgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogMixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV8zID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogMixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfNCA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiAxMyxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzUgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogNCxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV82ID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDExLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogNCxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfNyA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzggPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogOSxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzkgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogOCxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzEwID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV8xMSA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfMTIgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogNSxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzEzID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV8xNCA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiA1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfMTUgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogNSxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzE2ID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogNSxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV8xNyA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogNSxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiA1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhZ2VfMTggPSAoKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18xIDogMyxcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzIgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMyA6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua180IDogNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob25nIDogIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzKSArIDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWdlLnN0YWdlXzE5ID0gKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZW15IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMSA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18yIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzMgOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfNCA6IDYsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG9uZyA6ICBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMykgKyAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFnZV8yMCA9ICgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzEgOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfMiA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFua18zIDogNixcclxuICAgICAgICAgICAgICAgICAgICB0YW5rXzQgOiA2LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvbmcgOiAgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpICsgMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Tank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8abdp0/GJEy7qzWALSo5ta', 'Tank');
// Script/common/Tank.js

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
  left: 3
});
cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.moveSpeed = 1.75;
    this.fireSpeed = 4.375;
    this.stopAttack = false;
    this.onGuard = false;
    this.isBlocked = true;
    this.canMove = true;
    this.adjustErr = 4.375;
    this.is_fire = false;
    this.is_enemy = false;
    this.live = 1;
    this.is_shield = false;
    this.tank_level = 1; // basic fast power armor
    this.tank_hong = false;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.map = cc.vv.Global.game.map.getComponent('game_map');
  },
  start: function start() {
    this.map = cc.vv.Global.game.map.getComponent('game_map');
  },
  moveUp: function moveUp() {
    // this.enemy.setRotation(90 * TagOfDirection.up);
    this.node.angle = -90 * TagOfDirection.up;
    // cc.log("tank moved up!");
    // if (this.isBlocked) {
    //     return;
    // }
    if (!this.canMove) {
      return;
    }
    // this.collisionSups();
    var p = this.node.getPosition();
    var box = this.node.getBoundingBox();
    var toP = cc.v2(p.x, p.y + box.height / 2 + 1);
    // boundary detect
    if (p.y + box.height / 2 + 1 > 728 /*this.mapLayer.topBoundary*/) {
      this.isBlocked = true;
      return;
    }
    // top
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // topLeft
    toP = cc.v2(p.x - box.width / 2 + this.adjustErr, p.y + box.height / 2 + 4 + 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // top and 1/3 left
    toP = cc.v2(p.x - box.width / 3, p.y + box.height / 2 + 4 + 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // topRight
    toP = cc.v2(p.x + box.width / 2 - this.adjustErr, p.y + box.height / 2 + 4 + 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // top and 1/3 right
    toP = cc.v2(p.x + box.width / 3, p.y + box.height / 2 + 4 + 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    this.node.y = p.y + this.moveSpeed;
    this.changeSkin();
  },
  moveDown: function moveDown() {
    // this.enemy.setRotation(90 * TagOfDirection.down);
    this.node.angle = -90 * TagOfDirection.down;
    // cc.log("tank moved down!");
    // if (this.isBlocked) {
    //     return;
    // }
    if (!this.canMove) {
      return;
    }
    // this.collisionSups();
    var p = this.node.getPosition();
    var box = this.node.getBoundingBox();
    var toP = cc.v2(p.x, p.y - box.height / 2 - 1);
    // boundary detect
    if (p.y - box.height / 2 - 1 < 0) {
      this.isBlocked = true;
      return;
    }
    // bottom
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // bottomLeft
    toP = cc.v2(p.x - box.width / 2 + this.adjustErr, p.y - box.height / 2 - 4 - 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // bottom and 1/3 left
    toP = cc.v2(p.x - box.width / 3, p.y - box.height / 2 - 4 - 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // bottomRight
    toP = cc.v2(p.x + box.width / 2 - this.adjustErr, p.y - box.height / 2 - 4 - 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // bottom and 1/3 right
    toP = cc.v2(p.x + box.width / 3, p.y - box.height / 2 - 4 - 1);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    this.node.y = p.y - this.moveSpeed;
    this.changeSkin();
  },
  moveLeft: function moveLeft() {
    // this.enemy.setRotation(90 * TagOfDirection.left);
    this.node.angle = -90 * TagOfDirection.left;
    // cc.log("tank moved left!");
    // if (this.isBlocked) {
    //     return;
    // }
    if (!this.canMove) {
      return;
    }
    // this.collisionSups();
    var p = this.node.getPosition();
    var box = this.node.getBoundingBox();
    var toP = cc.v2(p.x - box.width / 2 - 1, p.y);
    // boundary detect
    if (p.x - box.height / 2 - 1 /*- this.mapLayer.leftBoundary*/ < 0) {
      this.isBlocked = true;
      return;
    }
    // // left
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // bottomLeft
    toP = cc.v2(p.x - box.width / 2 - 4 - 1, p.y - box.height / 2 + this.adjustErr);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // left and 1/3 bottom
    toP = cc.v2(p.x - box.width / 2 - 4 - 1, p.y - box.height / 3);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // topLeft
    toP = cc.v2(p.x - box.width / 2 - 4 - 1, p.y + box.height / 2 - this.adjustErr);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // left and 1/3 top
    toP = cc.v2(p.x - box.width / 2 - 4 - 1, p.y + box.height / 3);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    this.node.x = p.x - this.moveSpeed;
    this.changeSkin();
  },
  moveRight: function moveRight() {
    // this.enemy.setRotation(90 * TagOfDirection.right);
    this.node.angle = -90 * TagOfDirection.right;
    // cc.log("tank moved right!");
    // if (this.isBlocked) {
    //     return;
    // }
    if (!this.canMove) {
      return;
    }
    // this.collisionSups();
    var p = this.node.getPosition();
    var box = this.node.getBoundingBox();
    var toP = cc.v2(p.x + box.width / 2 + 1, p.y);
    // boundary detect
    if (p.x + box.height / 2 + 1 > 728 /*this.mapLayer.rightBoundary*/) {
      this.isBlocked = true;
      return;
    }
    // // Right
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // bottomRight
    toP = cc.v2(p.x + box.width / 2 + 4 + 1, p.y - box.height / 2 + this.adjustErr);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // Right and 1/3 bottom
    toP = cc.v2(p.x + box.width / 2 + 4 + 1, p.y - box.height / 3);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // // topRight
    toP = cc.v2(p.x + box.width / 2 + 4 + 1, p.y + box.height / 2 - this.adjustErr);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    // Right and 1/3 top
    toP = cc.v2(p.x + box.width / 2 + 4 + 1, p.y + box.height / 3);
    if (this.map.checkPoint(toP) || this.map.collisionTanks(toP)) {
      this.isBlocked = true;
      return;
    }
    this.node.x = p.x + this.moveSpeed;
    this.changeSkin();
  },
  onFire: function onFire() {
    var _this = this;
    if (this.is_fire) return;
    if (!this.is_enemy) {
      cc.vv.Audio.playFire();
    }
    this.is_fire = true;
    var direction = -this.node.angle / 90;
    var data = {
      map: this.map,
      direction: -this.node.angle / 90,
      speed: this.fireSpeed,
      is_enemy: this.is_enemy,
      destroy: function destroy() {
        _this.is_fire = false;
      }
    };
    var p = this.node.position;
    // up
    if (direction == 0) {
      p = p.add(cc.v2(0, this.node.height * 0.5));
    }
    // right
    else if (direction == 1) {
      p = p.add(cc.v2(this.node.height * 0.5, 0));
    }
    // down
    else if (direction == 2) {
      p = p.sub(cc.v2(0, this.node.height * 0.5));
    }
    // left
    else if (direction == 3) {
      p = p.sub(cc.v2(this.node.height * 0.5, 0));
    }
    var bullet = cc.instantiate(cc.vv.Global.game.bullet_prefab);
    bullet.position = p; //this.node.position.add(cc.v2(0, this.node.height*0.5))
    bullet.getComponent('bullet').init(data);
    this.node.parent.addChild(bullet, -1);
    cc.vv.Global.game.bullet_arr.push(bullet);
  },
  changeTankValue: function changeTankValue() {
    if (!this.node.skin) {
      this.node.skin = 0;
    }
    // this.node.skin = 1 - this.node.skin
    var tank_skin_arr = [];
    if (!this.is_enemy) {
      if (this.tank_level == 1) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_1);
      } else if (this.tank_level == 2) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_2);
      } else if (this.tank_level == 3) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_3);
      } else if (this.tank_level == 4) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_4);
      }
    } else {
      if (this.tank_level == 1) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_1);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_1);
        }
      } else if (this.tank_level == 2) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_2);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_2);
        }
      } else if (this.tank_level == 3) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_3);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_3);
        }
      } else if (this.tank_level == 4) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_4);
        } else {
          if (this.live == 1) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_1);
          } else if (this.live == 2) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_2);
          } else if (this.live == 3) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_3);
          }
        }
      }
    }
    this.node.getComponent(cc.Sprite).spriteFrame = tank_skin_arr[this.node.skin];
    if (!this.is_enemy) {
      if (this.tank_level == 1) {
        this.node.width = 45.25;
        this.node.height = 43.5;
      } else if (this.tank_level == 2) {
        this.node.width = 45.25;
        this.node.height = 52.25;
      } else if (this.tank_level == 3) {
        this.node.width = 45.25;
        this.node.height = 52.25;
      } else if (this.tank_level == 4) {
        this.node.width = 48.75;
        this.node.height = 52.25;
      }
    }
  },
  changeSkin: function changeSkin() {
    if (!this.node.skin) {
      this.node.skin = 0;
    }
    this.node.skin = 1 - this.node.skin;
    var tank_skin_arr = [];
    if (!this.is_enemy) {
      if (this.tank_level == 1) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_1);
      } else if (this.tank_level == 2) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_2);
      } else if (this.tank_level == 3) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_3);
      } else if (this.tank_level == 4) {
        tank_skin_arr.push.apply(tank_skin_arr, this.tank_4);
      }
    } else {
      if (this.tank_level == 1) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_1);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_1);
        }
      } else if (this.tank_level == 2) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_2);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_2);
        }
      } else if (this.tank_level == 3) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_3);
        } else {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_3);
        }
      } else if (this.tank_level == 4) {
        if (this.tank_hong) {
          tank_skin_arr.push.apply(tank_skin_arr, this.tank_hong_4);
        } else {
          if (this.live == 1) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_1);
          } else if (this.live == 2) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_2);
          } else if (this.live == 3) {
            tank_skin_arr.push.apply(tank_skin_arr, this.tank_4_3);
          }
        }
      }
    }
    this.node.getComponent(cc.Sprite).spriteFrame = tank_skin_arr[this.node.skin];
    if (!this.is_enemy) {
      if (this.tank_level == 1) {
        this.node.width = 45.25;
        this.node.height = 43.5;
      } else if (this.tank_level == 2) {
        this.node.width = 45.25;
        this.node.height = 52.25;
      } else if (this.tank_level == 3) {
        this.node.width = 45.25;
        this.node.height = 52.25;
      } else if (this.tank_level == 4) {
        this.node.width = 48.75;
        this.node.height = 52.25;
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXFRhbmsuanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJtb3ZlU3BlZWQiLCJmaXJlU3BlZWQiLCJzdG9wQXR0YWNrIiwib25HdWFyZCIsImlzQmxvY2tlZCIsImNhbk1vdmUiLCJhZGp1c3RFcnIiLCJpc19maXJlIiwiaXNfZW5lbXkiLCJsaXZlIiwiaXNfc2hpZWxkIiwidGFua19sZXZlbCIsInRhbmtfaG9uZyIsIm9uTG9hZCIsIm1hcCIsInZ2IiwiR2xvYmFsIiwiZ2FtZSIsImdldENvbXBvbmVudCIsInN0YXJ0IiwibW92ZVVwIiwibm9kZSIsImFuZ2xlIiwicCIsImdldFBvc2l0aW9uIiwiYm94IiwiZ2V0Qm91bmRpbmdCb3giLCJ0b1AiLCJ2MiIsIngiLCJ5IiwiaGVpZ2h0IiwiY2hlY2tQb2ludCIsImNvbGxpc2lvblRhbmtzIiwid2lkdGgiLCJjaGFuZ2VTa2luIiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm9uRmlyZSIsIl90aGlzIiwiQXVkaW8iLCJwbGF5RmlyZSIsImRpcmVjdGlvbiIsImRhdGEiLCJzcGVlZCIsImRlc3Ryb3kiLCJwb3NpdGlvbiIsImFkZCIsInN1YiIsImJ1bGxldCIsImluc3RhbnRpYXRlIiwiYnVsbGV0X3ByZWZhYiIsImluaXQiLCJwYXJlbnQiLCJhZGRDaGlsZCIsImJ1bGxldF9hcnIiLCJwdXNoIiwiY2hhbmdlVGFua1ZhbHVlIiwic2tpbiIsInRhbmtfc2tpbl9hcnIiLCJhcHBseSIsInRhbmtfMSIsInRhbmtfMiIsInRhbmtfMyIsInRhbmtfNCIsInRhbmtfaG9uZ18xIiwidGFua19ob25nXzIiLCJ0YW5rX2hvbmdfMyIsInRhbmtfaG9uZ180IiwidGFua180XzEiLCJ0YW5rXzRfMiIsInRhbmtfNF8zIiwiU3ByaXRlIiwi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QztVQUN4QztRQUNKO01BQ0o7SUFDSjtJQUNBLElBQUksQ0FBQ25ELElBQUksQ0FBQ0gsWUFBWSxDQUFDM0IsRUFBRSxDQUFDa0YsTUFBTSxDQUFDLENBQUNDLFdBQVcsR0FBR2QsYUFBYSxDQUFDLElBQUksQ0FBQ3ZDLElBQUksQ0FBQ3NDLElBQUksQ0FBQztJQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDbkQsUUFBUSxFQUFDO01BQ2YsSUFBSSxJQUFJLENBQUNHLFVBQVUsSUFBSSxDQUFDLEVBQUM7UUFDckIsSUFBSSxDQUFDVSxJQUFJLENBQUNhLEtBQUssR0FBRyxLQUFLO1FBQ3ZCLElBQUksQ0FBQ2IsSUFBSSxDQUFDVSxNQUFNLEdBQUcsSUFBSTtNQUMzQixDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNwQixVQUFVLElBQUksQ0FBQyxFQUFDO1FBQzFCLElBQUksQ0FBQ1UsSUFBSSxDQUFDYSxLQUFLLEdBQUcsS0FBSztRQUN2QixJQUFJLENBQUNiLElBQUksQ0FBQ1UsTUFBTSxHQUFHLEtBQUs7TUFDNUIsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDcEIsVUFBVSxJQUFJLENBQUMsRUFBQztRQUMxQixJQUFJLENBQUNVLElBQUksQ0FBQ2EsS0FBSyxHQUFHLEtBQUs7UUFDdkIsSUFBSSxDQUFDYixJQUFJLENBQUNVLE1BQU0sR0FBRyxLQUFLO01BQzVCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ3BCLFVBQVUsSUFBSSxDQUFDLEVBQUM7UUFDMUIsSUFBSSxDQUFDVSxJQUFJLENBQUNhLEtBQUssR0FBRyxLQUFLO1FBQ3ZCLElBQUksQ0FBQ2IsSUFBSSxDQUFDVSxNQUFNLEdBQUcsS0FBSztNQUM1QjtJQUNKO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbnZhciBUYWdPZkRpcmVjdGlvbiA9IGNjLkVudW0oe1xyXG4gICAgdXAgOiAwLFxyXG4gICAgcmlnaHQgOiAxLFxyXG4gICAgZG93biA6IDIsXHJcbiAgICBsZWZ0IDogMyxcclxufSlcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAxLjc1XHJcbiAgICAgICAgdGhpcy5maXJlU3BlZWQgPSA0LjM3NVxyXG4gICAgICAgIHRoaXMuc3RvcEF0dGFjayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5vbkd1YXJkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWVcclxuICAgICAgICB0aGlzLmNhbk1vdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5hZGp1c3RFcnIgPSA0LjM3NVxyXG5cclxuICAgICAgICB0aGlzLmlzX2ZpcmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNfZW5lbXkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGl2ZSA9IDFcclxuICAgICAgICB0aGlzLmlzX3NoaWVsZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50YW5rX2xldmVsID0gMSAvLyBiYXNpYyBmYXN0IHBvd2VyIGFybW9yXHJcbiAgICAgICAgdGhpcy50YW5rX2hvbmcgPSBmYWxzZVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNjLnZ2Lkdsb2JhbC5nYW1lLm1hcC5nZXRDb21wb25lbnQoJ2dhbWVfbWFwJylcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubWFwID0gY2MudnYuR2xvYmFsLmdhbWUubWFwLmdldENvbXBvbmVudCgnZ2FtZV9tYXAnKVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlVXA6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXkuc2V0Um90YXRpb24oOTAgKiBUYWdPZkRpcmVjdGlvbi51cCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gLTkwICogVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICAvLyBjYy5sb2coXCJ0YW5rIG1vdmVkIHVwIVwiKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc0Jsb2NrZWQpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlzaW9uU3VwcygpO1xyXG4gICAgICAgIHZhciBwID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIGJveCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHZhciB0b1AgPSBjYy52MihwLngsIHAueSArIGJveC5oZWlnaHQgLyAyICsgMSk7XHJcbiAgICAgICAgLy8gYm91bmRhcnkgZGV0ZWN0XHJcbiAgICAgICAgaWYgKHAueSArIGJveC5oZWlnaHQgLyAyICsgMSA+IDcyOC8qdGhpcy5tYXBMYXllci50b3BCb3VuZGFyeSovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0b3BcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRvcExlZnRcclxuICAgICAgICB0b1AgPSBjYy52MihwLnggLSBib3gud2lkdGggLyAyICsgdGhpcy5hZGp1c3RFcnIsIHAueSArIGJveC5oZWlnaHQgLyAyICsgNCArIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdG9wIGFuZCAxLzMgbGVmdFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCAtIGJveC53aWR0aCAvIDMsIHAueSArIGJveC5oZWlnaHQgLyAyICsgNCArIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdG9wUmlnaHRcclxuICAgICAgICB0b1AgPSBjYy52MihwLnggKyBib3gud2lkdGggLyAyIC0gdGhpcy5hZGp1c3RFcnIsIHAueSArIGJveC5oZWlnaHQgLyAyICsgNCArIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdG9wIGFuZCAxLzMgcmlnaHRcclxuICAgICAgICB0b1AgPSBjYy52MihwLnggKyBib3gud2lkdGggLyAzLCBwLnkgKyBib3guaGVpZ2h0IC8gMiArIDQgKyAxKTtcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS55ID0gcC55ICsgdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTa2luKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZURvd246ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXkuc2V0Um90YXRpb24oOTAgKiBUYWdPZkRpcmVjdGlvbi5kb3duKTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtOTAgKiBUYWdPZkRpcmVjdGlvbi5kb3duXHJcbiAgICAgICAgLy8gY2MubG9nKFwidGFuayBtb3ZlZCBkb3duIVwiKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc0Jsb2NrZWQpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuY29sbGlzaW9uU3VwcygpO1xyXG4gICAgICAgIHZhciBwID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIGJveCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHZhciB0b1AgPSBjYy52MihwLngsIHAueSAtIGJveC5oZWlnaHQgLyAyIC0gMSk7XHJcbiAgICAgICAgLy8gYm91bmRhcnkgZGV0ZWN0XHJcbiAgICAgICAgaWYgKHAueSAtIGJveC5oZWlnaHQgLyAyIC0gMSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJvdHRvbVxyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYm90dG9tTGVmdFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCAtIGJveC53aWR0aCAvIDIgKyB0aGlzLmFkanVzdEVyciwgcC55IC0gYm94LmhlaWdodCAvIDIgLSA0IC0gMSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBib3R0b20gYW5kIDEvMyBsZWZ0XHJcbiAgICAgICAgdG9QID0gY2MudjIocC54IC0gYm94LndpZHRoIC8gMywgcC55IC0gYm94LmhlaWdodCAvIDIgLSA0IC0gMSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBib3R0b21SaWdodFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCArIGJveC53aWR0aCAvIDIgLSB0aGlzLmFkanVzdEVyciwgcC55IC0gYm94LmhlaWdodCAvIDIgLSA0IC0gMSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBib3R0b20gYW5kIDEvMyByaWdodFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCArIGJveC53aWR0aCAvIDMsIHAueSAtIGJveC5oZWlnaHQgLyAyIC0gNCAtIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBwLnkgLSB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oKVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlTGVmdDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteS5zZXRSb3RhdGlvbig5MCAqIFRhZ09mRGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC05MCAqIFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICAvLyBjYy5sb2coXCJ0YW5rIG1vdmVkIGxlZnQhXCIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQmxvY2tlZCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaXNpb25TdXBzKCk7XHJcbiAgICAgICAgdmFyIHAgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgYm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgdmFyIHRvUCA9IGNjLnYyKHAueCAtIGJveC53aWR0aCAvIDIgLSAxLCBwLnkpO1xyXG4gICAgICAgIC8vIGJvdW5kYXJ5IGRldGVjdFxyXG4gICAgICAgIGlmIChwLnggLSBib3guaGVpZ2h0IC8gMiAtIDEgLyotIHRoaXMubWFwTGF5ZXIubGVmdEJvdW5kYXJ5Ki8gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBib3R0b21MZWZ0XHJcbiAgICAgICAgdG9QID0gY2MudjIocC54IC0gYm94LndpZHRoIC8gMiAtIDQgLSAxLCBwLnkgLSBib3guaGVpZ2h0IC8gMiArIHRoaXMuYWRqdXN0RXJyKTtcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC8vIGxlZnQgYW5kIDEvMyBib3R0b21cclxuICAgICAgICB0b1AgPSBjYy52MihwLnggLSBib3gud2lkdGggLyAyIC0gNCAgLSAxLCBwLnkgLSBib3guaGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0b3BMZWZ0XHJcbiAgICAgICAgdG9QID0gY2MudjIocC54IC0gYm94LndpZHRoIC8gMiAtIDQgLSAxLCBwLnkgKyBib3guaGVpZ2h0IC8gMiAtIHRoaXMuYWRqdXN0RXJyKTtcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC8vIGxlZnQgYW5kIDEvMyB0b3BcclxuICAgICAgICB0b1AgPSBjYy52MihwLnggLSBib3gud2lkdGggLyAyIC0gNCAtIDEsIHAueSArIGJveC5oZWlnaHQgLyAzKTtcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS54ID0gcC54IC0gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTa2luKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVJpZ2h0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gdGhpcy5lbmVteS5zZXRSb3RhdGlvbig5MCAqIFRhZ09mRGlyZWN0aW9uLnJpZ2h0KTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAtOTAgKiBUYWdPZkRpcmVjdGlvbi5yaWdodFxyXG4gICAgICAgIC8vIGNjLmxvZyhcInRhbmsgbW92ZWQgcmlnaHQhXCIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzQmxvY2tlZCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5jb2xsaXNpb25TdXBzKCk7XHJcbiAgICAgICAgdmFyIHAgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgYm94ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICAgICAgdmFyIHRvUCA9IGNjLnYyKHAueCArIGJveC53aWR0aCAvIDIgKyAxLCBwLnkpO1xyXG4gICAgICAgIC8vIGJvdW5kYXJ5IGRldGVjdFxyXG4gICAgICAgIGlmIChwLnggKyBib3guaGVpZ2h0IC8gMiArIDEgPiA3MjggLyp0aGlzLm1hcExheWVyLnJpZ2h0Qm91bmRhcnkqLykge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gUmlnaHRcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJvdHRvbVJpZ2h0XHJcbiAgICAgICAgdG9QID0gY2MudjIocC54ICsgYm94LndpZHRoIC8gMiArIDQgKyAxLCBwLnkgLSBib3guaGVpZ2h0IC8gMiArIHRoaXMuYWRqdXN0RXJyKTtcclxuICAgICAgICBpZiAodGhpcy5tYXAuY2hlY2tQb2ludCh0b1ApIHx8IHRoaXMubWFwLmNvbGxpc2lvblRhbmtzKHRvUCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC8vIFJpZ2h0IGFuZCAxLzMgYm90dG9tXHJcbiAgICAgICAgdG9QID0gY2MudjIocC54ICsgYm94LndpZHRoIC8gMiArIDQgKyAxLCBwLnkgLSBib3guaGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyB0b3BSaWdodFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCArIGJveC53aWR0aCAvIDIgKyA0ICsgMSwgcC55ICsgYm94LmhlaWdodCAvIDIgLSB0aGlzLmFkanVzdEVycik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmNoZWNrUG9pbnQodG9QKSB8fCB0aGlzLm1hcC5jb2xsaXNpb25UYW5rcyh0b1ApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSaWdodCBhbmQgMS8zIHRvcFxyXG4gICAgICAgIHRvUCA9IGNjLnYyKHAueCArIGJveC53aWR0aCAvIDIgKyA0ICsgMSwgcC55ICsgYm94LmhlaWdodCAvIDMpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcC5jaGVja1BvaW50KHRvUCkgfHwgdGhpcy5tYXAuY29sbGlzaW9uVGFua3ModG9QKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSBwLnggKyB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkZpcmUoKXtcclxuICAgICAgICBpZiAodGhpcy5pc19maXJlKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMuaXNfZW5lbXkpe1xyXG4gICAgICAgICAgICBjYy52di5BdWRpby5wbGF5RmlyZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNfZmlyZSA9IHRydWVcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gLXRoaXMubm9kZS5hbmdsZSAvIDkwXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG1hcCA6IHRoaXMubWFwLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gOiAtdGhpcy5ub2RlLmFuZ2xlIC8gOTAsXHJcbiAgICAgICAgICAgIHNwZWVkIDogdGhpcy5maXJlU3BlZWQsXHJcbiAgICAgICAgICAgIGlzX2VuZW15IDogdGhpcy5pc19lbmVteSxcclxuICAgICAgICAgICAgZGVzdHJveSA6ICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwID0gdGhpcy5ub2RlLnBvc2l0aW9uXHJcbiAgICAgICAgLy8gdXBcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApe1xyXG4gICAgICAgICAgICBwID0gcC5hZGQoY2MudjIoMCwgdGhpcy5ub2RlLmhlaWdodCowLjUpKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByaWdodFxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKXtcclxuICAgICAgICAgICAgcCA9IHAuYWRkKGNjLnYyKHRoaXMubm9kZS5oZWlnaHQqMC41LCAwKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZG93blxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAyKXtcclxuICAgICAgICAgICAgcCA9IHAuc3ViKGNjLnYyKDAsIHRoaXMubm9kZS5oZWlnaHQqMC41KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAzKXtcclxuICAgICAgICAgICAgcCA9IHAuc3ViKGNjLnYyKHRoaXMubm9kZS5oZWlnaHQqMC41LCAwKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKGNjLnZ2Lkdsb2JhbC5nYW1lLmJ1bGxldF9wcmVmYWIpXHJcbiAgICAgICAgYnVsbGV0LnBvc2l0aW9uID0gcC8vdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy52MigwLCB0aGlzLm5vZGUuaGVpZ2h0KjAuNSkpXHJcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnYnVsbGV0JykuaW5pdChkYXRhKVxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0LC0xKVxyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLmJ1bGxldF9hcnIucHVzaChidWxsZXQpXHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVRhbmtWYWx1ZSgpe1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLnNraW4pe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2tpbiA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNraW4gPSAxIC0gdGhpcy5ub2RlLnNraW5cclxuICAgICAgICBsZXQgdGFua19za2luX2FyciA9IFtdXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzX2VuZW15KXtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFua19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDMpe1xyXG4gICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua18zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSA0KXtcclxuICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfNClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFua19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhbmtfaG9uZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua19ob25nXzEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFua19ob25nKXtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rX2hvbmdfMilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfMilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YW5rX2hvbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfaG9uZ18zKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua18zKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSA0KXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhbmtfaG9uZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua19ob25nXzQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXZlID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzRfMSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5saXZlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzRfMilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5saXZlID09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzRfMylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGFua19za2luX2Fyclt0aGlzLm5vZGUuc2tpbl1cclxuICAgICAgICBpZiAoIXRoaXMuaXNfZW5lbXkpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YW5rX2xldmVsID09IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gNDUuMjVcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSA0My41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gNDUuMjVcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSA1Mi4yNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IDQ1LjI1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gNTIuMjVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSA0OC43NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDUyLjI1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVNraW4oKXtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5za2luKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNraW4gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5za2luID0gMSAtIHRoaXMubm9kZS5za2luXHJcbiAgICAgICAgbGV0IHRhbmtfc2tpbl9hcnIgPSBbXVxyXG4gICAgICAgIGlmICghdGhpcy5pc19lbmVteSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua18yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfMylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YW5rX2hvbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfaG9uZ18xKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua18xKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhbmtfaG9uZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua19ob25nXzIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rXzIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFua19ob25nKXtcclxuICAgICAgICAgICAgICAgICAgICB0YW5rX3NraW5fYXJyLnB1c2goLi4udGhpcy50YW5rX2hvbmdfMylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfMylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YW5rX2hvbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmtfc2tpbl9hcnIucHVzaCguLi50aGlzLnRhbmtfaG9uZ180KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua180XzEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubGl2ZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua180XzIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubGl2ZSA9PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFua19za2luX2Fyci5wdXNoKC4uLnRoaXMudGFua180XzMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRhbmtfc2tpbl9hcnJbdGhpcy5ub2RlLnNraW5dXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzX2VuZW15KXtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFua19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IDQ1LjI1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gNDMuNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGFua19sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IDQ1LjI1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gNTIuMjVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhbmtfbGV2ZWwgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSA0NS4yNVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IDUyLjI1XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YW5rX2xldmVsID09IDQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gNDguNzVcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSA1Mi4yNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/UserInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff4a84xdVJBXbpGVHnIatHq', 'UserInfo');
// Script/common/UserInfo.js

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
    this.level = 1;
    this.live = 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXFVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJjdG9yIiwibGV2ZWwiLCJsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLElBQUksV0FBQUEsS0FBQSxFQUFFO0lBQ0YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7RUFDakI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxXHJcbiAgICAgICAgdGhpcy5saXZlID0gM1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77241KWy6BJ8J1UM4sIYOJ4', 'Tools');
// Script/common/Tools.js

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
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXFRvb2xzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsTUFBTSxXQUFBQSxPQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUNiLE9BQVFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNILE1BQU0sRUFBRSxJQUFJRSxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDekQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcmFuZG9tIChtaW4sIG1heCl7XHJcbiAgICAgICAgcmV0dXJuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/caozuo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbf8c+f4BRChL6e9aHYTeSa', 'caozuo');
// Script/game/caozuo.js

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
  // update (dt) {},
  onClickFire: function onClickFire() {
    if (cc.vv.Global.game.player) {
      cc.vv.Global.game.player.onFire();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxjYW96dW8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIm9uQ2xpY2tGaXJlIiwidnYiLCJHbG9iYWwiLCJnYW1lIiwicGxheWVyIiwib25GaXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0g7RUFFRDtFQUVBO0VBRUFDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUVEO0VBQ0FDLFdBQVcsV0FBQUEsWUFBQSxFQUFFO0lBQ1QsSUFBS0wsRUFBRSxDQUFDTSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLEVBQUM7TUFDMUJULEVBQUUsQ0FBQ00sRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLEVBQUU7SUFDckM7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIG9uQ2xpY2tGaXJlKCl7XHJcbiAgICAgICAgaWYgKCBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXIpe1xyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXIub25GaXJlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxkaXJlY3Rpb24uanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJubyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpcmV0aW9uX2ljb24iLCJTcHJpdGUiLCJTcHJpdGVGcmFtZSIsIm5vbmUiLCJ1cF9pY29uIiwiTm9kZSIsImRvd25faWNvbiIsImxlZnRfaWNvbiIsInJpZ2h0X2ljb24iLCJzdGFydCIsInNwcml0ZUZyYW1lIiwiZGlyZWN0aW9uIiwibm9kZSIsInBhcmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJjYlRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwiY2JUb3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJjYlRvdWNoRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwiY2JUb3VjaENhbmNlbCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBvcyIsImdldExvY2F0aW9uIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwiY29udGFpbnMiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJwbGF5ZXJfZGlyZWN0aW9uIiwidXBkYXRlIiwib25Nb3ZlTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxFQUFFLEVBQUc7QUFDVCxDQUFDLENBQUM7QUFHRk4sRUFBRSxDQUFDTyxLQUFLLENBQUM7RUFDTCxXQUFTUCxFQUFFLENBQUNRLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxhQUFh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LGNBQWMsQ0FBQ0ksS0FBSyxFQUFDO01BQzVDO01BQ0EsSUFBSSxDQUFDTyxhQUFhLENBQUNVLFdBQVcsR0FBRyxJQUFJLENBQUNqQixLQUFLO01BQzNDSCxFQUFFLENBQUN5QyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRzdDLGNBQWMsQ0FBQ0ksS0FBSztJQUM3RDtFQUNKLENBQUM7RUFHRDJDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDekIsU0FBUyxHQUFHdEIsY0FBYyxDQUFDTSxJQUFJO0VBQ3hDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgVGFnT2ZEaXJlY3Rpb24gPSBjYy5FbnVtKHtcclxuICAgIHVwIDogMCxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIGRvd24gOiAyLFxyXG4gICAgbGVmdCA6IDMsXHJcbiAgICBubyA6IDQsXHJcbn0pXHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBkaXJldGlvbl9pY29uOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgdXA6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIGRvd246IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIGxlZnQ6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIHJpZ2h0OiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICBub25lOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcbiAgICAgICAgdXBfaWNvbjogY2MuTm9kZSxcclxuICAgICAgICBkb3duX2ljb246IGNjLk5vZGUsXHJcbiAgICAgICAgbGVmdF9pY29uOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJpZ2h0X2ljb246IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5ub25lXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmNiVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLmNiVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jYlRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jYlRvdWNoQ2FuY2VsLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2JUb3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5ub25lXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG9rZVwiKVxyXG5cclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyDkuIpcclxuICAgICAgICBpZiAodGhpcy51cF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXAnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnVwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4i1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZG93bl9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZG93bicpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24uZG93blxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlt6ZcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxlZnRfaWNvbi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlZnQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+zXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yaWdodF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnJpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjYlRvdWNoTW92ZShldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIOS4ilxyXG4gICAgICAgIGlmICh0aGlzLnVwX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5LiLXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kb3duX2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb3duJylcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5kb3duXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGVmdF9pY29uLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHBvcykpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVmdCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubGVmdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj7NcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJpZ2h0X2ljb24uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyaWdodCcpXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ucmlnaHRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5kJylcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICB9LFxyXG5cclxuICAgIGNiVG91Y2hDYW5jZWwoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2FuY2VsJylcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLm5vXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5ubyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMubm9uZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZXRpb25faWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMudXBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwJylcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLnVwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICB0aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmRvd25cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKVxyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24uZG93blxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXJldGlvbl9pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5sZWZ0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0JylcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgICAgICB0aGlzLmRpcmV0aW9uX2ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0XHJcbiAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5yaWdodFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICBvbk1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5sZWZ0XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/enemy_tank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '492c3p9P+dMD4ghf4lXCLvE', 'enemy_tank');
// Script/game/enemy_tank.js

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
    tank_hong_1: [cc.SpriteFrame],
    tank_2: [cc.SpriteFrame],
    tank_hong_2: [cc.SpriteFrame],
    tank_3: [cc.SpriteFrame],
    tank_hong_3: [cc.SpriteFrame],
    tank_4_1: [cc.SpriteFrame],
    tank_4_2: [cc.SpriteFrame],
    tank_4_3: [cc.SpriteFrame],
    tank_hong_4: [cc.SpriteFrame]
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.map = cc.vv.Global.game.map.getComponent('game_map');
    this._super();
    this.is_enemy = true;
    this.fireSpeed = 4.375;
    var flag = true;
    while (flag) {
      var tank_level = parseInt(Math.random() * 4) + 1;
      this.tank_level = tank_level;
      var data = cc.vv.Config.getEnemyTankValue(tank_level);
      if (data) {
        if (data.fireSpeed) {
          this.fireSpeed = data.fireSpeed;
        }
        if (data.moveSpeed) {
          this.moveSpeed = data.moveSpeed;
        }
        if (data.live) {
          this.live = data.live;
        }
      }
      if (tank_level == 1) {
        if (cc.vv.Global.stage_info.enemy.tank_1 <= 0) {} else {
          cc.vv.Global.stage_info.enemy.tank_1--;
          flag = false;
        }
      } else if (tank_level == 2) {
        if (cc.vv.Global.stage_info.enemy.tank_2 <= 0) {} else {
          cc.vv.Global.stage_info.enemy.tank_2--;
          flag = false;
        }
      } else if (tank_level == 3) {
        if (cc.vv.Global.stage_info.enemy.tank_3 <= 0) {} else {
          cc.vv.Global.stage_info.enemy.tank_3--;
          flag = false;
        }
      } else if (tank_level == 4) {
        if (cc.vv.Global.stage_info.enemy.tank_4 <= 0) {} else {
          cc.vv.Global.stage_info.enemy.tank_4--;
          flag = false;
        }
      }
      if (!flag) {
        var isHaveHongTank = false;
        var enemyTankArr = cc.vv.Global.game.enemy_tank_arr;
        for (var i = 0; i < enemyTankArr.length; i++) {
          var enemyTank = enemyTankArr[i];
          if (enemyTank && enemyTank.node && enemyTank.node.isValid) {
            if (enemyTank.tank_hong) {
              isHaveHongTank = true;
              break;
            }
          }
        }
        var hong = parseInt(Math.random() * 10);
        if (hong % 4 == 0 && cc.vv.Global.stage_info.hong > 0 && cc.vv.Global.enemy_count < 13 && !isHaveHongTank) {
          // if (true){
          this.tank_hong = true;
          cc.vv.Global.stage_info.hong--;
        } else {
          this.tank_hong = false;
        }
      }
    }
    this.changeTankValue();
  },
  moveUp: function moveUp() {
    if (cc.vv.Global.game.is_pause) return;
    // if (cc.vv.Global.game.is_over) return
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
    // if (cc.vv.Global.game.is_over) return
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
    // if (cc.vv.Global.game.is_over) return
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
    // if (cc.vv.Global.game.is_over) return
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
    if (this.node && this.node.active) {
      this._super();
    }
  },
  update: function update() {
    if (cc.vv.Global.game.is_pause) return;
    if (cc.vv.Global.game.is_enemy_tank_pause) return;
    var fire = parseInt(Math.random() * 600);
    if (fire < 10) {
      this.onFire();
    }
    var direction = -this.node.angle / 90;
    // console.log(this.moveSpeed, this.tank_level)
    if (direction == TagOfDirection.up) {
      this.moveUp();
    } else if (direction == TagOfDirection.left) {
      this.moveLeft();
    } else if (direction == TagOfDirection.down) {
      this.moveDown();
    } else if (direction == TagOfDirection.right) {
      this.moveRight();
    }
    if (!this.isBlocked) {
      return;
    } else {
      var r = parseInt(Math.random() * 10);
      if (r < 2) {
        if (direction != TagOfDirection.up) {
          this.isBlocked = false;
          this.moveUp();
        }
      } else if (r < 4) {
        if (direction != TagOfDirection.left) {
          this.isBlocked = false;
          this.moveLeft();
        }
      } else if (r < 8) {
        if (direction != TagOfDirection.down) {
          this.isBlocked = false;
          this.moveDown();
        }
      } else if (r < 10) {
        if (direction != TagOfDirection.right) {
          this.isBlocked = false;
          this.moveRight();
        }
      }
    }
  },
  onDestroy: function onDestroy() {
    var data = {
      position: this.node.position,
      level: this.tank_level
    };
    this.map = cc.vv.Global.game.map.getComponent('game_map');
    this.map.addPoint(data);
    console.log('enemy tank destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxlbmVteV90YW5rLmpzIl0sIm5hbWVzIjpbIlRhbmsiLCJyZXF1aXJlIiwiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ0YW5rXzEiLCJTcHJpdGVGcmFtZSIsInRhbmtfaG9uZ18xIiwidGFua18yIiwidGFua19ob25nXzIiLCJ0YW5rXzMiLCJ0YW5rX2hvbmdfMyIsInRhbmtfNF8xIiwidGFua180XzIiLCJ0YW5rXzRfMyIsInRhbmtfaG9uZ180Iiwic3RhcnQiLCJtYXAiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJnZXRDb21wb25lbnQiLCJfc3VwZXIiLCJpc19lbmVteSIsImZpcmVTcGVlZCIsImZsYWciLCJ0YW5rX2xldmVsIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiZGF0YSIsIkNvbmZpZyIsImdldEVuZW15VGFua1ZhbHVlIiwibW92ZVNwZWVkIiwibGl2ZSIsInN0YWdlX2luZm8iLCJlbmVteSIsInRhbmtfNCIsImlzSGF2ZUhvbmdUYW5rIiwiZW5lbXlUYW5rQXJyIiwiZW5lbXlfdGFua19hcnIiLCJpIiwibGVuZ3RoIiwiZW5lbXlUYW5rIiwibm9kZSIsImlzVmFsaWQiLCJ0YW5rX2hvbmciLCJob25nIiwiZW5lbXlfY291bnQiLCJjaGFuZ2VUYW5rVmFsdWUiLCJtb3ZlVXAiLCJpc19wYXVzZSIsImRpcmVjdGlvbiIsImFuZ2xlIiwiYSIsImdldFRpbGVkQ29vcmRpbmF0ZSIsInBvc2l0aW9uIiwiYiIsIngiLCJwb3MiLCJnZXRQb3NGcm9tVGlsZWQiLCJ5IiwibW92ZURvd24iLCJnZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0Iiwib25GaXJlIiwiYWN0aXZlIiwidXBkYXRlIiwiaXNfZW5lbXlfdGFua19wYXVzZSIsImZpcmUiLCJpc0Jsb2NrZWQiLCJyIiwib25E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QUNuQyxJQUFJLENBQUN1RSxTQUFTLEdBQUcsS0FBSztVQUN0QixJQUFJLENBQUNOLFNBQVMsRUFBRTtRQUNwQjtNQUNKO0lBQ0o7RUFDSixDQUFDO0VBRURRLFNBQVMsV0FBQUEsVUFBQSxFQUFFO0lBQ1AsSUFBSTNDLElBQUksR0FBRztNQUNQMEIsUUFBUSxFQUFHLElBQUksQ0FBQ1osSUFBSSxDQUFDWSxRQUFRO01BQzdCa0IsS0FBSyxFQUFHLElBQUksQ0FBQ2hEO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUNULEdBQUcsR0FBR3BCLEVBQUUsQ0FBQ3FCLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN6RCxJQUFJLENBQUNKLEdBQUcsQ0FBQzBELFFBQVEsQ0FBQzdDLElBQUksQ0FBQztJQUN2QjhDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ3JDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5sZXQgVGFuayA9IHJlcXVpcmUoJ1RhbmsnKVxyXG5cclxudmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG59KVxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFRhbmssXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRhbmtfMSA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua19ob25nXzEgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfMiA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua19ob25nXzIgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfMyA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua19ob25nXzMgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfNF8xIDogW2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICB0YW5rXzRfMiA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua180XzMgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfaG9uZ180IDogW2NjLlNwcml0ZUZyYW1lXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNjLnZ2Lkdsb2JhbC5nYW1lLm1hcC5nZXRDb21wb25lbnQoJ2dhbWVfbWFwJylcclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICAgICAgdGhpcy5pc19lbmVteSA9IHRydWVcclxuICAgICAgICB0aGlzLmZpcmVTcGVlZCA9IDQuMzc1XHJcblxyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZVxyXG4gICAgICAgIHdoaWxlIChmbGFnKXtcclxuICAgICAgICAgICAgbGV0IHRhbmtfbGV2ZWwgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogNCkgKyAxXHJcbiAgICAgICAgICAgIHRoaXMudGFua19sZXZlbCA9IHRhbmtfbGV2ZWxcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYy52di5Db25maWcuZ2V0RW5lbXlUYW5rVmFsdWUodGFua19sZXZlbClcclxuICAgICAgICAgICAgaWYgKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZmlyZVNwZWVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVTcGVlZCA9IGRhdGEuZmlyZVNwZWVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tb3ZlU3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVNwZWVkID0gZGF0YS5tb3ZlU3BlZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IGRhdGEubGl2ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YW5rX2xldmVsID09IDEpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5zdGFnZV9pbmZvLmVuZW15LnRhbmtfMSA8PSAwKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLnN0YWdlX2luZm8uZW5lbXkudGFua18xLS1cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YW5rX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5zdGFnZV9pbmZvLmVuZW15LnRhbmtfMiA8PSAwKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLnN0YWdlX2luZm8uZW5lbXkudGFua18yLS1cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YW5rX2xldmVsID09IDMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5zdGFnZV9pbmZvLmVuZW15LnRhbmtfMyA8PSAwKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLnN0YWdlX2luZm8uZW5lbXkudGFua18zLS1cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0YW5rX2xldmVsID09IDQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5zdGFnZV9pbmZvLmVuZW15LnRhbmtfNCA8PSAwKSB7fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLnN0YWdlX2luZm8uZW5lbXkudGFua180LS1cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzSGF2ZUhvbmdUYW5rID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteVRhbmtBcnIgPSBjYy52di5HbG9iYWwuZ2FtZS5lbmVteV90YW5rX2FyclxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8ZW5lbXlUYW5rQXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteVRhbmsgPSBlbmVteVRhbmtBcnJbaV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlUYW5rICYmIGVuZW15VGFuay5ub2RlICYmIGVuZW15VGFuay5ub2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlUYW5rLnRhbmtfaG9uZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hhdmVIb25nVGFuayA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaG9uZyA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgICAgIGlmIChob25nICUgNCA9PSAwICYmIGNjLnZ2Lkdsb2JhbC5zdGFnZV9pbmZvLmhvbmcgPiAwICYmIGNjLnZ2Lkdsb2JhbC5lbmVteV9jb3VudCA8IDEzICYmICFpc0hhdmVIb25nVGFuayl7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YW5rX2hvbmcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudnYuR2xvYmFsLnN0YWdlX2luZm8uaG9uZy0tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmtfaG9uZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlVGFua1ZhbHVlKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgLy8gaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgLy8gdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pICAgICAgICBcclxuICAgICAgICB2YXIgYSA9IHRoaXMubWFwLmdldFRpbGVkQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pICAgIFxyXG4gICAgICAgIGxldCBiID0gdGhpcy5ub2RlLnBvc2l0aW9uXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgICAgICBsZXQgeCA9IGEueCUyXHJcbiAgICAgICAgICAgIGlmICh4IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZURvd24gKCl7XHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX3BhdXNlKSByZXR1cm5cclxuICAgICAgICAvLyBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfb3ZlcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcCkgcmV0dXJuXHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IC10aGlzLm5vZGUuYW5nbGUgLyA5MDtcclxuICAgICAgICB2YXIgYSA9IHRoaXMubWFwLmdldFRpbGVkUm91bmRDb29yZGluYXRlKHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnVwKXtcclxuICAgICAgICAgICAgbGV0IHkgPSBhLnklMlxyXG4gICAgICAgICAgICBpZiAoeSE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLnkrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngtLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZUxlZnQgKCl7XHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX3BhdXNlKSByZXR1cm5cclxuICAgICAgICAvLyBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfb3ZlcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcCkgcmV0dXJuXHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IC10aGlzLm5vZGUuYW5nbGUgLyA5MDtcclxuICAgICAgICB2YXIgYSA9IHRoaXMubWFwLmdldFRpbGVkUm91bmRDb29yZGluYXRlKHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnVwKXtcclxuICAgICAgICAgICAgbGV0IHkgPSBhLnklMlxyXG4gICAgICAgICAgICBpZiAoeSE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLnkrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngtLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVJpZ2h0ICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgLy8gaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmlyZSAoKXtcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX2VuZW15X3RhbmtfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIHZhciBmaXJlID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDYwMCk7XHJcbiAgICAgICAgaWYgKGZpcmUgPCAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMub25GaXJlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IC10aGlzLm5vZGUuYW5nbGUgLyA5MDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1vdmVTcGVlZCwgdGhpcy50YW5rX2xldmVsKVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0Jsb2NrZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgaWYgKHIgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9IFRhZ09mRGlyZWN0aW9uLnVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9IFRhZ09mRGlyZWN0aW9uLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPSBUYWdPZkRpcmVjdGlvbi5kb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAociA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Jsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb24gOiB0aGlzLm5vZGUucG9zaXRpb24sXHJcbiAgICAgICAgICAgIGxldmVsIDogdGhpcy50YW5rX2xldmVsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFwID0gY2MudnYuR2xvYmFsLmdhbWUubWFwLmdldENvbXBvbmVudCgnZ2FtZV9tYXAnKVxyXG4gICAgICAgIHRoaXMubWFwLmFkZFBvaW50KGRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZW15IHRhbmsgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/game_map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '806f7dg0Q5Jbbmom0b1ZzAZ', 'game_map');
// Script/game/game_map.js

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
  left: 3
});
cc.Class({
  "extends": cc.Component,
  properties: {
    // bg1: cc.TiledLayer,
    // bg2: cc.TiledLayer,
    // bg3: cc.TiledLayer,
    // objects: cc.TiledObjectGroup,
    level_arr: [cc.TiledMapAsset]
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    // this.tiledMap = this.node.getComponent(cc.TiledMap)
    // this.tiledMap.tmxAsset = this.level_arr[4]

    // this.bg1 = this.tiledMap.getLayer('bg1')
    // this.bg2 = this.tiledMap.getLayer('bg2')
    // this.bg3 = this.tiledMap.getLayer('bg3')
    // this.objects = this.tiledMap.getObjectGroup('objects')

    // this.home_wall_pos_arr = this.initHomeWall()
    // this.home_gid_pos_arr1 = []
    // this.home_gid_pos_arr2 = []
    // for (let i=0;i<this.home_wall_pos_arr.length;i++){
    //     this.home_gid_pos_arr1.push(this.bg1.getTileGIDAt(this.home_wall_pos_arr[i]))
    // }
    // for (let i=0;i<this.home_wall_pos_arr.length;i++){
    //     this.home_gid_pos_arr2.push(this.bg2.getTileGIDAt(this.home_wall_pos_arr[i]))
    // }
  },
  initMap: function initMap() {
    this.tiledMap = this.node.getComponent(cc.TiledMap);
    this.tiledMap.tmxAsset = this.level_arr[cc.vv.UserInfo.level - 1];
    this.bg1 = this.tiledMap.getLayer('bg1');
    this.bg2 = this.tiledMap.getLayer('bg2');
    this.bg3 = this.tiledMap.getLayer('bg3');
    this.objects = this.tiledMap.getObjectGroup('objects');

    // this.home_wall_pos_arr = this.initHomeWall()
    // this.home_gid_pos_arr1 = []
    // this.home_gid_pos_arr2 = []
    // for (let i=0;i<this.home_wall_pos_arr.length;i++){
    //     this.home_gid_pos_arr1.push(this.bg1.getTileGIDAt(this.home_wall_pos_arr[i]))
    // }
    // for (let i=0;i<this.home_wall_pos_arr.length;i++){
    //     this.home_gid_pos_arr2.push(this.bg2.getTileGIDAt(this.home_wall_pos_arr[i]))
    // }

    this.bg1.node.active = true;
    this.bg2.node.active = false;
    this.bg3.node.active = false;
    var bornArray = this.objects.getObjects();
    // console.log(bornArray)
    var born0 = cc.v2(bornArray[0]["x"], bornArray[0]["y"]);
    var born1 = cc.v2(bornArray[1]["x"], bornArray[1]["y"]);
    var born2 = cc.v2(bornArray[2]["x"], bornArray[2]["y"]);
    var born3 = cc.v2(bornArray[3]["x"], bornArray[3]["y"]);
    var born4 = cc.v2(bornArray[4]["x"], bornArray[4]["y"]);
    var born5 = cc.v2(bornArray[5]["x"], bornArray[5]["y"]);
    var born6 = cc.v2(bornArray[6]["x"], bornArray[6]["y"]);
    var born7 = cc.v2(bornArray[7]["x"], bornArray[7]["y"]);
    var born8 = cc.v2(bornArray[8]["x"], bornArray[8]["y"]);
    var born9 = cc.v2(bornArray[9]["x"], bornArray[9]["y"]);
    var born10 = cc.v2(bornArray[10]["x"], bornArray[10]["y"]);
    var born11 = cc.v2(bornArray[11]["x"], bornArray[11]["y"]);
    var born12 = cc.v2(bornArray[12]["x"], bornArray[12]["y"]);
    var born13 = cc.v2(bornArray[13]["x"], bornArray[13]["y"]);
    var born14 = cc.v2(bornArray[14]["x"], bornArray[14]["y"]);
    console.log(born0.x, born0.y);
    this.player_pos = born0.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 + 4));
    this.enemy_pos_arr = [born1.add(cc.v2(42 * 0.5 + 4, -42 * 0.5 - 4)), born2.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born3.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4))];
    this.props_pos_arr = [born4.add(cc.v2(42 * 0.5 + 4, -42 * 0.5 - 4)), born5.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born6.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born7.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born8.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born9.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born10.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born11.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born12.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4)), born13.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 - 4))];
    this.home_pos = born14.add(cc.v2(42 * 0.5 - 4, -42 * 0.5 + 4));
  },
  initHomeWall: function initHomeWall() {
    var arr = [];
    arr.push(cc.v2(22, 51));
    arr.push(cc.v2(23, 51));
    arr.push(cc.v2(28, 51));
    arr.push(cc.v2(29, 51));
    arr.push(cc.v2(22, 50));
    arr.push(cc.v2(23, 50));
    arr.push(cc.v2(28, 50));
    arr.push(cc.v2(29, 50));
    arr.push(cc.v2(22, 49));
    arr.push(cc.v2(23, 49));
    arr.push(cc.v2(28, 49));
    arr.push(cc.v2(29, 49));
    arr.push(cc.v2(22, 48));
    arr.push(cc.v2(23, 48));
    arr.push(cc.v2(28, 48));
    arr.push(cc.v2(29, 48));
    arr.push(cc.v2(22, 47));
    arr.push(cc.v2(23, 47));
    arr.push(cc.v2(24, 47));
    arr.push(cc.v2(25, 47));
    arr.push(cc.v2(26, 47));
    arr.push(cc.v2(27, 47));
    arr.push(cc.v2(28, 47));
    arr.push(cc.v2(29, 47));
    arr.push(cc.v2(22, 46));
    arr.push(cc.v2(23, 46));
    arr.push(cc.v2(24, 46));
    arr.push(cc.v2(25, 46));
    arr.push(cc.v2(26, 46));
    arr.push(cc.v2(27, 46));
    arr.push(cc.v2(28, 46));
    arr.push(cc.v2(29, 46));
    return arr;
  },
  initPlayer: function initPlayer(data) {
    if (cc.vv.UserInfo.live <= 0) {
      cc.vv.Global.game.is_over = true;
      return;
    }
    var player = cc.instantiate(cc.vv.Global.game.player_tank_prefab);
    player.position = this.player_pos;
    this.node.addChild(player, -1);
    player.active = false;
    player.getComponent('player_tank').is_shield = true;
    if (data) {
      if (data.moveSpeed) {
        player.getComponent('player_tank').moveSpeed = data.moveSpeed;
      }
      if (data.fireSpeed) {
        player.getComponent('player_tank').fireSpeed = data.fireSpeed;
      }
      if (data.tank_level) {
        player.getComponent('player_tank').tank_level = data.tank_level;
      }
      player.getComponent('player_tank').changeTankValue();
    }
    var callback = function callback() {
      player.active = true;
      var shield = cc.instantiate(cc.vv.Global.game.shield_prefab);
      player.addChild(shield);
      shield.getComponent('shield').init(player.getComponent('player_tank'));
    };
    data = {
      is_enemy: false,
      callback: callback
    };
    var appear = cc.instantiate(cc.vv.Global.game.appear_prefab);
    appear.position = this.player_pos;
    this.node.addChild(appear);
    appear.getComponent('appear').init(data);
    return player.getComponent('player_tank');
  },
  initEnemy: function initEnemy() {
    if (cc.vv.Global.enemy_count <= 0) return;
    var enemy = cc.instantiate(cc.vv.Global.game.enemy_tank_prefab);
    enemy.position = this.enemy_pos_arr[cc.vv.Global.game.enemy_index];
    enemy.active = false;
    this.node.addChild(enemy, -1);
    enemy.getComponent('enemy_tank').is_shield = true;
    cc.vv.Global.game.enemy_index++;
    cc.vv.Global.enemy_count--;
    if (cc.vv.Global.game.enemy_index >= 3) {
      cc.vv.Global.game.enemy_index = 0;
    }
    var callback = function callback() {
      enemy.active = true;
      enemy.getComponent('enemy_tank').is_shield = false;
    };
    var data = {
      is_enemy: true,
      callback: callback
    };
    var appear = cc.instantiate(cc.vv.Global.game.appear_prefab);
    appear.position = enemy.position;
    this.node.addChild(appear);
    appear.getComponent('appear').init(data);
    return enemy.getComponent('enemy_tank');
  },
  initProps: function initProps() {
    var pos = this.props_pos_arr[parseInt(Math.random() * this.props_pos_arr.length)];
    var props = cc.instantiate(cc.vv.Global.game.props_prefab);
    props.position = pos;
    this.node.addChild(props);
    if (cc.vv.Global.game.props && cc.vv.Global.game.props.node && cc.vv.Global.game.props.node.active) {
      cc.vv.Global.game.props.node.destroy();
    }
    cc.vv.Global.game.props = props.getComponent('props');
  },
  addPoint: function addPoint(data) {
    var point = cc.instantiate(cc.vv.Global.game.point_prefab);
    point.position = data.position;
    this.node.addChild(point);
    var score = 0;
    if (data.level == 1) {
      score = 100;
    } else if (data.level == 2) {
      score = 200;
    } else if (data.level == 3) {
      score = 300;
    } else if (data.level == 4) {
      score = 400;
    } else if (data.level == 5) {
      score = 500;
    }
    point.getComponent('point').init(score);
  },
  repairHome: function repairHome() {
    console.log('修复home');
    for (var i = 0; i < this.home_wall_pos_arr.length; i++) {
      this.bg1.setTileGIDAt(this.home_gid_pos_arr1[i], this.home_wall_pos_arr[i].x, this.home_wall_pos_arr[i].y, this.home_gid_pos_arr1[i]);
      this.bg2.setTileGIDAt(this.home_gid_pos_arr2[i], this.home_wall_pos_arr[i].x, this.home_wall_pos_arr[i].y, this.home_gid_pos_arr2[i]);
    }
  },
  getPosFromTiled: function getPosFromTiled(pos) {
    if (pos.x < 0 || pos.y < 0) {
      return cc.v2(0, 0);
    }
    var x = pos.x * 14;
    var y = (52 - pos.y) * 14;
    return cc.v2(x, y);
  },
  getTiledRoundCoordinate: function getTiledRoundCoordinate(pos) {
    var cox = -1,
      coy = -1;
    var layersize = this.bg1.getLayerSize();
    var aa = this.node.getComponent(cc.TiledMap).getTileSize();
    // var tilesize = this.map1.getTileSize();
    var tilesize = this.tiledMap.getTileSize();
    cox = Math.round(pos.x /*- this.leftBoundary*/ / tilesize.width);
    coy = Math.round(layersize.height - pos.y / tilesize.height);
    // console.log(cox, coy, 11111111)
    if (cox >= 0 && cox < layersize.width && coy >= 0 && coy < layersize.height) {
      return cc.v2(cox, coy);
    } else {
      return cc.v2(-1, -1);
    }
  },
  getTiledCoordinate: function getTiledCoordinate(pos) {
    var cox = -1,
      coy = -1;
    var layersize = this.bg1.getLayerSize();
    var aa = this.node.getComponent(cc.TiledMap).getTileSize();
    // var tilesize = this.map1.getTileSize();
    var tilesize = this.tiledMap.getTileSize();
    cox = parseInt(pos.x /*- this.leftBoundary*/ / tilesize.width);
    coy = parseInt(layersize.height - pos.y / tilesize.height);
    // console.log(cox, coy, 11111111)
    if (cox >= 0 && cox < layersize.width && coy >= 0 && coy < layersize.height) {
      return cc.v2(cox, coy);
    } else {
      return cc.v2(-1, -1);
    }
  },
  getTiledRoundIdFromPos: function getTiledRoundIdFromPos(pos) {
    var point = this.getTiledRoundCoordinate(pos);
    if (point.x < 0 || point.y < 0) {
      return -1;
    }
    return this.bg1.getTileGIDAt(point);
  },
  getTiledIdFromPos: function getTiledIdFromPos(pos) {
    var point = this.getTiledCoordinate(pos);
    if (point.x < 0 || point.y < 0) {
      return -1;
    }
    if (this.bg2.node.active) {
      var gid = this.bg2.getTileGIDAt(point);
      if (gid > 0) {
        return gid;
      }
    }
    return this.bg1.getTileGIDAt(point);
  },
  checkPoint: function checkPoint(pos) {
    var toP = pos;
    var tid = this.getTiledIdFromPos(pos);
    // 空
    if (tid == 0) {
      return false;
    }
    // 草地
    else if (cc.vv.Global.isGrassland(tid)) {
      return false;
    }
    return true;
  },
  collisionTanks: function collisionTanks(pos) {
    var enemy_tank_arr = cc.vv.Global.game.enemy_tank_arr;
    for (var i = 0; i < enemy_tank_arr.length; i++) {
      if (enemy_tank_arr[i] && enemy_tank_arr[i].node && enemy_tank_arr[i].node.isValid && enemy_tank_arr[i].node.getBoundingBox().contains(pos)) {
        return true;
      }
    }
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.isValid && player.node.getBoundingBox().contains(pos)) {
      return true;
    }
    return false;
  },
  collisionBullet: function collisionBullet(pos, is_enemy) {
    var bullet_arr = cc.vv.Global.game.bullet_arr;
    for (var i = 0; i < bullet_arr.length; i++) {
      if (bullet_arr[i].isValid && bullet_arr[i].getBoundingBox().contains(pos) && bullet_arr[i].getComponent('bullet').is_enemy != is_enemy) {
        return bullet_arr[i];
      }
    }
    return null;
  },
  collisionBulletAndEnemyTanks: function collisionBulletAndEnemyTanks(pos) {
    var enemy_tank_arr = cc.vv.Global.game.enemy_tank_arr;
    for (var i = 0; i < enemy_tank_arr.length; i++) {
      if (enemy_tank_arr[i] && enemy_tank_arr[i].node && enemy_tank_arr[i].node.isValid && enemy_tank_arr[i].node.getBoundingBox().contains(pos)) {
        return enemy_tank_arr[i];
      }
    }
    return null;
  },
  collisionBulletAndPlayerTanks: function collisionBulletAndPlayerTanks(pos) {
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.node.active && player.node.isValid && player.node.getBoundingBox().contains(pos)) {
      return player;
    }
    return null;
  },
  onDestroy: function onDestroy() {
    console.log('game map destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxnYW1lX21hcC5qcyJdLCJuYW1lcyI6WyJUYWdPZkRpcmVjdGlvbiIsImNjIiwiRW51bSIsInVwIiwicmlnaHQiLCJkb3duIiwibGVmdCIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxldmVsX2FyciIsIlRpbGVkTWFwQXNzZXQiLCJzdGFydCIsImluaXRNYXAiLCJ0aWxlZE1hcCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJUaWxlZE1hcCIsInRteEFzc2V0IiwidnYiLCJVc2VySW5mbyIsImxldmVsIiwiYmcxIiwiZ2V0TGF5ZXIiLCJiZzIiLCJiZzMiLCJvYmplY3RzIiwiZ2V0T2JqZWN0R3JvdXAiLCJhY3RpdmUiLCJib3JuQXJyYXkiLCJnZXRPYmplY3RzIiwiYm9ybjAiLCJ2MiIsImJvcm4xIiwiYm9ybjIiLCJib3JuMyIsImJvcm40IiwiYm9ybjUiLCJib3JuNiIsImJvcm43IiwiYm9ybjgiLCJib3JuOSIsImJvcm4xMCIsImJvcm4xMSIsImJvcm4xMiIsImJvcm4xMyIsImJvcm4xNCIsImNvbnNvbGUiLCJsb2ciLCJ4IiwieSIsInBsYXllcl9wb3MiLCJhZGQiLCJlbmVteV9wb3NfYXJyIiwicHJvcHNfcG9zX2FyciIsImhvbWVfcG9zIiwiaW5pdEhvbWVXYWxsIiwiYXJyIiwicHVzaCIsImluaXRQbGF5ZXIiLCJkYXRhIiwibGl2ZSIsIkdsb2JhbCIsImdhbWUiLCJpc19vdmVyIiwicGxheWVyIiwiaW5zdGFudGlhdGUiLCJwbGF5ZXJfdGFua19wcmVmYWIiLCJwb3NpdGlvbiIsImFkZENoaWxkIiwiaXNfc2hpZWxkIiwibW92ZVNwZWVkIiwiZmlyZVNwZWVkIiwidGFua19sZXZlbCIsImNoYW5nZVRhbmtWYWx1ZSIsImNhbGxiYWNrIiwic2hpZWxkIiwic2hpZWxkX3ByZWZhYiIsImluaXQiLCJpc19lbmVteSIsImFwcGVhciIsImFwcGVhcl9wcmVmYWIiLCJpbml0RW5lbXkiLCJlbmVteV9jb3VudCIsImVuZW15IiwiZW5lbXlfdGFua19wcmVmYWIiLCJlbmVteV9pbmRleCIsImluaXRQcm9wcyIsInBvcyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImxlbmd0aCIsInByb3BzIiwicHJvcHNfcHJlZmFiIiwiZGVzdHJveSIsImFkZFBvaW50IiwicG9pbnQiLCJwb2ludF9wcmVmYWIiLCJzY29yZSIsInJlcGFpckhvbWUiLCJpIiwiaG9tZV93YWxsX3Bvc19hcnIiLCJzZXRUaWxlR0lEQXQiLCJob21lX2dpZF9wb3NfYXJyMSIsImhvbWVfZ2lkX3Bvc19hcnIyIiwiZ2V0UG9zRnJvbVRpbGVkIiwiZ2V0VGlsZWRSb3VuZENvb3JkaW5hdGUiLCJjb3giLCJjb3kiLCJsYXllcnNpemUiLCJnZXRMYXllclNpemUiLCJhYSIsImdldFRpbGVTaXplIiwidGlsZXNpemUiLCJyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0VGlsZWRDb29yZGluYXRlIiwiZ2V0VGlsZWRSb3VuZElkRnJvbVBvcyIsImdldFRpbGVHSURBdCIsImdldFRpbGVkSWRGcm9tUG9zIiwiZ2lkIiwiY2hlY2tQb2ludCIsInRvUCIsInRpZCIsImlzR3Jhc3NsYW5kIiwiY29sbGlzaW9uVGFua3MiLCJlbmVteV90YW5rX2FyciIsImlzVmFsaWQiLCJnZXRCb3VuZGluZ0JveCIsImNvbnRhaW5zIiwiY29sbGlzaW9uQnVsbGV0IiwiYnVsbGV0X2FyciIsImNvbGxpc2lvbkJ1bGxldEFuZEVuZW15VGFua3MiLCJjb2xsaXNpb25CdWxsZXRBbmRQbGF5ZXJUYW5rcyIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsY0FBYyxHQUFHQyxFQUFFLENBQUNDLElBQUksQ0FBQztFQUN6QkMsRUFBRSxFQUFHLENBQUM7RUFDTkMsS0FBSyxFQUFHLENBQUM7RUFDVEMsSUFBSSxFQUFHLENBQUM7RUFD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QUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FBQ3pELEVBQUUsQ0FBQytCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkJ5QixHQUFHLENBQUNDLElBQUksQ0FB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LElBQUksQ0FBQ2tILE9BQU8sSUFBSUQsY0FBYyxDQUFDM0IsQ0FBQyxDQUFDLENBQUN0RixJQUFJLENBQUNtSCxjQUFjLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDM0MsR0FBRyxDQUFDLEVBQUM7UUFDdkksT0FBT3dDLGNBQWMsQ0FBQzNCLENBQUMsQ0FBQztNQUM1QjtJQUNKO0lBQ0EsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUVEa0MsNkJBQTZCLFdBQUFBLDhCQUFFL0MsR0FBRyxFQUFDO0lBQy9CLElBQUl2QixNQUFNLEdBQUdoRSxFQUFFLENBQUNrQixFQUFFLENBQUMyQyxNQUFNLENBQUNDLElBQUksQ0FBQ0UsTUFBTTtJQUNyQyxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ2xELElBQUksSUFBSWtELE1BQU0sQ0FBQ2xELElBQUksQ0FBQ2EsTUFBTSxJQUFJcUMsTUFBTSxDQUFDbEQsSUFBSSxDQUFDa0gsT0FBTyxJQUFJaEUsTUFBTSxDQUFDbEQsSUFBSSxDQUFDbUgsY0FBYyxFQUFFLENBQUNDLFFBQVEsQ0FBQzNDLEdBQUcsQ0FBQyxFQUFDO01BQ2pILE9BQU92QixNQUFNO0lBQ2pCO0lBQ0EsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUVEdUUsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUnpGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBQ25DO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxudmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG59KVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBiZzE6IGNjLlRpbGVkTGF5ZXIsXHJcbiAgICAgICAgLy8gYmcyOiBjYy5UaWxlZExheWVyLFxyXG4gICAgICAgIC8vIGJnMzogY2MuVGlsZWRMYXllcixcclxuICAgICAgICAvLyBvYmplY3RzOiBjYy5UaWxlZE9iamVjdEdyb3VwLFxyXG4gICAgICAgIGxldmVsX2FycjogW2NjLlRpbGVkTWFwQXNzZXRdXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy50aWxlZE1hcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApXHJcbiAgICAgICAgLy8gdGhpcy50aWxlZE1hcC50bXhBc3NldCA9IHRoaXMubGV2ZWxfYXJyWzRdXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYmcxID0gdGhpcy50aWxlZE1hcC5nZXRMYXllcignYmcxJylcclxuICAgICAgICAvLyB0aGlzLmJnMiA9IHRoaXMudGlsZWRNYXAuZ2V0TGF5ZXIoJ2JnMicpXHJcbiAgICAgICAgLy8gdGhpcy5iZzMgPSB0aGlzLnRpbGVkTWFwLmdldExheWVyKCdiZzMnKVxyXG4gICAgICAgIC8vIHRoaXMub2JqZWN0cyA9IHRoaXMudGlsZWRNYXAuZ2V0T2JqZWN0R3JvdXAoJ29iamVjdHMnKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmhvbWVfd2FsbF9wb3NfYXJyID0gdGhpcy5pbml0SG9tZVdhbGwoKVxyXG4gICAgICAgIC8vIHRoaXMuaG9tZV9naWRfcG9zX2FycjEgPSBbXVxyXG4gICAgICAgIC8vIHRoaXMuaG9tZV9naWRfcG9zX2FycjIgPSBbXVxyXG4gICAgICAgIC8vIGZvciAobGV0IGk9MDtpPHRoaXMuaG9tZV93YWxsX3Bvc19hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaG9tZV9naWRfcG9zX2FycjEucHVzaCh0aGlzLmJnMS5nZXRUaWxlR0lEQXQodGhpcy5ob21lX3dhbGxfcG9zX2FycltpXSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvciAobGV0IGk9MDtpPHRoaXMuaG9tZV93YWxsX3Bvc19hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaG9tZV9naWRfcG9zX2FycjIucHVzaCh0aGlzLmJnMi5nZXRUaWxlR0lEQXQodGhpcy5ob21lX3dhbGxfcG9zX2FycltpXSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0TWFwKCl7XHJcbiAgICAgICAgdGhpcy50aWxlZE1hcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApXHJcbiAgICAgICAgdGhpcy50aWxlZE1hcC50bXhBc3NldCA9IHRoaXMubGV2ZWxfYXJyW2NjLnZ2LlVzZXJJbmZvLmxldmVsLTFdXHJcblxyXG4gICAgICAgIHRoaXMuYmcxID0gdGhpcy50aWxlZE1hcC5nZXRMYXllcignYmcxJylcclxuICAgICAgICB0aGlzLmJnMiA9IHRoaXMudGlsZWRNYXAuZ2V0TGF5ZXIoJ2JnMicpXHJcbiAgICAgICAgdGhpcy5iZzMgPSB0aGlzLnRpbGVkTWFwLmdldExheWVyKCdiZzMnKVxyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMudGlsZWRNYXAuZ2V0T2JqZWN0R3JvdXAoJ29iamVjdHMnKVxyXG5cclxuICAgICAgICAvLyB0aGlzLmhvbWVfd2FsbF9wb3NfYXJyID0gdGhpcy5pbml0SG9tZVdhbGwoKVxyXG4gICAgICAgIC8vIHRoaXMuaG9tZV9naWRfcG9zX2FycjEgPSBbXVxyXG4gICAgICAgIC8vIHRoaXMuaG9tZV9naWRfcG9zX2FycjIgPSBbXVxyXG4gICAgICAgIC8vIGZvciAobGV0IGk9MDtpPHRoaXMuaG9tZV93YWxsX3Bvc19hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaG9tZV9naWRfcG9zX2FycjEucHVzaCh0aGlzLmJnMS5nZXRUaWxlR0lEQXQodGhpcy5ob21lX3dhbGxfcG9zX2FycltpXSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZvciAobGV0IGk9MDtpPHRoaXMuaG9tZV93YWxsX3Bvc19hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaG9tZV9naWRfcG9zX2FycjIucHVzaCh0aGlzLmJnMi5nZXRUaWxlR0lEQXQodGhpcy5ob21lX3dhbGxfcG9zX2FycltpXSkpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmJnMS5ub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJnMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5iZzMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICBsZXQgYm9ybkFycmF5ID0gdGhpcy5vYmplY3RzLmdldE9iamVjdHMoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvcm5BcnJheSlcclxuICAgICAgICBsZXQgYm9ybjAgPSBjYy52Mihib3JuQXJyYXlbMF1bXCJ4XCJdLCBib3JuQXJyYXlbMF1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjEgPSBjYy52Mihib3JuQXJyYXlbMV1bXCJ4XCJdLCBib3JuQXJyYXlbMV1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjIgPSBjYy52Mihib3JuQXJyYXlbMl1bXCJ4XCJdLCBib3JuQXJyYXlbMl1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjMgPSBjYy52Mihib3JuQXJyYXlbM11bXCJ4XCJdLCBib3JuQXJyYXlbM11bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjQgPSBjYy52Mihib3JuQXJyYXlbNF1bXCJ4XCJdLCBib3JuQXJyYXlbNF1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjUgPSBjYy52Mihib3JuQXJyYXlbNV1bXCJ4XCJdLCBib3JuQXJyYXlbNV1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjYgPSBjYy52Mihib3JuQXJyYXlbNl1bXCJ4XCJdLCBib3JuQXJyYXlbNl1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjcgPSBjYy52Mihib3JuQXJyYXlbN11bXCJ4XCJdLCBib3JuQXJyYXlbN11bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjggPSBjYy52Mihib3JuQXJyYXlbOF1bXCJ4XCJdLCBib3JuQXJyYXlbOF1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjkgPSBjYy52Mihib3JuQXJyYXlbOV1bXCJ4XCJdLCBib3JuQXJyYXlbOV1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjEwID0gY2MudjIoYm9ybkFycmF5WzEwXVtcInhcIl0sIGJvcm5BcnJheVsxMF1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjExID0gY2MudjIoYm9ybkFycmF5WzExXVtcInhcIl0sIGJvcm5BcnJheVsxMV1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjEyID0gY2MudjIoYm9ybkFycmF5WzEyXVtcInhcIl0sIGJvcm5BcnJheVsxMl1bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjEzID0gY2MudjIoYm9ybkFycmF5WzEzXVtcInhcIl0sIGJvcm5BcnJheVsxM11bXCJ5XCJdKTtcclxuICAgICAgICBsZXQgYm9ybjE0ID0gY2MudjIoYm9ybkFycmF5WzE0XVtcInhcIl0sIGJvcm5BcnJheVsxNF1bXCJ5XCJdKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9ybjAueCwgYm9ybjAueSlcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfcG9zID0gYm9ybjAuYWRkKGNjLnYyKDQyKjAuNS00LCAtNDIqMC41KzQpKVxyXG4gICAgICAgIHRoaXMuZW5lbXlfcG9zX2FyciA9IFtcclxuICAgICAgICAgICAgYm9ybjEuYWRkKGNjLnYyKDQyKjAuNSs0LCAtNDIqMC41LTQpKSxcclxuICAgICAgICAgICAgYm9ybjIuYWRkKGNjLnYyKDQyKjAuNS00LCAtNDIqMC41LTQpKSxcclxuICAgICAgICAgICAgYm9ybjMuYWRkKGNjLnYyKDQyKjAuNS00LCAtNDIqMC41LTQpKSxcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5wcm9wc19wb3NfYXJyID0gW1xyXG4gICAgICAgICAgICBib3JuNC5hZGQoY2MudjIoNDIqMC41KzQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuNS5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuNi5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuNy5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuOC5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuOS5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuMTAuYWRkKGNjLnYyKDQyKjAuNS00LCAtNDIqMC41LTQpKSxcclxuICAgICAgICAgICAgYm9ybjExLmFkZChjYy52Mig0MiowLjUtNCwgLTQyKjAuNS00KSksXHJcbiAgICAgICAgICAgIGJvcm4xMi5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUtNCkpLFxyXG4gICAgICAgICAgICBib3JuMTMuYWRkKGNjLnYyKDQyKjAuNS00LCAtNDIqMC41LTQpKSxcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5ob21lX3BvcyA9IGJvcm4xNC5hZGQoY2MudjIoNDIqMC41LTQsIC00MiowLjUrNCkpXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRIb21lV2FsbCAoKXtcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICBhcnIucHVzaChjYy52MigyMiwgNTEpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIzLCA1MSkpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjgsIDUxKSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyOSwgNTEpKVxyXG5cclxuICAgICAgICBhcnIucHVzaChjYy52MigyMiwgNTApKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIzLCA1MCkpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjgsIDUwKSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyOSwgNTApKVxyXG5cclxuICAgICAgICBhcnIucHVzaChjYy52MigyMiwgNDkpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIzLCA0OSkpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjgsIDQ5KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyOSwgNDkpKVxyXG5cclxuICAgICAgICBhcnIucHVzaChjYy52MigyMiwgNDgpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIzLCA0OCkpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjgsIDQ4KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyOSwgNDgpKVxyXG5cclxuICAgICAgICBhcnIucHVzaChjYy52MigyMiwgNDcpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIzLCA0NykpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjQsIDQ3KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyNSwgNDcpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDI2LCA0NykpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjcsIDQ3KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyOCwgNDcpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDI5LCA0NykpXHJcblxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDIyLCA0NikpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjMsIDQ2KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyNCwgNDYpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDI1LCA0NikpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjYsIDQ2KSlcclxuICAgICAgICBhcnIucHVzaChjYy52MigyNywgNDYpKVxyXG4gICAgICAgIGFyci5wdXNoKGNjLnYyKDI4LCA0NikpXHJcbiAgICAgICAgYXJyLnB1c2goY2MudjIoMjksIDQ2KSlcclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRQbGF5ZXIoZGF0YSl7XHJcbiAgICAgICAgaWYgKGNjLnZ2LlVzZXJJbmZvLmxpdmUgPD0gMCkge1xyXG4gICAgICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBsYXllciA9IGNjLmluc3RhbnRpYXRlKGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllcl90YW5rX3ByZWZhYilcclxuICAgICAgICBwbGF5ZXIucG9zaXRpb24gPSB0aGlzLnBsYXllcl9wb3NcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGxheWVyLCAtMSlcclxuICAgICAgICBwbGF5ZXIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBwbGF5ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXJfdGFuaycpLmlzX3NoaWVsZCA9IHRydWVcclxuICAgICAgICBpZiAoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm1vdmVTcGVlZCl7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXJfdGFuaycpLm1vdmVTcGVlZCA9IGRhdGEubW92ZVNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuZmlyZVNwZWVkKXtcclxuICAgICAgICAgICAgICAgIHBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcl90YW5rJykuZmlyZVNwZWVkID0gZGF0YS5maXJlU3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50YW5rX2xldmVsKXtcclxuICAgICAgICAgICAgICAgIHBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcl90YW5rJykudGFua19sZXZlbCA9IGRhdGEudGFua19sZXZlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXllci5nZXRDb21wb25lbnQoJ3BsYXllcl90YW5rJykuY2hhbmdlVGFua1ZhbHVlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gKCk9PntcclxuICAgICAgICAgICAgcGxheWVyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbGV0IHNoaWVsZCA9IGNjLmluc3RhbnRpYXRlKGNjLnZ2Lkdsb2JhbC5nYW1lLnNoaWVsZF9wcmVmYWIpXHJcbiAgICAgICAgICAgIHBsYXllci5hZGRDaGlsZChzaGllbGQpXHJcbiAgICAgICAgICAgIHNoaWVsZC5nZXRDb21wb25lbnQoJ3NoaWVsZCcpLmluaXQocGxheWVyLmdldENvbXBvbmVudCgncGxheWVyX3RhbmsnKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlzX2VuZW15IDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrIDogY2FsbGJhY2tcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcHBlYXIgPSBjYy5pbnN0YW50aWF0ZShjYy52di5HbG9iYWwuZ2FtZS5hcHBlYXJfcHJlZmFiKVxyXG4gICAgICAgIGFwcGVhci5wb3NpdGlvbiA9IHRoaXMucGxheWVyX3Bvc1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChhcHBlYXIpXHJcbiAgICAgICAgYXBwZWFyLmdldENvbXBvbmVudCgnYXBwZWFyJykuaW5pdChkYXRhKVxyXG5cclxuICAgICAgICByZXR1cm4gcGxheWVyLmdldENvbXBvbmVudCgncGxheWVyX3RhbmsnKVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RW5lbXkoKXtcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmVuZW15X2NvdW50IDw9IDApIHJldHVyblxyXG4gICAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKGNjLnZ2Lkdsb2JhbC5nYW1lLmVuZW15X3RhbmtfcHJlZmFiKVxyXG4gICAgICAgIGVuZW15LnBvc2l0aW9uID0gdGhpcy5lbmVteV9wb3NfYXJyW2NjLnZ2Lkdsb2JhbC5nYW1lLmVuZW15X2luZGV4XVxyXG4gICAgICAgIGVuZW15LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGVuZW15LC0xKVxyXG4gICAgICAgIGVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfdGFuaycpLmlzX3NoaWVsZCA9IHRydWVcclxuICAgICAgICBjYy52di5HbG9iYWwuZ2FtZS5lbmVteV9pbmRleCArK1xyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5lbmVteV9jb3VudCAtLVxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5lbmVteV9pbmRleCA+PSAzKXtcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUuZW5lbXlfaW5kZXggPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2FsbGJhY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICBlbmVteS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIGVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfdGFuaycpLmlzX3NoaWVsZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgaXNfZW5lbXkgOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjayA6IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXBwZWFyID0gY2MuaW5zdGFudGlhdGUoY2MudnYuR2xvYmFsLmdhbWUuYXBwZWFyX3ByZWZhYilcclxuICAgICAgICBhcHBlYXIucG9zaXRpb24gPSBlbmVteS5wb3NpdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChhcHBlYXIpXHJcbiAgICAgICAgYXBwZWFyLmdldENvbXBvbmVudCgnYXBwZWFyJykuaW5pdChkYXRhKVxyXG5cclxuICAgICAgICByZXR1cm4gZW5lbXkuZ2V0Q29tcG9uZW50KCdlbmVteV90YW5rJylcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdFByb3BzKCl7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucHJvcHNfcG9zX2FycltwYXJzZUludChNYXRoLnJhbmRvbSgpICogdGhpcy5wcm9wc19wb3NfYXJyLmxlbmd0aCldXHJcbiAgICAgICAgbGV0IHByb3BzID0gY2MuaW5zdGFudGlhdGUoY2MudnYuR2xvYmFsLmdhbWUucHJvcHNfcHJlZmFiKVxyXG4gICAgICAgIHByb3BzLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByb3BzKVxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5wcm9wcyAmJiBjYy52di5HbG9iYWwuZ2FtZS5wcm9wcy5ub2RlICYmIGNjLnZ2Lkdsb2JhbC5nYW1lLnByb3BzLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucHJvcHMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmdhbWUucHJvcHMgPSBwcm9wcy5nZXRDb21wb25lbnQoJ3Byb3BzJykgXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFBvaW50IChkYXRhKXtcclxuICAgICAgICBsZXQgcG9pbnQgPSBjYy5pbnN0YW50aWF0ZShjYy52di5HbG9iYWwuZ2FtZS5wb2ludF9wcmVmYWIpXHJcbiAgICAgICAgcG9pbnQucG9zaXRpb24gPSBkYXRhLnBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBvaW50KVxyXG4gICAgICAgIGxldCBzY29yZSA9IDBcclxuICAgICAgICBpZiAoZGF0YS5sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgc2NvcmUgPSAxMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgc2NvcmUgPSAyMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5sZXZlbCA9PSAzKXtcclxuICAgICAgICAgICAgc2NvcmUgPSAzMDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5sZXZlbCA9PSA0KXtcclxuICAgICAgICAgICAgc2NvcmUgPSA0MDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5sZXZlbCA9PSA1KXtcclxuICAgICAgICAgICAgc2NvcmUgPSA1MDBcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9pbnQuZ2V0Q29tcG9uZW50KCdwb2ludCcpLmluaXQoc2NvcmUpXHJcbiAgICB9LFxyXG5cclxuICAgIHJlcGFpckhvbWUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5L+u5aSNaG9tZScpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dGhpcy5ob21lX3dhbGxfcG9zX2Fyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5iZzEuc2V0VGlsZUdJREF0KHRoaXMuaG9tZV9naWRfcG9zX2FycjFbaV0sIHRoaXMuaG9tZV93YWxsX3Bvc19hcnJbaV0ueCwgdGhpcy5ob21lX3dhbGxfcG9zX2FycltpXS55LCB0aGlzLmhvbWVfZ2lkX3Bvc19hcnIxW2ldKVxyXG4gICAgICAgICAgICB0aGlzLmJnMi5zZXRUaWxlR0lEQXQodGhpcy5ob21lX2dpZF9wb3NfYXJyMltpXSwgdGhpcy5ob21lX3dhbGxfcG9zX2FycltpXS54LCB0aGlzLmhvbWVfd2FsbF9wb3NfYXJyW2ldLnksIHRoaXMuaG9tZV9naWRfcG9zX2FycjJbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRQb3NGcm9tVGlsZWQocG9zKXtcclxuICAgICAgICBpZiAocG9zLnggPCAwIHx8IHBvcy55IDwgMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigwLCAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeCA9IHBvcy54KjE0XHJcbiAgICAgICAgbGV0IHkgPSAoNTItcG9zLnkpKjE0XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpXHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRpbGVkUm91bmRDb29yZGluYXRlOmZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgY294ID0gLTEsIGNveSA9IC0xO1xyXG4gICAgICAgIHZhciBsYXllcnNpemUgPSB0aGlzLmJnMS5nZXRMYXllclNpemUoKTtcclxuICAgICAgICBsZXQgYWEgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKS5nZXRUaWxlU2l6ZSgpXHJcbiAgICAgICAgLy8gdmFyIHRpbGVzaXplID0gdGhpcy5tYXAxLmdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgdmFyIHRpbGVzaXplID0gdGhpcy50aWxlZE1hcC5nZXRUaWxlU2l6ZSgpXHJcbiAgICAgICAgY294ID0gTWF0aC5yb3VuZCgocG9zLnggLyotIHRoaXMubGVmdEJvdW5kYXJ5Ki8pIC8gKHRpbGVzaXplLndpZHRoKSk7XHJcbiAgICAgICAgY295ID0gTWF0aC5yb3VuZCgobGF5ZXJzaXplLmhlaWdodCAtIHBvcy55IC8gKHRpbGVzaXplLmhlaWdodCkpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3gsIGNveSwgMTExMTExMTEpXHJcbiAgICAgICAgaWYgKGNveCA+PSAwICYmIGNveCA8IGxheWVyc2l6ZS53aWR0aCAmJiBjb3kgPj0gMCAmJiBjb3kgPCBsYXllcnNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52Mihjb3gsIGNveSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKC0xLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUaWxlZENvb3JkaW5hdGU6ZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBjb3ggPSAtMSwgY295ID0gLTE7XHJcbiAgICAgICAgdmFyIGxheWVyc2l6ZSA9IHRoaXMuYmcxLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGxldCBhYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApLmdldFRpbGVTaXplKClcclxuICAgICAgICAvLyB2YXIgdGlsZXNpemUgPSB0aGlzLm1hcDEuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICB2YXIgdGlsZXNpemUgPSB0aGlzLnRpbGVkTWFwLmdldFRpbGVTaXplKClcclxuICAgICAgICBjb3ggPSBwYXJzZUludCgocG9zLnggLyotIHRoaXMubGVmdEJvdW5kYXJ5Ki8pIC8gKHRpbGVzaXplLndpZHRoKSk7XHJcbiAgICAgICAgY295ID0gcGFyc2VJbnQoKGxheWVyc2l6ZS5oZWlnaHQgLSBwb3MueSAvICh0aWxlc2l6ZS5oZWlnaHQpKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY294LCBjb3ksIDExMTExMTExKVxyXG4gICAgICAgIGlmIChjb3ggPj0gMCAmJiBjb3ggPCBsYXllcnNpemUud2lkdGggJiYgY295ID49IDAgJiYgY295IDwgbGF5ZXJzaXplLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoY294LCBjb3kpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy52MigtMSwgLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VGlsZWRSb3VuZElkRnJvbVBvczpmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZShwb3MpO1xyXG4gICAgICAgIGlmIChwb2ludC54IDwgMCB8fCBwb2ludC55IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJnMS5nZXRUaWxlR0lEQXQocG9pbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUaWxlZElkRnJvbVBvczpmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5nZXRUaWxlZENvb3JkaW5hdGUocG9zKTtcclxuICAgICAgICBpZiAocG9pbnQueCA8IDAgfHwgcG9pbnQueSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5iZzIubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBsZXQgZ2lkID0gdGhpcy5iZzIuZ2V0VGlsZUdJREF0KHBvaW50KTtcclxuICAgICAgICAgICAgaWYgKGdpZCA+IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJnMS5nZXRUaWxlR0lEQXQocG9pbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja1BvaW50OmZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgdG9QID0gcG9zO1xyXG4gICAgICAgIHZhciB0aWQgPSB0aGlzLmdldFRpbGVkSWRGcm9tUG9zKHBvcyk7XHJcbiAgICAgICAgLy8g56m6XHJcbiAgICAgICAgaWYgKHRpZCA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiNieWcsFxyXG4gICAgICAgIGVsc2UgaWYgKGNjLnZ2Lkdsb2JhbC5pc0dyYXNzbGFuZCh0aWQpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbGxpc2lvblRhbmtzIChwb3MpIHtcclxuICAgICAgICBsZXQgZW5lbXlfdGFua19hcnIgPSBjYy52di5HbG9iYWwuZ2FtZS5lbmVteV90YW5rX2FyclxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpPGVuZW15X3RhbmtfYXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlfdGFua19hcnJbaV0gJiYgZW5lbXlfdGFua19hcnJbaV0ubm9kZSAmJiBlbmVteV90YW5rX2FycltpXS5ub2RlLmlzVmFsaWRcclxuICAgICAgICAgICAgICAgICAmJiBlbmVteV90YW5rX2FycltpXS5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJcclxuICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5ub2RlICYmIHBsYXllci5pc1ZhbGlkICYmIHBsYXllci5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgY29sbGlzaW9uQnVsbGV0KHBvcywgaXNfZW5lbXkpe1xyXG4gICAgICAgIGxldCBidWxsZXRfYXJyID0gY2MudnYuR2xvYmFsLmdhbWUuYnVsbGV0X2FyclxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpPGJ1bGxldF9hcnIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmIChidWxsZXRfYXJyW2ldLmlzVmFsaWQgJiYgYnVsbGV0X2FycltpXS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKHBvcylcclxuICAgICAgICAgICAgICYmIGJ1bGxldF9hcnJbaV0uZ2V0Q29tcG9uZW50KCdidWxsZXQnKS5pc19lbmVteSAhPSBpc19lbmVteSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVsbGV0X2FycltpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbGxpc2lvbkJ1bGxldEFuZEVuZW15VGFua3MgKHBvcyl7XHJcbiAgICAgICAgbGV0IGVuZW15X3RhbmtfYXJyID0gY2MudnYuR2xvYmFsLmdhbWUuZW5lbXlfdGFua19hcnJcclxuICAgICAgICBmb3IgKGxldCBpPTA7aTxlbmVteV90YW5rX2Fyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYgKGVuZW15X3RhbmtfYXJyW2ldICYmIGVuZW15X3RhbmtfYXJyW2ldLm5vZGUgJiYgZW5lbXlfdGFua19hcnJbaV0ubm9kZS5pc1ZhbGlkICYmIGVuZW15X3RhbmtfYXJyW2ldLm5vZGUuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyhwb3MpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmVteV90YW5rX2FycltpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbGxpc2lvbkJ1bGxldEFuZFBsYXllclRhbmtzIChwb3Mpe1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJcclxuICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5ub2RlICYmIHBsYXllci5ub2RlLmFjdGl2ZSAmJiBwbGF5ZXIubm9kZS5pc1ZhbGlkICYmIHBsYXllci5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMocG9zKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnYW1lIG1hcCBkZXN0cm95JylcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxwbGF5ZXJfdGFuay5qcyJdLCJuYW1lcyI6WyJUYW5rIiwicmVxdWlyZSIsIlRhZ09mRGlyZWN0aW9uIiwiY2MiLCJFbnVtIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidGFua18xIiwiU3ByaXRlRnJhbWUiLCJ0YW5rXzIiLCJ0YW5rXzMiLCJ0YW5rXzQiLCJvbkxvYWQiLCJtYXAiLCJ2diIsIkdsb2JhbCIsImdhbWUiLCJnZXRDb21wb25lbnQiLCJfc3VwZXIiLCJVc2VySW5mbyIsImxpdmUiLCJpc19lbmVteSIsIm1vdmVTcGVlZCIsImZpcmVTcGVlZCIsInRhbmtfbGV2ZWwiLCJtb3ZlVXAiLCJpc19wYXVzZSIsImlzX292ZXIiLCJkaXJlY3Rpb24iLCJub2RlIiwiYW5nbGUiLCJhIiwiZ2V0VGlsZWRDb29yZGluYXRlIiwicG9zaXRpb24iLCJiIiwieCIsInBvcyIsImdldFBvc0Zyb21UaWxlZCIsInkiLCJtb3ZlRG93biIsImdldFRpbGVkUm91bmRDb29yZGluYXRlIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJvbkZpcmUiLCJwbGF5ZXIiLCJhY3RpdmUiLCJvbkRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUUxQixJQUFJQyxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUc7QUFDWCxDQUFDLENBQUM7QUFFRkwsRUFBRSxDQUFDTSxLQUFLLENBQUM7RUFDTCxXQUFTVCxJQUFJO0VBRWJVLFVBQVUsRUFBRTtJQUNSQyxNQUFNLEVBQUcsQ0FBQ1IsRUFBRSxDQUFDUyxXQUFXLENBQUM7SUFDekJDLE1BQU0sRUFBRyxDQUFDVixFQUFFLENBQUNTLFdBQVcsQ0FBQztJQUN6QkUsTUFBTSxFQUFHLENBQUNYLEVBQUUsQ0FBQ1MsV0FBVyxDQUFDO0lBQ3pCRyxNQUFNLEVBQUcsQ0FBQ1osRUFBRSxDQUFDUyxXQUFXO0VBQzVCLENBQUM7RUFFRDtFQUVBO0VBRUFJLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ04sSUFBSSxDQUFDQyxHQUFHLEdBQUdkLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ3pELElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ2JuQixFQUFFLENBQUNlLEVBQUUsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFJLEVBQUc7SUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUk7SUFDckIsSUFBSSxDQUFDQyxVQUFVLEdBQUcsQ0FBQztFQUN2QixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBRUw7SUFDQSxJQUFJMUIsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxRQUFRLEVBQUU7SUFDaEMsSUFBSTNCLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ1csT0FBTyxFQUFFO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUNkLEdBQUcsRUFBRTtJQUNmLElBQUllLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNyQztJQUNBLElBQUlDLENBQUMsR0FBRyxJQUFJLENBQUNsQixHQUFHLENBQUNtQixrQkFBa0IsQ0FBQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksUUFBUSxDQUFDO0lBQ3ZELElBQUlDLENBQUMsR0FBRyxJQUFJLENBQUNMLElBQUksQ0FBQ0ksUUFBUTtJQUMxQixJQUFJTCxTQUFTLElBQUk5QixjQUFjLENBQUNHLEVBQUUsRUFBQyxDQUNuQyxDQUFDLE1BQ0ksSUFBSTJCLFNBQVMsSUFBSTlCLGNBQWMsQ0FBQ00sSUFBSSxFQUFDO01BQ3RDLElBQUkrQixDQUFDLEdBQUdKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUM7TUFDYixJQUFJQSxDQUFDLElBQUUsQ0FBQyxFQUFDO1FBQ0xKLENBQUMsQ0FBQ0ksQ0FBQyxFQUFFO01BQ1Q7TUFDQSxJQUFJQyxHQUFHLEdBQUcsSUFBSSxDQUFDdkIsR0FBRyxDQUFDd0IsZUFBZSxDQUFDTixDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDRixJQUFJLENBQUNJLFFBQVEsR0FBR0csR0FBRztJQUU1QixDQUFDLE1BQ0ksSUFBSVIsU0FBUyxJQUFJOUIsY0FBYyxDQUFDSyxJQUFJLEVBQUM7TUFDdEMsSUFBSW1DLENBQUMsR0FBR1AsQ0FBQyxDQUFDTyxDQUFDLEdBQUMsQ0FBQztNQUNiLElBQUlBLENBQUMsSUFBRSxDQUFDLEVBQUM7UUFDTFAsQ0FBQyxDQUFDTyxDQUFDLEVBQUU7TUFDVDtNQUNBLElBQUlGLElBQUcsR0FBRyxJQUFJLENBQUN2QixHQUFHLENBQUN3QixlQUFlLENBQUNOLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUNGLElBQUksQ0FBQ0ksUUFBUSxHQUFHRyxJQUFHO0lBQzVCLENBQUMsTUFDSSxJQUFJUixTQUFTLElBQUk5QixjQUFjLENBQUNJLEtBQUssRUFBQztNQUN2QyxJQUFJaUMsRUFBQyxHQUFHSixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsRUFBQyxJQUFFLENBQUMsRUFBQztRQUNMSixDQUFDLENBQUNJLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUMsS0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEtBQUc7SUFFNUI7SUFDQSxJQUFJLENBQUNsQixNQUFNLEVBQUU7RUFDakIsQ0FBQztFQUVEcUIsUUFBUSxXQUFBQSxTQUFBLEVBQUc7SUFDUCxJQUFJeEMsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxRQUFRLEVBQUU7SUFDaEMsSUFBSTNCLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ1csT0FBTyxFQUFFO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUNkLEdBQUcsRUFBRTtJQUNmLElBQUllLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNyQyxJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsR0FBRyxDQUFDMkIsdUJBQXVCLENBQUMsSUFBSSxDQUFDWCxJQUFJLENBQUNJLFFBQVEsQ0FBQztJQUU1RCxJQUFJTCxTQUFTLElBQUk5QixjQUFjLENBQUNHLEVBQUUsRUFBQztNQUMvQixJQUFJcUMsQ0FBQyxHQUFHUCxDQUFDLENBQUNPLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsQ0FBQyxJQUFFLENBQUMsRUFBQztRQUNMUCxDQUFDLENBQUNPLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUYsR0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEdBQUc7SUFDNUIsQ0FBQyxNQUNJLElBQUlSLFNBQVMsSUFBSTlCLGNBQWMsQ0FBQ00sSUFBSSxFQUFDO01BQ3RDLElBQUkrQixDQUFDLEdBQUdKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUM7TUFDYixJQUFJQSxDQUFDLElBQUUsQ0FBQyxFQUFDO1FBQ0xKLENBQUMsQ0FBQ0ksQ0FBQyxFQUFFO01BQ1Q7TUFDQSxJQUFJQyxLQUFHLEdBQUcsSUFBSSxDQUFDdkIsR0FBRyxDQUFDd0IsZUFBZSxDQUFDTixDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDRixJQUFJLENBQUNJLFFBQVEsR0FBR0csS0FBRztJQUM1QixDQUFDLE1BQ0ksSUFBSVIsU0FBUyxJQUFJOUIsY0FBYyxDQUFDSyxJQUFJLEVBQUMsQ0FDMUMsQ0FBQyxNQUNJLElBQUl5QixTQUFTLElBQUk5QixjQUFjLENBQUNJLEtBQUssRUFBQztNQUN2QyxJQUFJaUMsR0FBQyxHQUFHSixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsR0FBQyxJQUFFLENBQUMsRUFBQztRQUNMSixDQUFDLENBQUNJLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUMsS0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEtBQUc7SUFDNUI7SUFDQSxJQUFJLENBQUNsQixNQUFNLEVBQUU7RUFDakIsQ0FBQztFQUVEdUIsUUFBUSxXQUFBQSxTQUFBLEVBQUc7SUFDUCxJQUFJMUMsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxRQUFRLEVBQUU7SUFDaEMsSUFBSTNCLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ1csT0FBTyxFQUFFO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUNkLEdBQUcsRUFBRTtJQUNmLElBQUllLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNyQyxJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsR0FBRyxDQUFDMkIsdUJBQXVCLENBQUMsSUFBSSxDQUFDWCxJQUFJLENBQUNJLFFBQVEsQ0FBQztJQUM1RCxJQUFJTCxTQUFTLElBQUk5QixjQUFjLENBQUNHLEVBQUUsRUFBQztNQUMvQixJQUFJcUMsQ0FBQyxHQUFHUCxDQUFDLENBQUNPLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsQ0FBQyxJQUFFLENBQUMsRUFBQztRQUNMUCxDQUFDLENBQUNPLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUYsR0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEdBQUc7SUFDNUIsQ0FBQyxNQUNJLElBQUlSLFNBQVMsSUFBSTlCLGNBQWMsQ0FBQ00sSUFBSSxFQUFDLENBQzFDLENBQUMsTUFDSSxJQUFJd0IsU0FBUyxJQUFJOUIsY0FBYyxDQUFDSyxJQUFJLEVBQUM7TUFDdEMsSUFBSW1DLEVBQUMsR0FBR1AsQ0FBQyxDQUFDTyxDQUFDLEdBQUMsQ0FBQztNQUNiLElBQUlBLEVBQUMsSUFBRSxDQUFDLEVBQUM7UUFDTFAsQ0FBQyxDQUFDTyxDQUFDLEVBQUU7TUFDVDtNQUNBLElBQUlGLEtBQUcsR0FBRyxJQUFJLENBQUN2QixHQUFHLENBQUN3QixlQUFlLENBQUNOLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUNGLElBQUksQ0FBQ0ksUUFBUSxHQUFHRyxLQUFHO0lBQzVCLENBQUMsTUFDSSxJQUFJUixTQUFTLElBQUk5QixjQUFjLENBQUNJLEtBQUssRUFBQztNQUN2QyxJQUFJaUMsQ0FBQyxHQUFHSixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsQ0FBQyxJQUFFLENBQUMsRUFBQztRQUNMSixDQUFDLENBQUNJLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUMsS0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEtBQUc7SUFDNUI7SUFDQSxJQUFJLENBQUNsQixNQUFNLEVBQUU7RUFDakIsQ0FBQztFQUVEd0IsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUixJQUFJM0MsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxRQUFRLEVBQUU7SUFDaEMsSUFBSTNCLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ1csT0FBTyxFQUFFO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUNkLEdBQUcsRUFBRTtJQUNmLElBQUllLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNyQyxJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsR0FBRyxDQUFDMkIsdUJBQXVCLENBQUMsSUFBSSxDQUFDWCxJQUFJLENBQUNJLFFBQVEsQ0FBQztJQUU1RCxJQUFJTCxTQUFTLElBQUk5QixjQUFjLENBQUNHLEVBQUUsRUFBQztNQUMvQixJQUFJcUMsQ0FBQyxHQUFHUCxDQUFDLENBQUNPLENBQUMsR0FBQyxDQUFDO01BQ2IsSUFBSUEsQ0FBQyxJQUFFLENBQUMsRUFBQztRQUNMUCxDQUFDLENBQUNPLENBQUMsRUFBRTtNQUNUO01BQ0EsSUFBSUYsR0FBRyxHQUFHLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxRQUFRLEdBQUdHLEdBQUc7SUFDNUIsQ0FBQyxNQUNJLElBQUlSLFNBQVMsSUFBSTlCLGNBQWMsQ0FBQ00sSUFBSSxFQUFDO01BQ3RDLElBQUkrQixDQUFDLEdBQUdKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUM7TUFDYixJQUFJQSxDQUFDLElBQUUsQ0FBQyxFQUFDO1FBQ0xKLENBQUMsQ0FBQ0ksQ0FBQyxFQUFFO01BQ1Q7TUFDQSxJQUFJQyxLQUFHLEdBQUcsSUFBSSxDQUFDdkIsR0FBRyxDQUFDd0IsZUFBZSxDQUFDTixDQUFDLENBQUM7TUFDckMsSUFBSSxDQUFDRixJQUFJLENBQUNJLFFBQVEsR0FBR0csS0FBRztJQUM1QixDQUFDLE1BQ0ksSUFBSVIsU0FBUyxJQUFJOUIsY0FBYyxDQUFDSyxJQUFJLEVBQUM7TUFDdEMsSUFBSW1DLEdBQUMsR0FBR1AsQ0FBQyxDQUFDTyxDQUFDLEdBQUMsQ0FBQztNQUNiLElBQUlBLEdBQUMsSUFBRSxDQUFDLEVBQUM7UUFDTFAsQ0FBQyxDQUFDTyxDQUFDLEVBQUU7TUFDVDtNQUNBLElBQUlGLEtBQUcsR0FBRyxJQUFJLENBQUN2QixHQUFHLENBQUN3QixlQUFlLENBQUNOLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUNGLElBQUksQ0FBQ0ksUUFBUSxHQUFHRyxLQUFHO0lBQzVCLENBQUMsTUFDSSxJQUFJUixTQUFTLElBQUk5QixjQUFjLENBQUNJLEtBQUssRUFBQyxDQUUzQztJQUNBLElBQUksQ0FBQ2dCLE1BQU0sRUFBRTtFQUNqQixDQUFDO0VBRUR5QixNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUk1QyxFQUFFLENBQUNlLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNVLFFBQVEsRUFBRTtJQUNoQyxJQUFJM0IsRUFBRSxDQUFDZSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVyxPQUFPLEVBQUU7SUFDL0IsSUFBSWlCLE1BQU0sR0FBRzdDLEVBQUUsQ0FBQ2UsRUFBRSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQzRCLE1BQU07SUFDckMsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNmLElBQUksSUFBSWUsTUFBTSxDQUFDZixJQUFJLENBQUNnQixNQUFNLEVBQUM7TUFDNUMsSUFBSSxDQUFDM0IsTUFBTSxFQUFFO0lBQ2pCO0VBQ0osQ0FBQztFQUVENEIsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7RUFDdEM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmxldCBUYW5rID0gcmVxdWlyZSgnVGFuaycpXHJcblxyXG52YXIgVGFnT2ZEaXJlY3Rpb24gPSBjYy5FbnVtKHtcclxuICAgIHVwIDogMCxcclxuICAgIHJpZ2h0IDogMSxcclxuICAgIGRvd24gOiAyLFxyXG4gICAgbGVmdCA6IDMsXHJcbn0pXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBUYW5rLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0YW5rXzEgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHRhbmtfMiA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgdGFua18zIDogW2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICB0YW5rXzQgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGNjLnZ2Lkdsb2JhbC5nYW1lLm1hcC5nZXRDb21wb25lbnQoJ2dhbWVfbWFwJylcclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICAgICAgY2MudnYuVXNlckluZm8ubGl2ZSAtLVxyXG4gICAgICAgIHRoaXMuaXNfZW5lbXkgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gMi42MjVcclxuICAgICAgICB0aGlzLmZpcmVTcGVlZCA9IDUuMjVcclxuICAgICAgICB0aGlzLnRhbmtfbGV2ZWwgPSAxXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcCAoKXtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQsMTExMSlcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMubWFwKSByZXR1cm5cclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gLXRoaXMubm9kZS5hbmdsZSAvIDkwO1xyXG4gICAgICAgIC8vIHZhciBhID0gdGhpcy5tYXAuZ2V0VGlsZWRSb3VuZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKSAgICBcclxuICAgICAgICBsZXQgYiA9IHRoaXMubm9kZS5wb3NpdGlvblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgICAgICAgbGV0IHggPSBhLnglMlxyXG4gICAgICAgICAgICBpZiAoeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLngrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVEb3duICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24uZG93bil7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVMZWZ0ICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGlmICghdGhpcy5tYXApIHJldHVyblxyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAtdGhpcy5ub2RlLmFuZ2xlIC8gOTA7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1hcC5nZXRUaWxlZFJvdW5kQ29vcmRpbmF0ZSh0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYS55JTJcclxuICAgICAgICAgICAgaWYgKHkhPTApe1xyXG4gICAgICAgICAgICAgICAgYS55KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgICAgICAgbGV0IHkgPSBhLnklMlxyXG4gICAgICAgICAgICBpZiAoeSE9MCl7XHJcbiAgICAgICAgICAgICAgICBhLnktLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1hcC5nZXRQb3NGcm9tVGlsZWQoYSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYS54JTJcclxuICAgICAgICAgICAgaWYgKHghPTApe1xyXG4gICAgICAgICAgICAgICAgYS54LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5tYXAuZ2V0UG9zRnJvbVRpbGVkKGEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvc1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdXBlcigpXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVSaWdodCAoKXtcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLmdhbWUuaXNfcGF1c2UpIHJldHVyblxyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19vdmVyKSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMubWFwKSByZXR1cm5cclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gLXRoaXMubm9kZS5hbmdsZSAvIDkwO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5tYXAuZ2V0VGlsZWRSb3VuZENvb3JkaW5hdGUodGhpcy5ub2RlLnBvc2l0aW9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24udXApe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueSsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICAgICAgICBsZXQgeCA9IGEueCUyXHJcbiAgICAgICAgICAgIGlmICh4IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICAgICAgICBsZXQgeSA9IGEueSUyXHJcbiAgICAgICAgICAgIGlmICh5IT0wKXtcclxuICAgICAgICAgICAgICAgIGEueS0tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwLmdldFBvc0Zyb21UaWxlZChhKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3NcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09IFRhZ09mRGlyZWN0aW9uLnJpZ2h0KXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgIH0sXHJcblxyXG4gICAgb25GaXJlICgpe1xyXG4gICAgICAgIGlmIChjYy52di5HbG9iYWwuZ2FtZS5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5nYW1lLmlzX292ZXIpIHJldHVyblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJcclxuICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5ub2RlICYmIHBsYXllci5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIHRhbmsgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/props.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fb4co/I59Eq7Vib4W5srMk', 'props');
// Script/game/props.js

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
    props_arr: [cc.SpriteFrame],
    icon: cc.Sprite
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;
    cc.vv.Audio.playPowerupAppear();
    this.type = 0;
    var random = cc.vv.Tools.random(1, 7);
    // random = 2
    if (random == 1) {
      this.type = cc.vv.Enum.Props.zhalei;
    } else if (random == 2) {
      this.type = cc.vv.Enum.Props.maozi;
    } else if (random == 3) {
      this.type = cc.vv.Enum.Props.tieqiao;
    } else if (random == 4) {
      this.type = cc.vv.Enum.Props.star;
    } else if (random == 5) {
      this.type = cc.vv.Enum.Props.tank;
    } else if (random == 6) {
      this.type = cc.vv.Enum.Props.dinglei;
    }
    this.icon.spriteFrame = this.props_arr[this.type - 1];
    this.schedule(function () {
      _this.icon.node.active = !_this.icon.node.active;
    }, 0.3);
  },
  update: function update(dr) {
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.node.active) {
      var a = this.node.getBoundingBox().intersects(player.node.getBoundingBox());
      if (a) {
        cc.vv.Audio.playPowerupPick();
        if (this.type == cc.vv.Enum.Props.zhalei) {
          this.zhalei();
        } else if (this.type == cc.vv.Enum.Props.maozi) {
          this.maozi();
        } else if (this.type == cc.vv.Enum.Props.tieqiao) {
          this.tieqiao();
        } else if (this.type == cc.vv.Enum.Props.star) {
          this.star();
        } else if (this.type == cc.vv.Enum.Props.tank) {
          this.tank();
        } else if (this.type == cc.vv.Enum.Props.dinglei) {
          this.dinglei();
        }
        this.node.destroy();
      }
    }
  },
  zhalei: function zhalei() {
    cc.vv.Global.game.enemy_tank_arr.forEach(function (enemy) {
      if (enemy && enemy.node && enemy.node.active) {
        var fire = cc.instantiate(cc.vv.Global.game.fire_flower_prefab);
        fire.position = enemy.node.position;
        fire.parent = enemy.node.parent;
        var data = {
          level: 1
        };
        fire.getComponent('fire_flower').init(data);
        enemy.node.destroy();
      }
    });
  },
  maozi: function maozi() {
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.node.active) {
      var shield = cc.instantiate(cc.vv.Global.game.shield_prefab);
      player.node.addChild(shield);
      shield.getComponent('shield').init(player, true);
    }
  },
  tieqiao: function tieqiao() {
    cc.vv.Global.tieqiao_time = new Date().getTime();
  },
  star: function star() {
    var player = cc.vv.Global.game.player;
    if (player && player.node && player.node.active) {
      player.tank_level++;
      if (player.tank_level > 4) {
        player.tank_level = 4;
      }
      var data = cc.vv.Config.getPlayerTankValue(player.tank_level);
      if (data) {
        if (data.moveSpeed) {
          player.moveSpeed = data.moveSpeed;
        }
        if (data.fireSpeed) {
          player.fireSpeed = data.fireSpeed;
        }
      }
      // if (player.tank_level == 1){

      //     player.moveSpeed = 1.5
      //     player.fireSpeed = 3
      // }
      // else if (player.tank_level == 2){
      //     player.moveSpeed = 1.7
      //     player.fireSpeed = 3.8
      // }
      // else if (player.tank_level == 3){
      //     player.moveSpeed = 1.9
      //     player.fireSpeed = 4.8
      // }
      // else if (player.tank_level == 4){
      //     player.moveSpeed = 2.1
      //     player.fireSpeed = 5.3
      // }
      player.changeTankValue();
    }
  },
  tank: function tank() {
    cc.vv.UserInfo.live++;
  },
  dinglei: function dinglei() {
    cc.vv.Global.dinglei_time = new Date().getTime();
  },
  onDestroy: function onDestroy() {
    console.log('props destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxwcm9wcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByb3BzX2FyciIsIlNwcml0ZUZyYW1lIiwiaWNvbiIsIlNwcml0ZSIsInN0YXJ0IiwiX3RoaXMiLCJ2diIsIkF1ZGlvIiwicGxheVBvd2VydXBBcHBlYXIiLCJ0eXBlIiwicmFuZG9tIiwiVG9vbHMiLCJFbnVtIiwiUHJvcHMiLCJ6aGFsZWkiLCJtYW96aSIsInRpZXFpYW8iLCJzdGFyIiwidGFuayIsImRpbmdsZWkiLCJzcHJpdGVGcmFtZSIsInNjaGVkdWxlIiwibm9kZSIsImFjdGl2ZSIsInVwZGF0ZSIsImRyIiwicGxheWVyIiwiR2xvYmFsIiwiZ2FtZSIsImEiLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJwbGF5UG93ZXJ1cFBpY2siLCJkZXN0cm95IiwiZW5lbXlfdGFua19hcnIiLCJmb3JFYWNoIiwiZW5lbXkiLCJmaXJlIiwiaW5zdGFudGlhdGUiLCJmaXJlX2Zsb3dlcl9wcmVmYWIiLCJwb3NpdGlvbiIsInBhcmVudCIsImRhdGEiLCJsZXZlbCIsImdldENvbXBvbmVudCIsImluaXQiLCJzaGllbGQiLCJzaGllbGRfcHJlZmFiIiwiYWRkQ2hpbGQiLCJ0aWVxaWFvX3RpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRhbmtfbGV2ZWwiLCJDb25maWciLCJnZXRQbGF5ZXJUYW5rVmFsdWUiLCJtb3ZlU3BlZWQiLCJmaXJlU3BlZWQiLCJjaGFuZ2VUYW5rVmFsdWUiLCJVc2VySW5mbyIsImxpdmUiLCJkaW5nbGVpX3RpbWUiLCJvbkRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNF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LE9BQU8sRUFBRTtFQUNwRCxDQUFDO0VBRURVLFNBQVMsV0FBQUEsVUFBQSxFQUFHO0lBQ1JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUNoQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvcHNfYXJyIDogW2NjLlNwcml0ZUZyYW1lXSxcclxuXHJcbiAgICAgICAgaWNvbjogY2MuU3ByaXRlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MudnYuQXVkaW8ucGxheVBvd2VydXBBcHBlYXIoKVxyXG4gICAgICAgIHRoaXMudHlwZSA9IDBcclxuICAgICAgICBsZXQgcmFuZG9tID0gY2MudnYuVG9vbHMucmFuZG9tKDEsIDcpXHJcbiAgICAgICAgLy8gcmFuZG9tID0gMlxyXG4gICAgICAgIGlmIChyYW5kb20gPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGNjLnZ2LkVudW0uUHJvcHMuemhhbGVpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJhbmRvbSA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gY2MudnYuRW51bS5Qcm9wcy5tYW96aVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb20gPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGNjLnZ2LkVudW0uUHJvcHMudGllcWlhb1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb20gPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGNjLnZ2LkVudW0uUHJvcHMuc3RhclxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb20gPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGNjLnZ2LkVudW0uUHJvcHMudGFua1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYW5kb20gPT0gNil7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGNjLnZ2LkVudW0uUHJvcHMuZGluZ2xlaVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5wcm9wc19hcnJbdGhpcy50eXBlLTFdXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5vZGUuYWN0aXZlID0gIXRoaXMuaWNvbi5ub2RlLmFjdGl2ZVxyXG4gICAgICAgIH0sIDAuMylcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHIpe1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBjYy52di5HbG9iYWwuZ2FtZS5wbGF5ZXJcclxuICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5ub2RlICYmIHBsYXllci5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyhwbGF5ZXIubm9kZS5nZXRCb3VuZGluZ0JveCgpKVxyXG4gICAgICAgICAgICBpZiAoYSl7XHJcbiAgICAgICAgICAgICAgICBjYy52di5BdWRpby5wbGF5UG93ZXJ1cFBpY2soKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBjYy52di5FbnVtLlByb3BzLnpoYWxlaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56aGFsZWkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IGNjLnZ2LkVudW0uUHJvcHMubWFvemkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFvemkoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IGNjLnZ2LkVudW0uUHJvcHMudGllcWlhbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWVxaWFvKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PSBjYy52di5FbnVtLlByb3BzLnN0YXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT0gY2MudnYuRW51bS5Qcm9wcy50YW5rKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhbmsoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09IGNjLnZ2LkVudW0uUHJvcHMuZGluZ2xlaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaW5nbGVpKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgemhhbGVpICgpe1xyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lLmVuZW15X3RhbmtfYXJyLmZvckVhY2goZW5lbXk9PntcclxuICAgICAgICAgICAgaWYgKGVuZW15ICYmIGVuZW15Lm5vZGUgJiYgZW5lbXkubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpcmUgPSBjYy5pbnN0YW50aWF0ZShjYy52di5HbG9iYWwuZ2FtZS5maXJlX2Zsb3dlcl9wcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBmaXJlLnBvc2l0aW9uID0gZW5lbXkubm9kZS5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgZmlyZS5wYXJlbnQgPSBlbmVteS5ub2RlLnBhcmVudFxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgOiAxLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlyZS5nZXRDb21wb25lbnQoJ2ZpcmVfZmxvd2VyJykuaW5pdChkYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIGVuZW15Lm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBtYW96aSAoKXtcclxuICAgICAgICBsZXQgcGxheWVyID0gY2MudnYuR2xvYmFsLmdhbWUucGxheWVyXHJcbiAgICAgICAgaWYgKHBsYXllciAmJiBwbGF5ZXIubm9kZSAmJiBwbGF5ZXIubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBsZXQgc2hpZWxkID0gY2MuaW5zdGFudGlhdGUoY2MudnYuR2xvYmFsLmdhbWUuc2hpZWxkX3ByZWZhYilcclxuICAgICAgICAgICAgcGxheWVyLm5vZGUuYWRkQ2hpbGQoc2hpZWxkKVxyXG4gICAgICAgICAgICBzaGllbGQuZ2V0Q29tcG9uZW50KCdzaGllbGQnKS5pbml0KHBsYXllciwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRpZXFpYW8gKCl7XHJcbiAgICAgICAgY2MudnYuR2xvYmFsLnRpZXFpYW9fdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXIgKCl7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IGNjLnZ2Lkdsb2JhbC5nYW1lLnBsYXllclxyXG4gICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLm5vZGUgJiYgcGxheWVyLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgcGxheWVyLnRhbmtfbGV2ZWwgKytcclxuICAgICAgICAgICAgaWYgKHBsYXllci50YW5rX2xldmVsID4gNCl7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudGFua19sZXZlbCA9IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLnZ2LkNvbmZpZy5nZXRQbGF5ZXJUYW5rVmFsdWUocGxheWVyLnRhbmtfbGV2ZWwpXHJcbiAgICAgICAgICAgIGlmIChkYXRhKXtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1vdmVTcGVlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVTcGVlZCA9IGRhdGEubW92ZVNwZWVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5maXJlU3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5maXJlU3BlZWQgPSBkYXRhLmZpcmVTcGVlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChwbGF5ZXIudGFua19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyLm1vdmVTcGVlZCA9IDEuNVxyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyLmZpcmVTcGVlZCA9IDNcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIChwbGF5ZXIudGFua19sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5tb3ZlU3BlZWQgPSAxLjdcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5maXJlU3BlZWQgPSAzLjhcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIChwbGF5ZXIudGFua19sZXZlbCA9PSAzKXtcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5tb3ZlU3BlZWQgPSAxLjlcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5maXJlU3BlZWQgPSA0LjhcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIChwbGF5ZXIudGFua19sZXZlbCA9PSA0KXtcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5tb3ZlU3BlZWQgPSAyLjFcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllci5maXJlU3BlZWQgPSA1LjNcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBwbGF5ZXIuY2hhbmdlVGFua1ZhbHVlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRhbmsgKCl7XHJcbiAgICAgICAgY2MudnYuVXNlckluZm8ubGl2ZSsrXHJcbiAgICB9LFxyXG5cclxuICAgIGRpbmdsZWkgKCl7XHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmRpbmdsZWlfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJvcHMgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11824pMynhAV7W8pS04qStz', 'game_control');
// Script/game_control.js

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
    // game_map: cc.Node,
    game_maps: cc.Node,
    direction: cc.Node,
    fire_btn: cc.Node,
    game_info: cc.Node,
    shield_prefab: cc.Prefab,
    appear_prefab: cc.Prefab,
    bullet_prefab: cc.Prefab,
    enemy_tank_prefab: cc.Prefab,
    player_tank_prefab: cc.Prefab,
    fire_flower_prefab: cc.Prefab,
    props_prefab: cc.Prefab,
    game_map_prefab: cc.Prefab,
    toast: cc.Prefab,
    game_result: cc.Prefab,
    game_over: cc.Prefab,
    game_stage: cc.Prefab,
    point_prefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.vv.Global.game = this;
    this.startGame();
  },
  startGame: function startGame() {
    cc.vv.Global.stage_info = cc.vv.Config.stage['stage_' + cc.vv.UserInfo.level]();
    cc.vv.Global.die_tank = {
      tank_1: 0,
      tank_2: 0,
      tank_3: 0,
      tank_4: 0
    };
    cc.vv.Global.tieqiao_time = null;
    cc.vv.Global.dinglei_time = null;
    this.is_pause = true;
    this.is_over = true;
    this.is_enemy_tank_pause = false;
    this.is_show_over = false;
    this.props = null;
    this.player_direction = TagOfDirection.no;
    this.enemy_index = 0;
    this.enemy_tank_arr = [];
    this.bullet_arr = [];
    this.frame_count = 0;
    cc.vv.Global.enemy_count = 20;
    this.game_maps.destroyAllChildren();
    this.game_map = cc.instantiate(this.game_map_prefab);
    this.game_maps.addChild(this.game_map);
    this.map = this.game_map.getComponent('game_map');
    this.map.initMap();
    if (this.player) {
      cc.vv.UserInfo.live++;
      var data = {
        moveSpeed: this.player.moveSpeed,
        fireSpeed: this.player.fireSpeed,
        tank_level: this.player.tank_level
      };
      this.player = this.map.initPlayer(data);
      this.player_direction = TagOfDirection.no;
    }
    this.initView();
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    var result = cc.instantiate(this.game_stage);
    this.node.addChild(result);
  },
  initView: function initView() {
    var x = 0;
    var y = 0;
    var enemys = this.game_info.getChildByName('enemys');
    // let ip = this.game_info.getChildByName('ip')
    // let live_tank = this.game_info.getChildByName('live_tank')
    var live_count = this.game_info.getChildByName('live_count');
    // let flag = this.game_info.getChildByName('flag')
    var level = this.game_info.getChildByName('level');
    x = /* (cc.winSize.width - this.game_map.width) / 4 +*/this.game_map.width / 2 + 30;
    y = cc.winSize.height / 2 - 5;
    for (var i = 0; i < enemys.childrenCount; i++) {
      // if (i%2==0){
      //     y -= 15
      // }
      // let temp_x = x
      // if (i%2==1){
      //     temp_x -= 8
      // }
      // else {
      //     temp_x += 8
      // }
      var enemy = enemys.children[i];
      // enemy.position = cc.v2(temp_x, y)
      enemy.active = false;
    }
    for (var _i = 0; _i < cc.vv.Global.enemy_count; _i++) {
      var _enemy = enemys.children[_i];
      _enemy.active = true;
    }
    y = 15;
    // ip.position = cc.v2(x, y)
    // live_tank.position = cc.v2(x-10, y-20)
    // live_count.position = cc.v2(x+10, y-20)

    // flag.position = cc.v2(x, y-60)
    // level.position = cc.v2(x+10, y-80)

    x = (cc.winSize.width - this.game_map.width) / 4 + this.game_map.width / 2;
    y = cc.winSize.height * 0.25;
    // this.direction.position = cc.v2(-x, -y)
    // this.fire_btn.position = cc.v2(x, -y)

    live_count.getComponent(cc.Label).string = cc.vv.UserInfo.live;
    level.getComponent(cc.Label).string = cc.vv.UserInfo.level;
  },
  initTank: function initTank() {
    if (!this.player) {
      var data = {
        moveSpeed: 1.2,
        fireSpeed: 3,
        tank_level: 3
      };
      this.player = this.map.initPlayer();
      this.player_direction = TagOfDirection.no;
    }
    if (this.enemy_tank_arr.length < 4) {
      this.enemy_tank_arr.push(this.map.initEnemy());
    }
  },
  onClickBack: function onClickBack() {
    cc.director.loadScene('home_scene');
  },
  checkBullet: function checkBullet() {
    for (var i = 0; i < this.bullet_arr.length; i++) {
      if (!this.bullet_arr[i].isValid) {
        this.bullet_arr.splice(i, 1);
        i--;
      }
    }
  },
  checkEnemyTank: function checkEnemyTank() {
    for (var i = 0; i < this.enemy_tank_arr.length; i++) {
      if (!this.enemy_tank_arr[i] || !this.enemy_tank_arr[i].node || !this.enemy_tank_arr[i].node.isValid) {
        this.enemy_tank_arr.splice(i, 1);
        i--;
      }
    }
  },
  checkPlayerTank: function checkPlayerTank() {
    if (!this.player || !this.player.node || !this.player.node.isValid) {
      this.player = null;
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (!this.player || !this.player.node || !this.player.node.isValid) {
      return;
    }
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.player.onFire();
        break;
      case cc.macro.KEY.left:
        this.player_direction = TagOfDirection.left;
        break;
      case cc.macro.KEY.down:
        this.player_direction = TagOfDirection.down;
        break;
      case cc.macro.KEY.right:
        this.player_direction = TagOfDirection.right;
        break;
      case cc.macro.KEY.up:
        this.player_direction = TagOfDirection.up;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    if (!this.player || !this.player.node || !this.player.node.isValid) {
      return;
    }
    this.player_direction = TagOfDirection.no;
  },
  update: function update(dt) {
    var _this = this;
    if (this.is_pause) return;
    this.frame_count++;
    this.initView();
    this.initTank();
    this.checkBullet();
    this.checkEnemyTank();
    this.checkPlayerTank();

    // 铁锹 -- Hết thời gian của chức năng xẻng - Tòa thành ko phá vỡ
    if (cc.vv.Global.tieqiao_time) {
      var time = new Date().getTime();
      if ((time - cc.vv.Global.tieqiao_time) / 1000 >= 15) {
        this.map.bg2.node.active = false;
        cc.vv.Global.tieqiao_time = null;
      } else if ((time - cc.vv.Global.tieqiao_time) / 1000 >= 10) {
        if (this.frame_count % 20 == 0) {
          this.map.bg2.node.active = !this.map.bg2.node.active;
          this.map.repairHome();
        }
      } else {
        this.map.bg2.node.active = true;
      }
    }
    // 定雷 -- nhặt được cái đồng hồ - enemy đứng lại hết
    if (cc.vv.Global.dinglei_time) {
      this.is_enemy_tank_pause = true;
      var _time = new Date().getTime();
      if ((_time - cc.vv.Global.dinglei_time) / 1000 >= 10) {
        cc.vv.Global.dinglei_time = null;
        this.is_enemy_tank_pause = false;
      }
    }

    // 游戏结束 -- thua
    if (this.is_over && !this.is_show_over) {
      this.is_show_over = true;
      var data = {
        text: 'GAME OVER',
        state: 1
      };
      var toast = cc.instantiate(this.toast);
      this.node.addChild(toast);
      toast.getComponent('toast').init(data);
    }
    // 胜利 -- thắng
    if (this.enemy_tank_arr.length == 0 && cc.vv.Global.enemy_count <= 0 && !this.is_show_over) {
      this.is_show_over = true;
      this.is_over = true;
      this.scheduleOnce(function () {
        var data = {
          status: 1
        };
        var result = cc.instantiate(_this.game_result);
        _this.node.addChild(result);
        result.getComponent('game_result').init(data);
      }, 5);
    }
    if (this.player && this.player.node.active) {
      if (this.player_direction == TagOfDirection.up) {
        this.player.moveUp();
      } else if (this.player_direction == TagOfDirection.right) {
        this.player.moveRight();
      } else if (this.player_direction == TagOfDirection.down) {
        this.player.moveDown();
      } else if (this.player_direction == TagOfDirection.left) {
        this.player.moveLeft();
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lX2NvbnRyb2wuanMiXSwibmFtZXMiOlsiVGFnT2ZEaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJubyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdhbWVfbWFwcyIsIk5vZGUiLCJkaXJlY3Rpb24iLCJmaXJlX2J0biIsImdhbWVfaW5mbyIsInNoaWVsZF9wcmVmYWIiLCJQcmVmYWIiLCJhcHBlYXJfcHJlZmFiIiwiYnVsbGV0X3ByZWZhYiIsImVuZW15X3RhbmtfcHJlZmFiIiwicGxheWVyX3RhbmtfcHJlZmFiIiwiZmlyZV9mbG93ZXJfcHJlZmFiIiwicHJvcHNfcHJlZmFiIiwiZ2FtZV9tYXBfcHJlZmFiIiwidG9hc3QiLCJnYW1lX3Jlc3VsdCIsImdhbWVfb3ZlciIsImdhbWVfc3RhZ2UiLCJwb2ludF9wcmVmYWIiLCJzdGFydCIsInZ2IiwiR2xvYmFsIiwiZ2FtZSIsInN0YXJ0R2FtZSIsInN0YWdlX2luZm8iLCJDb25maWciLCJzdGFnZSIsIlVzZXJJbmZvIiwibGV2ZWwiLCJkaWVfdGFuayIsInRhbmtfMSIsInRhbmtfMiIsInRhbmtfMyIsInRhbmtfNCIsInRpZXFpYW9fdGltZSIsImRpbmdsZWlfdGltZSIsImlzX3BhdXNlIiwiaXNfb3ZlciIsImlzX2VuZW15X3RhbmtfcGF1c2UiLCJpc19zaG93X292ZXIiLCJwcm9wcyIsInBsYXllcl9kaXJlY3Rpb24iLCJlbmVteV9pbmRleCIsImVuZW15X3RhbmtfYXJyIiwiYnVsbGV0X2FyciIsImZyYW1lX2NvdW50IiwiZW5lbXlfY291bnQiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJnYW1lX21hcCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJtYXAiLCJnZXRDb21wb25lbnQiLCJpbml0TWFwIiwicGxheWVyIiwibGl2ZSIsImRhdGEiLCJtb3ZlU3BlZWQiLCJmaXJlU3BlZWQiLCJ0YW5rX2xldmVsIiwiaW5pdFBsYXllciIsImluaXRWaWV3Iiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwicmVzdWx0Iiwibm9kZSIsIngiLCJ5IiwiZW5lbXlzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJsaXZlX2NvdW50Iiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0IiwiaSIsImNoaWxkcmVuQ291bnQiLCJlbmVteSIsImNoaWxkcmVuIiwiYWN0aXZlIiwiTGFiZWwiLCJzdHJpbmciLCJpbml0VGFuayIsImxlbmd0aCIsInB1c2giLCJpbml0RW5lbXkiLCJvbkNsaWNrQmFjayIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY2hlY2tCdWxsZXQiLCJpc1ZhbGlkIiwic3BsaWNlIiwiY2hlY2tFbmVteVRhbmsiLCJjaGVja1BsYXllclRhbmsiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwib25GaXJlIiwidXBkYXRlIiwiZHQiLCJfdGhpcyIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImJnMiIsInJlcGFpckhvbWUiLCJ0ZXh0Iiwic3RhdGUiLCJpbml0Iiwic2NoZWR1bGVPbmNlIiwic3RhdHVzIiwibW92ZVVwIiwibW92ZVJpZ2h0IiwibW92ZURvd24iLCJtb3ZlTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxjQUFjLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pCQyxFQUFFLEVBQUcsQ0FBQztFQUNOQyxLQUFLLEVBQUcsQ0FBQztFQUNUQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxJQUFJLEVBQUcsQ0FBQztFQUNSQyxFQUFFLEVBQUc7QUFDVCxDQUFDLENBQUM7QUFHRk4sRUFBRSxDQUFDTyxLQUFLLENBQUM7RUFDTCxXQUFTUCxFQUFFLENBQUNRLFNB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LGdCQUFnQixJQUFJcEQsY0FBYyxDQUFDTSxJQUFJLEVBQUM7UUFDbEQsSUFBSSxDQUFDMkQsTUFBTSxDQUFDbUUsUUFBUSxFQUFFO01BQzFCO0lBQ0o7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxudmFyIFRhZ09mRGlyZWN0aW9uID0gY2MuRW51bSh7XHJcbiAgICB1cCA6IDAsXHJcbiAgICByaWdodCA6IDEsXHJcbiAgICBkb3duIDogMixcclxuICAgIGxlZnQgOiAzLFxyXG4gICAgbm8gOiA0LFxyXG59KVxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZ2FtZV9tYXA6IGNjLk5vZGUsXHJcbiAgICAgICAgZ2FtZV9tYXBzOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpcmVjdGlvbjogY2MuTm9kZSxcclxuICAgICAgICBmaXJlX2J0bjogY2MuTm9kZSxcclxuICAgICAgICBnYW1lX2luZm86IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIHNoaWVsZF9wcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICBhcHBlYXJfcHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVsbGV0X3ByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIGVuZW15X3RhbmtfcHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcGxheWVyX3RhbmtfcHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgZmlyZV9mbG93ZXJfcHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcHJvcHNfcHJlZmFiOiBjYy5QcmVmYWIsXHJcblxyXG4gICAgICAgIGdhbWVfbWFwX3ByZWZhYjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgICB0b2FzdDogY2MuUHJlZmFiLFxyXG4gICAgICAgIGdhbWVfcmVzdWx0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgZ2FtZV9vdmVyOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgZ2FtZV9zdGFnZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIHBvaW50X3ByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5nYW1lID0gdGhpc1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0R2FtZSAoKXtcclxuICAgICAgICBjYy52di5HbG9iYWwuc3RhZ2VfaW5mbyA9IGNjLnZ2LkNvbmZpZy5zdGFnZVsnc3RhZ2VfJytjYy52di5Vc2VySW5mby5sZXZlbF0oKVxyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC5kaWVfdGFuayA9IHtcclxuICAgICAgICAgICAgdGFua18xIDogMCxcclxuICAgICAgICAgICAgdGFua18yIDogMCxcclxuICAgICAgICAgICAgdGFua18zIDogMCxcclxuICAgICAgICAgICAgdGFua180IDogMCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbC50aWVxaWFvX3RpbWUgPSBudWxsXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmRpbmdsZWlfdGltZSA9IG51bGxcclxuXHJcbiAgICAgICAgdGhpcy5pc19wYXVzZSA9IHRydWVcclxuICAgICAgICB0aGlzLmlzX292ZXIgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pc19lbmVteV90YW5rX3BhdXNlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzX3Nob3dfb3ZlciA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBudWxsXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgICAgICB0aGlzLmVuZW15X2luZGV4ID0gMFxyXG4gICAgICAgIHRoaXMuZW5lbXlfdGFua19hcnIgPSBbXVxyXG4gICAgICAgIHRoaXMuYnVsbGV0X2FyciA9IFtdXHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVfY291bnQgPSAwXHJcbiAgICAgICAgY2MudnYuR2xvYmFsLmVuZW15X2NvdW50ID0gMjBcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lX21hcHMuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLmdhbWVfbWFwID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lX21hcF9wcmVmYWIpXHJcbiAgICAgICAgdGhpcy5nYW1lX21hcHMuYWRkQ2hpbGQodGhpcy5nYW1lX21hcClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZV9tYXAuZ2V0Q29tcG9uZW50KCdnYW1lX21hcCcpXHJcbiAgICAgICAgdGhpcy5tYXAuaW5pdE1hcCgpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcil7XHJcbiAgICAgICAgICAgIGNjLnZ2LlVzZXJJbmZvLmxpdmUrK1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1vdmVTcGVlZCA6IHRoaXMucGxheWVyLm1vdmVTcGVlZCxcclxuICAgICAgICAgICAgICAgIGZpcmVTcGVlZCA6IHRoaXMucGxheWVyLmZpcmVTcGVlZCxcclxuICAgICAgICAgICAgICAgIHRhbmtfbGV2ZWwgOiB0aGlzLnBsYXllci50YW5rX2xldmVsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5tYXAuaW5pdFBsYXllcihkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRWaWV3KClcclxuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZV9zdGFnZSlcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocmVzdWx0KVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0Vmlldygpe1xyXG4gICAgICAgIGxldCB4ID0gMFxyXG4gICAgICAgIGxldCB5ID0gMFxyXG4gICAgICAgIGxldCBlbmVteXMgPSB0aGlzLmdhbWVfaW5mby5nZXRDaGlsZEJ5TmFtZSgnZW5lbXlzJylcclxuICAgICAgICAvLyBsZXQgaXAgPSB0aGlzLmdhbWVfaW5mby5nZXRDaGlsZEJ5TmFtZSgnaXAnKVxyXG4gICAgICAgIC8vIGxldCBsaXZlX3RhbmsgPSB0aGlzLmdhbWVfaW5mby5nZXRDaGlsZEJ5TmFtZSgnbGl2ZV90YW5rJylcclxuICAgICAgICBsZXQgbGl2ZV9jb3VudCA9IHRoaXMuZ2FtZV9pbmZvLmdldENoaWxkQnlOYW1lKCdsaXZlX2NvdW50JylcclxuICAgICAgICAvLyBsZXQgZmxhZyA9IHRoaXMuZ2FtZV9pbmZvLmdldENoaWxkQnlOYW1lKCdmbGFnJylcclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLmdhbWVfaW5mby5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWwnKVxyXG4gICAgICAgIHggPS8qIChjYy53aW5TaXplLndpZHRoIC0gdGhpcy5nYW1lX21hcC53aWR0aCkgLyA0ICsqLyB0aGlzLmdhbWVfbWFwLndpZHRoIC8gMiArIDMwXHJcbiAgICAgICAgeSA9IGNjLndpblNpemUuaGVpZ2h0IC8gMiAtIDVcclxuICAgICAgICBmb3IgKGxldCBpPTA7aTxlbmVteXMuY2hpbGRyZW5Db3VudDtpKyspe1xyXG4gICAgICAgICAgICAvLyBpZiAoaSUyPT0wKXtcclxuICAgICAgICAgICAgLy8gICAgIHkgLT0gMTVcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBsZXQgdGVtcF94ID0geFxyXG4gICAgICAgICAgICAvLyBpZiAoaSUyPT0xKXtcclxuICAgICAgICAgICAgLy8gICAgIHRlbXBfeCAtPSA4XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0ZW1wX3ggKz0gOFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW15cy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAvLyBlbmVteS5wb3NpdGlvbiA9IGNjLnYyKHRlbXBfeCwgeSlcclxuICAgICAgICAgICAgZW5lbXkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8Y2MudnYuR2xvYmFsLmVuZW15X2NvdW50O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW15cy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBlbmVteS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB5ID0gMTVcclxuICAgICAgICAvLyBpcC5wb3NpdGlvbiA9IGNjLnYyKHgsIHkpXHJcbiAgICAgICAgLy8gbGl2ZV90YW5rLnBvc2l0aW9uID0gY2MudjIoeC0xMCwgeS0yMClcclxuICAgICAgICAvLyBsaXZlX2NvdW50LnBvc2l0aW9uID0gY2MudjIoeCsxMCwgeS0yMClcclxuXHJcbiAgICAgICAgLy8gZmxhZy5wb3NpdGlvbiA9IGNjLnYyKHgsIHktNjApXHJcbiAgICAgICAgLy8gbGV2ZWwucG9zaXRpb24gPSBjYy52Mih4KzEwLCB5LTgwKVxyXG5cclxuICAgICAgICB4ID0gKGNjLndpblNpemUud2lkdGggLSB0aGlzLmdhbWVfbWFwLndpZHRoKSAvIDQgKyB0aGlzLmdhbWVfbWFwLndpZHRoIC8gMlxyXG4gICAgICAgIHkgPSBjYy53aW5TaXplLmhlaWdodCAqIDAuMjVcclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbi5wb3NpdGlvbiA9IGNjLnYyKC14LCAteSlcclxuICAgICAgICAvLyB0aGlzLmZpcmVfYnRuLnBvc2l0aW9uID0gY2MudjIoeCwgLXkpXHJcblxyXG4gICAgICAgIGxpdmVfY291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy52di5Vc2VySW5mby5saXZlXHJcbiAgICAgICAgbGV2ZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy52di5Vc2VySW5mby5sZXZlbFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0VGFuayAoKXtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyKXtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlU3BlZWQgOiAxLjIsXHJcbiAgICAgICAgICAgICAgICBmaXJlU3BlZWQgOiAzLFxyXG4gICAgICAgICAgICAgICAgdGFua19sZXZlbCA6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMubWFwLmluaXRQbGF5ZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5ub1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmVteV90YW5rX2Fyci5sZW5ndGggPCA0KXtcclxuICAgICAgICAgICAgdGhpcy5lbmVteV90YW5rX2Fyci5wdXNoKHRoaXMubWFwLmluaXRFbmVteSgpKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0JhY2sgKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lX3NjZW5lJylcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tCdWxsZXQgKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8dGhpcy5idWxsZXRfYXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVsbGV0X2FycltpXS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0X2Fyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgIGktLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja0VuZW15VGFuayAoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmVuZW15X3RhbmtfYXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5lbXlfdGFua19hcnJbaV0gfHwgIXRoaXMuZW5lbXlfdGFua19hcnJbaV0ubm9kZSB8fCAhdGhpcy5lbmVteV90YW5rX2FycltpXS5ub2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteV90YW5rX2Fyci5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgIGktLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja1BsYXllclRhbmsgKCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5wbGF5ZXIubm9kZSB8fCAhdGhpcy5wbGF5ZXIubm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5wbGF5ZXIubm9kZSB8fCAhdGhpcy5wbGF5ZXIubm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub25GaXJlKClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl9kaXJlY3Rpb24gPSBUYWdPZkRpcmVjdGlvbi5sZWZ0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyX2RpcmVjdGlvbiA9IFRhZ09mRGlyZWN0aW9uLmRvd25cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ucmlnaHRcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24udXBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25LZXlVcCAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyIHx8ICF0aGlzLnBsYXllci5ub2RlIHx8ICF0aGlzLnBsYXllci5ub2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfZGlyZWN0aW9uID0gVGFnT2ZEaXJlY3Rpb24ubm9cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICBpZiAodGhpcy5pc19wYXVzZSkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5mcmFtZV9jb3VudCArK1xyXG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKVxyXG4gICAgICAgIHRoaXMuaW5pdFRhbmsoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tCdWxsZXQoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbmVteVRhbmsoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tQbGF5ZXJUYW5rKClcclxuXHJcbiAgICAgICAgLy8g6ZOB6ZS5IC0tIEjhur90IHRo4budaSBnaWFuIGPhu6dhIGNo4bupYyBuxINuZyB44bq7bmcgLSBUw7JhIHRow6BuaCBrbyBwaMOhIHbhu6FcclxuICAgICAgICBpZiAoY2MudnYuR2xvYmFsLnRpZXFpYW9fdGltZSl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgaWYgKCh0aW1lIC0gY2MudnYuR2xvYmFsLnRpZXFpYW9fdGltZSkgLyAxMDAwID49IDE1KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmJnMi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjYy52di5HbG9iYWwudGllcWlhb190aW1lID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCh0aW1lIC0gY2MudnYuR2xvYmFsLnRpZXFpYW9fdGltZSkgLyAxMDAwID49IDEwKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lX2NvdW50ICUgMjAgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuYmcyLm5vZGUuYWN0aXZlID0gIXRoaXMubWFwLmJnMi5ub2RlLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlcGFpckhvbWUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuYmcyLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWumumbtyAtLSBuaOG6t3QgxJHGsOG7o2MgY8OhaSDEkeG7k25nIGjhu5MgLSBlbmVteSDEkeG7qW5nIGzhuqFpIGjhur90XHJcbiAgICAgICAgaWYgKGNjLnZ2Lkdsb2JhbC5kaW5nbGVpX3RpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX2VuZW15X3RhbmtfcGF1c2UgPSB0cnVlXHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgaWYgKCh0aW1lIC0gY2MudnYuR2xvYmFsLmRpbmdsZWlfdGltZSkgLyAxMDAwID49IDEwKXtcclxuICAgICAgICAgICAgICAgIGNjLnZ2Lkdsb2JhbC5kaW5nbGVpX3RpbWUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2VuZW15X3RhbmtfcGF1c2UgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa4uOaIj+e7k+adnyAtLSB0aHVhXHJcbiAgICAgICAgaWYgKHRoaXMuaXNfb3ZlciAmJiAhdGhpcy5pc19zaG93X292ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX3Nob3dfb3ZlciA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ0dBTUUgT1ZFUicsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdG9hc3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRvYXN0KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodG9hc3QpXHJcbiAgICAgICAgICAgIHRvYXN0LmdldENvbXBvbmVudCgndG9hc3QnKS5pbml0KGRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiDnOWIqSAtLSB0aOG6r25nXHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlfdGFua19hcnIubGVuZ3RoID09IDAgJiYgIGNjLnZ2Lkdsb2JhbC5lbmVteV9jb3VudCA8PSAwICYmICF0aGlzLmlzX3Nob3dfb3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfc2hvd19vdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmlzX292ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lX3Jlc3VsdClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZ2V0Q29tcG9uZW50KCdnYW1lX3Jlc3VsdCcpLmluaXQoZGF0YSlcclxuICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyICYmIHRoaXMucGxheWVyLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyX2RpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi51cCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlVXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyX2RpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlUmlnaHQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyX2RpcmVjdGlvbiA9PSBUYWdPZkRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVEb3duKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllcl9kaXJlY3Rpb24gPT0gVGFnT2ZEaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlTGVmdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/shield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ddbcuQfjJAsqbHi041Hi6m', 'shield');
// Script/game/shield.js

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
  init: function init(tank, is_pickup) {
    var _this = this;
    // console.log(tank)
    tank.is_shield = true;
    var animation = this.getComponent(cc.Animation);
    animation.play('shield');
    var time = 3;
    if (is_pickup) time = 15;
    this.scheduleOnce(function () {
      tank.is_shield = false;
      _this.node.destroy();
    }, time);
  },
  onDestroy: function onDestroy() {
    console.log('shield destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxzaGllbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluaXQiLCJ0YW5rIiwiaXNfcGlja3VwIiwiX3RoaXMiLCJpc19zaGllbGQiLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJwbGF5IiwidGltZSIsInNjaGVkdWxlT25jZSIsIm5vZGUiLCJkZXN0cm95Iiwib25EZXN0cm95IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQSxDQUNIO0VBRUQ7RUFFQTtFQUVBQyxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUVULENBQUM7RUFFREMsSUFBSSxXQUFBQSxLQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBQztJQUFBLElBQUFDLEtBQUE7SUFDbEI7SUFDQUYsSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSTtJQUNyQixJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUNYLEVBQUUsQ0FBQ1ksU0FBUyxDQUFDO0lBQy9DRixTQUFTLENBQUNHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFeEIsSUFBSUMsSUFBSSxHQUFHLENBQUM7SUFDWixJQUFJUCxTQUFTLEVBQUVPLElBQUksR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFlBQUk7TUFDbEJULElBQUksQ0FBQ0csU0FBUyxHQUFHLEtBQUs7TUFDdEJELEtBQUksQ0FBQ1EsSUFBSSxDQUFDQyxPQUFPLEVBQUU7SUFDdkIsQ0FBQyxFQUFFSCxJQUFJLENBQUM7RUFDWixDQUFDO0VBRURJLFNBQVMsV0FBQUEsVUFBQSxFQUFFO0lBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQ2pDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgKHRhbmssIGlzX3BpY2t1cCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFuaylcclxuICAgICAgICB0YW5rLmlzX3NoaWVsZCA9IHRydWVcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCdzaGllbGQnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aW1lID0gM1xyXG4gICAgICAgIGlmIChpc19waWNrdXApIHRpbWUgPSAxNVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIHRhbmsuaXNfc2hpZWxkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0sIHRpbWUpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaGllbGQgZGVzdHJveScpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/Audio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0de855O8t1Nt7hBRUObuVIs', 'Audio');
// Script/common/Audio.js

"use strict";

/**
 * 音频控制类
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // bgmVolume:1.0,//背景音量
    // sfxVolume:1.0,//音效音量
    // isOpenSound:true,//是否开始声音

    bgmAudioID: -1 //背景音乐id
  },

  // use this for initialization
  init: function init() {},
  /**获取声音地址*/getUrl: function getUrl(url) {
    // return cc.url.raw("resources/sound/" + url + ".ogg");
    return "sound/" + url; //+ ".ogg"
  },
  /**播放背景音乐*/playBGM: function playBGM(index) {

    // let audioUrl = this.getUrl('bg'+index);
    // if(this.bgmAudioID >= 0){
    //     cc.audioEngine.stop(this.bgmAudioID);
    // }
    // this.bgmAudioID = cc.audioEngine.play(audioUrl, true, 1);
  },
  stopBGM: function stopBGM() {
    // cc.audioEngine.stop(this.bgmAudioID);
  },
  /**播放音效*/
  playSFX: function playSFX(url) {
    var audioUrl = this.getUrl(url);
    // cc.audioEngine.play(audioUrl, false, 1);
    cc.loader.loadRes(audioUrl, cc.AudioClip, function (err, clip) {
      cc.audioEngine.play(clip, false, 1);
    });
  },
  /**暂停所有*/pauseAll: function pauseAll() {
    cc.audioEngine.pauseAll();
  },
  /**重启所有*/resumeAll: function resumeAll() {
    cc.audioEngine.resumeAll();
  },
  playStart: function playStart() {
    this.playSFX('stage_start');
  },
  playFire: function playFire() {
    this.playSFX('bullet_shot');
  },
  playWall: function playWall() {
    this.playSFX('bullet_hit_1');
  },
  playTuWall: function playTuWall() {
    this.playSFX('bullet_hit_2');
  },
  playTank: function playTank() {
    var name = 'explosion_';
    var random = parseInt(Math.random() * 10);
    if (random <= 5) {
      name += 1;
    } else {
      name += 2;
    }
    this.playSFX(name);
  },
  playGameOver: function playGameOver() {
    this.playSFX('game_over');
  },
  playResult: function playResult() {
    this.playSFX('statistics_1');
  },
  playPowerupAppear: function playPowerupAppear() {
    this.playSFX('powerup_appear');
  },
  playPowerupPick: function playPowerupPick() {
    this.playSFX('powerup_pick');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEF1ZGlvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmdtQXVkaW9JRCIsImluaXQiLCJnZXRVcmwiLCJ1cmwiLCJwbGF5QkdNIiwiaW5kZXgiLCJzdG9wQkdNIiwicGxheVNGWCIsImF1ZGlvVXJsIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwYXVzZUFsbCIsInJlc3VtZUFsbCIsInBsYXlTdGFydCIsInBsYXlGaXJlIiwicGxheVdhbGwiLCJwbGF5VHVXYWxsIiwicGxheVRhbmsiLCJuYW1lIiwicmFuZG9tIiwicGFyc2VJbnQiLCJNYXRoIiwicGxheUdhbWVPdmVyIiwicGxheVJlc3VsdCIsInBsYXlQb3dlcnVwQXBwZWFyIiwicGxheVBvd2VydXBQaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBOztJQUVBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEIsQ0FBQzs7RUFFRDtFQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZLENBRWxCLENBQUM7RUFDRCxXQUNBQyxNQUFNLFdBQUFBLE9BQUNDLEdBQUcsRUFBQztJQUNQO0lBQ0EsT0FBTyxRQUFRLEdBQUdBLEdBQUcsRUFBQztFQUMxQixDQUFDO0VBQ0QsV0FDQUMsT0FBTyxXQUFBQSxRQUFDQyxLQUFLLEVBQUM7O0lBRVY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0g7RUFDREMsT0FBTyxXQUFBQSxRQUFBLEVBQUU7SUFDTDtFQUFBLENBQ0g7RUFDRDtFQUNBQyxPQUFPLEVBQUMsU0FBQUEsUUFBU0osR0FBRyxFQUFDO0lBQ2pCLElBQUlLLFFBQVEsR0FBRyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO0lBQy9CO0lBQ0FQLEVBQUUsQ0FBQ2EsTUFBTSxDQUFDQyxPQUFPLENBQUNGLFFBQVEsRUFBRVosRUFBRSxDQUFDZSxTQUFTLEVBQUUsVUFBVUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7TUFDM0RqQixFQUFFLENBQUNrQixXQUFXLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNELFNBQ0FHLFFBQVEsV0FBQUEsU0FBQSxFQUFFO0lBQ05wQixFQUFFLENBQUNrQixXQUFXLENBQUNFLFFBQVEsRUFBRTtFQUM3QixDQUFDO0VBQ0QsU0FDQUMsU0FBUyxXQUFBQSxVQUFBLEVBQUU7SUFDUHJCLEVBQUUsQ0FBQ2tCLFdBQVcsQ0FBQ0csU0FBUyxFQUFFO0VBQzlCLENBQUM7RUFFREMsU0FBUyxXQUFBQSxVQUFBLEVBQUU7SUFDUCxJQUFJLENBQUNYLE9BQU8sQ0FBQyxhQUFhLENBQUM7RUFDL0IsQ0FBQztFQUVEWSxRQUFRLFdBQUFBLFNBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ1osT0FBTyxDQUFDLGFBQWEsQ0FBQztFQUMvQixDQUFDO0VBRURhLFFBQVEsV0FBQUEsU0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDYixPQUFPLENBQUMsY0FBYyxDQUFDO0VBQ2hDLENBQUM7RUFFRGMsVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNkLE9BQU8sQ0FBQyxjQUFjLENBQUM7RUFDaEMsQ0FBQztFQUVEZSxRQUFRLFdBQUFBLFNBQUEsRUFBRztJQUNQLElBQUlDLElBQUksR0FBRyxZQUFZO0lBQ3ZCLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxJQUFJLENBQUNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN6QyxJQUFJQSxNQUFNLElBQUksQ0FBQyxFQUFDO01BQ1pELElBQUksSUFBSSxDQUFDO0lBQ2IsQ0FBQyxNQUNJO01BQ0RBLElBQUksSUFBSSxDQUFDO0lBQ2I7SUFDQSxJQUFJLENBQUNoQixPQUFPLENBQUNnQixJQUFJLENBQUM7RUFDdEIsQ0FBQztFQUVESSxZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWLElBQUksQ0FBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUM7RUFDN0IsQ0FBQztFQUVEcUIsVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNyQixPQUFPLENBQUMsY0FBYyxDQUFDO0VBQ2hDLENBQUM7RUFFRHNCLGlCQUFpQixXQUFBQSxrQkFBQSxFQUFHO0lBQ2hCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztFQUNsQyxDQUFDO0VBRUR1QixlQUFlLFdBQUFBLGdCQUFBLEVBQUc7SUFDZCxJQUFJLENBQUN2QixPQUFPLENBQUMsY0FBYyxDQUFDO0VBQ2hDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Z+z6aKR5o6n5Yi257G7XHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGJnbVZvbHVtZToxLjAsLy/og4zmma/pn7Pph49cclxuICAgICAgICAvLyBzZnhWb2x1bWU6MS4wLC8v6Z+z5pWI6Z+z6YePXHJcbiAgICAgICAgLy8gaXNPcGVuU291bmQ6dHJ1ZSwvL+aYr+WQpuW8gOWni+WjsOmfs1xyXG5cclxuICAgICAgICBiZ21BdWRpb0lEOi0xLC8v6IOM5pmv6Z+z5LmQaWRcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgLyoq6I635Y+W5aOw6Z+z5Zyw5Z2AKi9cclxuICAgIGdldFVybCh1cmwpe1xyXG4gICAgICAgIC8vIHJldHVybiBjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL1wiICsgdXJsICsgXCIub2dnXCIpO1xyXG4gICAgICAgIHJldHVybiBcInNvdW5kL1wiICsgdXJsIC8vKyBcIi5vZ2dcIlxyXG4gICAgfSxcclxuICAgIC8qKuaSreaUvuiDjOaZr+mfs+S5kCovXHJcbiAgICBwbGF5QkdNKGluZGV4KXtcclxuICAgICAgICBcclxuICAgICAgICAvLyBsZXQgYXVkaW9VcmwgPSB0aGlzLmdldFVybCgnYmcnK2luZGV4KTtcclxuICAgICAgICAvLyBpZih0aGlzLmJnbUF1ZGlvSUQgPj0gMCl7XHJcbiAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5iZ21BdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgdHJ1ZSwgMSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcEJHTSgpe1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iZ21BdWRpb0lEKTtcclxuICAgIH0sXHJcbiAgICAvKirmkq3mlL7pn7PmlYgqL1xyXG4gICAgcGxheVNGWDpmdW5jdGlvbih1cmwpe1xyXG4gICAgICAgIGxldCBhdWRpb1VybCA9IHRoaXMuZ2V0VXJsKHVybCk7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb1VybCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGF1ZGlvVXJsLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLyoq5pqC5YGc5omA5pyJKi9cclxuICAgIHBhdXNlQWxsKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgIH0sXHJcbiAgICAvKirph43lkK/miYDmnIkqL1xyXG4gICAgcmVzdW1lQWxsKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICB9LFxyXG4gICBcclxuICAgIHBsYXlTdGFydCgpe1xyXG4gICAgICAgIHRoaXMucGxheVNGWCgnc3RhZ2Vfc3RhcnQnKVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5RmlyZSgpe1xyXG4gICAgICAgIHRoaXMucGxheVNGWCgnYnVsbGV0X3Nob3QnKVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5V2FsbCAoKXtcclxuICAgICAgICB0aGlzLnBsYXlTRlgoJ2J1bGxldF9oaXRfMScpXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlUdVdhbGwgKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5U0ZYKCdidWxsZXRfaGl0XzInKVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5VGFuayAoKXtcclxuICAgICAgICBsZXQgbmFtZSA9ICdleHBsb3Npb25fJ1xyXG4gICAgICAgIGxldCByYW5kb20gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgaWYgKHJhbmRvbSA8PSA1KXtcclxuICAgICAgICAgICAgbmFtZSArPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lICs9IDJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5U0ZYKG5hbWUpXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlHYW1lT3Zlcigpe1xyXG4gICAgICAgIHRoaXMucGxheVNGWCgnZ2FtZV9vdmVyJylcclxuICAgIH0sXHJcblxyXG4gICAgcGxheVJlc3VsdCAoKXtcclxuICAgICAgICB0aGlzLnBsYXlTRlgoJ3N0YXRpc3RpY3NfMScpXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlQb3dlcnVwQXBwZWFyICgpe1xyXG4gICAgICAgIHRoaXMucGxheVNGWCgncG93ZXJ1cF9hcHBlYXInKVxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5UG93ZXJ1cFBpY2sgKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5U0ZYKCdwb3dlcnVwX3BpY2snKVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/fire_flower.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17a04dOImlBAox21C2ou+Ra', 'fire_flower');
// Script/game/fire_flower.js

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
    this.data = data;
    var anim = this.getComponent(cc.Animation);
    anim.play('fire_flower_1');
    if (this.data.collision_tuwall) {
      if (!this.data.is_enemy) {
        cc.vv.Audio.playTuWall();
      }
    } else if (this.data.collision_wall) {
      if (!this.data.is_enemy) {
        cc.vv.Audio.playWall();
      }
    } else if (this.data.collision_tank) {
      cc.vv.Audio.playTank();
    }
  },
  fireEnd: function fireEnd() {
    this.node.destroy();
  },
  onDestroy: function onDestroy() {
    // console.log('fire flower destroy')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxmaXJlX2Zsb3dlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5pdCIsImRhdGEiLCJhbmltIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicGxheSIsImNvbGxpc2lvbl90dXdhbGwiLCJpc19lbmVteSIsInZ2IiwiQXVkaW8iLCJwbGF5VHVXYWxsIiwiY29sbGlzaW9uX3dhbGwiLCJwbGF5V2FsbCIsImNvbGxpc2lvbl90YW5rIiwicGxheVRhbmsiLCJmaXJlRW5kIiwibm9kZSIsImRlc3Ryb3kiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUEsQ0FDSDtFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FDVCxDQUFDO0VBRURDLElBQUksV0FBQUEsS0FBQ0MsSUFBSSxFQUFDO0lBQ04sSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDUixFQUFFLENBQUNTLFNBQVMsQ0FBQztJQUMxQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzFCLElBQUksSUFBSSxDQUFDSixJQUFJLENBQUNLLGdCQUFnQixFQUFDO01BQzNCLElBQUksQ0FBQyxJQUFJLENBQUNMLElBQUksQ0FBQ00sUUFBUSxFQUFDO1FBQ3BCWixFQUFFLENBQUNhLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEVBQUU7TUFDNUI7SUFDSixDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNULElBQUksQ0FBQ1UsY0FBYyxFQUFDO01BQzlCLElBQUksQ0FBQyxJQUFJLENBQUNWLElBQUksQ0FBQ00sUUFBUSxFQUFDO1FBQ3BCWixFQUFFLENBQUNhLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDRyxRQUFRLEVBQUU7TUFDMUI7SUFDSixDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNYLElBQUksQ0FBQ1ksY0FBYyxFQUFDO01BQzlCbEIsRUFBRSxDQUFDYSxFQUFFLENBQUNDLEtBQUssQ0FBQ0ssUUFBUSxFQUFFO0lBQzFCO0VBQ0osQ0FBQztFQUVEQyxPQUFPLFdBQUFBLFFBQUEsRUFBRTtJQUNMLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUVEQyxTQUFTLFdBQUFBLFVBQUEsRUFBRTtJQUNQO0VBQUE7QUFHUixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgYW5pbS5wbGF5KCdmaXJlX2Zsb3dlcl8xJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jb2xsaXNpb25fdHV3YWxsKXtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNfZW5lbXkpe1xyXG4gICAgICAgICAgICAgICAgY2MudnYuQXVkaW8ucGxheVR1V2FsbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLmNvbGxpc2lvbl93YWxsKXtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNfZW5lbXkpe1xyXG4gICAgICAgICAgICAgICAgY2MudnYuQXVkaW8ucGxheVdhbGwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5jb2xsaXNpb25fdGFuayl7XHJcbiAgICAgICAgICAgIGNjLnZ2LkF1ZGlvLnBsYXlUYW5rKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGZpcmVFbmQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJlIGZsb3dlciBkZXN0cm95JylcclxuICAgICAgICBcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/appear.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fcf0zoFxFMZIBBaUHIy3LA', 'appear');
// Script/game/appear.js

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
    var is_enemy = data.is_enemy;
    var callback = data.callback;
    var animation = this.getComponent(cc.Animation);
    animation.play('appear');
    this.scheduleOnce(function () {
      callback();
      _this.node.destroy();
    }, 1.5);
  },
  onDestroy: function onDestroy() {
    console.log('appear destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxhcHBlYXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImluaXQiLCJkYXRhIiwiX3RoaXMiLCJpc19lbmVteSIsImNhbGxiYWNrIiwiYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicGxheSIsInNjaGVkdWxlT25jZSIsIm5vZGUiLCJkZXN0cm95Iiwib25EZXN0cm95IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQSxDQUNIO0VBRUQ7RUFFQTtFQUVBQyxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUdULENBQUM7RUFFREMsSUFBSSxXQUFBQSxLQUFDQyxJQUFJLEVBQUM7SUFBQSxJQUFBQyxLQUFBO0lBQ04sSUFBSUMsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQVE7SUFDNUIsSUFBSUMsUUFBUSxHQUFHSCxJQUFJLENBQUNHLFFBQVE7SUFDNUIsSUFBSUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDWCxFQUFFLENBQUNZLFNBQVMsQ0FBQztJQUMvQ0YsU0FBUyxDQUFDRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXhCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFlBQUk7TUFDbEJMLFFBQVEsRUFBRTtNQUNWRixLQUFJLENBQUNRLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDO0VBRURDLFNBQVMsV0FBQUEsVUFBQSxFQUFFO0lBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQ2pDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoZGF0YSl7XHJcbiAgICAgICAgbGV0IGlzX2VuZW15ID0gZGF0YS5pc19lbmVteVxyXG4gICAgICAgIGxldCBjYWxsYmFjayA9IGRhdGEuY2FsbGJhY2tcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCdhcHBlYXInKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcGVhciBkZXN0cm95JylcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/home_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1fc5/XUiJJF4/aBhASml/p', 'home_control');
// Script/home_control.js

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

    hoverColor: cc.Color,
    defaultColor: cc.Color
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.currentIndex = 0;
    this.initContent();

    // Listen for keyboard events
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {
    cc.vv = {};
    var Enum = require('Enum');
    cc.vv.Enum = new Enum();
    var Global = require('Global');
    cc.vv.Global = new Global();
    var Config = require('Config');
    cc.vv.Config = new Config();
    var UserInfo = require('UserInfo');
    cc.vv.UserInfo = new UserInfo();
    var Tools = require('Tools');
    cc.vv.Tools = new Tools();
    var Audio = require('Audio');
    cc.vv.Audio = new Audio();
  },
  onDestroy: function onDestroy() {
    // Clean up the event listener when the component is destroyed
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    console.log('home destroy');
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        this.currentIndex = (this.currentIndex - 1 + this.buttons.length) % this.buttons.length;
        this.updateButtonState();
        break;
      case cc.macro.KEY.down:
        this.currentIndex = (this.currentIndex + 1) % this.buttons.length;
        this.updateButtonState();
        break;
      case cc.macro.KEY.enter:
        this.selectButton();
        break;
    }
  },
  updateButtonState: function updateButtonState() {
    var _this = this;
    // Lấy tất cả các button trong scene
    this.buttons = cc.find('Canvas/Buttons').getComponentsInChildren(cc.Button);

    // Reset all buttons to normal state
    this.buttons.forEach(function (button, index) {
      var label = button.node.getComponentInChildren(cc.Label);
      var pick = button.node.getChildByName('Background').getChildByName('TankPick');
      if (label) {
        if (index == _this.currentIndex) {
          label.node.color = _this.hoverColor;
          pick.active = true;
        } else {
          label.node.color = _this.defaultColor;
          pick.active = false;
        }
        ;
      }

      // button.getComponent(cc.Button).interactable = (index == this.currentIndex)
      // button.opacity = (index == this.currentIndex) ? 255 : 150 // Change opacity to indicate selected button
    });
  },
  selectButton: function selectButton() {
    // Perform the action for the currently selected button
    switch (this.currentIndex) {
      case 0:
        cc.log("1 Player selected");
        this.loadScene(0, 'game_scene');
        break;
      case 1:
        cc.log("2 Player selected");
        break;
      case 2:
        cc.log("Constructor selected");
        break;
      case 3:
        cc.log('Return menu selected');
        this.loadScene(3, 'login_scene');
        break;
    }
  },
  loadScene: function loadScene(index, scene) {
    this.armatureDisplay = this.buttons[index].node.getChildByName('Background').getChildByName('TankPick').getComponent(dragonBones.ArmatureDisplay);

    // Kiểm tra nếu armatureDisplay tồn tại và có animation 'Picked'
    if (this.armatureDisplay && this.armatureDisplay.armature().animation.hasAnimation('Picked')) {
      this.armatureDisplay.playAnimation('Picked', 1);
      this.armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function () {
        // Sau khi animation kết thúc, chuyển scene
        cc.director.loadScene(scene);
      }, this);
    } else {
      cc.log("Không tìm thấy Armature hoặc Animation 'Picked'");
    }
  },
  initContent: function initContent() {
    this.updateButtonState();
    this.updateButtonEvent();
  },
  updateButtonEvent: function updateButtonEvent() {
    var _this2 = this;
    this.buttons = cc.find('Canvas/Buttons').getComponentsInChildren(cc.Button);
    this.buttons.forEach(function (button, index) {
      button.node.on('click', _this2.onButtonClicked.bind(_this2, index), _this2);
    });
  },
  onButtonClicked: function onButtonClicked(index) {
    cc.log("Button clicked: " + index);
    // Xử lý sự kiện khi click vào button
    this.currentIndex = index;
    this.updateButtonState();
    this.selectButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxob21lX2NvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob3ZlckNvbG9yIiwiQ29sb3IiLCJkZWZhdWx0Q29sb3IiLCJvbkxvYWQiLCJjdXJyZW50SW5kZXgiLCJpbml0Q29udGVudCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic3RhcnQiLCJ2diIsIkVudW0iLCJyZXF1aXJlIiwiR2xvYmFsIiwiQ29uZmlnIiwiVXNlckluZm8iLCJUb29scyIsIkF1ZGlvIiwib25EZXN0cm95Iiwib2ZmIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidXAiLCJidXR0b25zIiwibGVuZ3RoIiwidXBkYXRlQnV0dG9uU3RhdGUiLCJkb3duIiwiZW50ZXIiLCJzZWxlY3RCdXR0b24iLCJfdGhpcyIsImZpbmQiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsIkJ1dHRvbiIsImZvckVhY2giLCJidXR0b24iLCJpbmRleCIsImxhYmVsIiwibm9kZSIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJMYWJlbCIsInBpY2siLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYWN0aXZlIiwibG9hZFNjZW5lIiwic2NlbmUiLCJhcm1hdHVyZURpc3BsYXkiLCJnZXRDb21wb25lbnQiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsImFybWF0dXJlIiwiYW5pbWF0aW9uIiwiaGFzQW5pbWF0aW9uIiwicGxheUFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudE9iamVjdCIsIkNPTVBMRVRFIiwiZGlyZWN0b3IiLCJ1cGRhdGVCdXR0b25FdmVudCIsIl90aGlzMiIsIm9uQnV0dG9uQ2xpY2tlZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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TTtNQUNIeEQsRUFBRSxDQUFDNEIsR0FBRyxDQUFDLGlEQUFpRCxDQUFDO0lBQzdEO0VBQ0osQ0FBQztFQUVEbkIsV0FBVyxXQUFBQSxZQUFBLEVBQUU7SUFFVCxJQUFJLENBQUMyQixpQkFBaUIsRUFBRTtJQUN4QixJQUFJLENBQUNpQyxpQkFBaUIsRUFBRTtFQUU1QixDQUFDO0VBRURBLGlCQUFpQixXQUFBQSxrQkFBQSxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUNmLElBQUksQ0FBQ3BDLE9BQU8sR0FBR2xDLEVBQUUsQ0FBQ3lDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyx1QkFBdUIsQ0FBQzFDLEVBQUUsQ0FBQzJDLE1BQU0sQ0FBQztJQUMzRSxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFLO01BQ3BDRCxNQUFNLENBQUNHLElBQUksQ0FBQ3JDLEVBQUUsQ0FBQyxPQUFPLEVBQUUyRCxNQUFJLENBQUNDLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDRixNQUFJLEVBQUV4QixLQUFLLENBQUMsRUFBRXdCLE1BQUksQ0FBQztJQUN6RSxDQUFDLENBQUM7RUFJTixDQUFDO0VBQ0RDLGVBQWUsRUFBRSxTQUFBQSxnQkFBU3pCLEtBQUssRUFBRTtJQUM3QjlDLEVBQUUsQ0FBQzRCLEdBQUcsQ0FBQyxrQkFBa0IsR0FBR2tCLEtBQUssQ0FBQztJQUNsQztJQUNBLElBQUksQ0FBQ3RDLFlBQVksR0FBR3NDLEtBQUs7SUFDekIsSUFBSSxDQUFDVixpQkFBaUIsRUFBRTtJQUN4QixJQUFJLENBQUNHLFlBQVksRUFBRTtFQUN2QjtBQUtKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAgaG92ZXJDb2xvcjogY2MuQ29sb3IsXHJcbiAgICAgICAgZGVmYXVsdENvbG9yOiBjYy5Db2xvcixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmluaXRDb250ZW50KClcclxuXHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlib2FyZCBldmVudHNcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLnZ2ID0ge31cclxuXHJcbiAgICAgICAgbGV0IEVudW0gPSByZXF1aXJlKCdFbnVtJylcclxuICAgICAgICBjYy52di5FbnVtID0gbmV3IEVudW0oKVxyXG4gICAgICAgIGxldCBHbG9iYWwgPSByZXF1aXJlKCdHbG9iYWwnKVxyXG4gICAgICAgIGNjLnZ2Lkdsb2JhbCA9IG5ldyBHbG9iYWwoKVxyXG4gICAgICAgIGxldCBDb25maWcgPSByZXF1aXJlKCdDb25maWcnKVxyXG4gICAgICAgIGNjLnZ2LkNvbmZpZyA9IG5ldyBDb25maWcoKVxyXG4gICAgICAgIGxldCBVc2VySW5mbyA9IHJlcXVpcmUoJ1VzZXJJbmZvJylcclxuICAgICAgICBjYy52di5Vc2VySW5mbyA9IG5ldyBVc2VySW5mbygpXHJcbiAgICAgICAgbGV0IFRvb2xzID0gcmVxdWlyZSgnVG9vbHMnKVxyXG4gICAgICAgIGNjLnZ2LlRvb2xzID0gbmV3IFRvb2xzKClcclxuICAgICAgICBsZXQgQXVkaW8gPSByZXF1aXJlKCdBdWRpbycpXHJcbiAgICAgICAgY2MudnYuQXVkaW8gPSBuZXcgQXVkaW8oKVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdob21lIGRlc3Ryb3knKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gKHRoaXMuY3VycmVudEluZGV4IC0gMSArIHRoaXMuYnV0dG9ucy5sZW5ndGgpICUgdGhpcy5idXR0b25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAodGhpcy5jdXJyZW50SW5kZXggKyAxKSAlIHRoaXMuYnV0dG9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uU3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZW50ZXI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJ1dHRvbigpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBjw6FjIGJ1dHRvbiB0cm9uZyBzY2VuZVxyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGNjLmZpbmQoJ0NhbnZhcy9CdXR0b25zJykuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQnV0dG9uKVxyXG5cclxuICAgICAgICAvLyBSZXNldCBhbGwgYnV0dG9ucyB0byBub3JtYWwgc3RhdGVcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBidXR0b24ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBsZXQgcGljayA9IGJ1dHRvbi5ub2RlLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuZ2V0Q2hpbGRCeU5hbWUoJ1RhbmtQaWNrJylcclxuXHJcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT0gdGhpcy5jdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IHRoaXMuaG92ZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2suYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICBwaWNrLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBidXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gKGluZGV4ID09IHRoaXMuY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAvLyBidXR0b24ub3BhY2l0eSA9IChpbmRleCA9PSB0aGlzLmN1cnJlbnRJbmRleCkgPyAyNTUgOiAxNTAgLy8gQ2hhbmdlIG9wYWNpdHkgdG8gaW5kaWNhdGUgc2VsZWN0ZWQgYnV0dG9uXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0QnV0dG9uKCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gdGhlIGFjdGlvbiBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBidXR0b25cclxuICAgICAgICBzd2l0Y2godGhpcy5jdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiMSBQbGF5ZXIgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTY2VuZSgwLCAnZ2FtZV9zY2VuZScpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiMiBQbGF5ZXIgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiQ29uc3RydWN0b3Igc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOiBcclxuICAgICAgICAgICAgICAgIGNjLmxvZygnUmV0dXJuIG1lbnUgc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoMywgJ2xvZ2luX3NjZW5lJylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkU2NlbmUoaW5kZXgsIHNjZW5lKXtcclxuICAgICAgICB0aGlzLmFybWF0dXJlRGlzcGxheSA9IHRoaXMuYnV0dG9uc1tpbmRleF0ubm9kZS5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLlxyXG4gICAgICAgICAgICBnZXRDaGlsZEJ5TmFtZSgnVGFua1BpY2snKS5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxyXG5cclxuICAgICAgICAvLyBLaeG7g20gdHJhIG7hur91IGFybWF0dXJlRGlzcGxheSB04buTbiB04bqhaSB2w6AgY8OzIGFuaW1hdGlvbiAnUGlja2VkJ1xyXG4gICAgICAgIGlmICh0aGlzLmFybWF0dXJlRGlzcGxheSAmJiB0aGlzLmFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLmFuaW1hdGlvbi5oYXNBbmltYXRpb24oJ1BpY2tlZCcpKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmFybWF0dXJlRGlzcGxheS5wbGF5QW5pbWF0aW9uKCdQaWNrZWQnLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5hcm1hdHVyZURpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2F1IGtoaSBhbmltYXRpb24ga+G6v3QgdGjDumMsIGNodXnhu4NuIHNjZW5lXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJLaMO0bmcgdMOsbSB0aOG6pXkgQXJtYXR1cmUgaG/hurdjIEFuaW1hdGlvbiAnUGlja2VkJ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRDb250ZW50KCl7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uU3RhdGUoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uRXZlbnQoKVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVCdXR0b25FdmVudCgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGNjLmZpbmQoJ0NhbnZhcy9CdXR0b25zJykuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMub25CdXR0b25DbGlja2VkLmJpbmQodGhpcywgaW5kZXgpLCB0aGlzKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9LFxyXG4gICAgb25CdXR0b25DbGlja2VkOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIGNjLmxvZyhcIkJ1dHRvbiBjbGlja2VkOiBcIiArIGluZGV4KTtcclxuICAgICAgICAvLyBY4butIGzDvSBz4buxIGtp4buHbiBraGkgY2xpY2sgdsOgbyBidXR0b25cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RCdXR0b24oKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/game_over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcaccyN+BFIALfkom/u2qqM', 'game_over');
// Script/ui/game_over.js

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
  start: function start() {
    cc.vv.Audio.playGameOver();
    this.scheduleOnce(function () {
      // this.node.destroy()

      cc.director.loadScene('home_scene');
    }, 2);
  },
  // update (dt) {},
  onDestroy: function onDestroy() {
    console.log('game over destroy');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxcZ2FtZV9vdmVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJ2diIsIkF1ZGlvIiwicGxheUdhbWVPdmVyIiwic2NoZWR1bGVPbmNlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0g7RUFFRDtFQUVBO0VBRUFDLEtBQUssV0FBQUEsTUFBQSxFQUFJO0lBQ0xKLEVBQUUsQ0FBQ0ssRUFBRSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtJQUMxQixJQUFJLENBQUNDLFlBQVksQ0FBQyxZQUFJO01BQ2xCOztNQUVBUixFQUFFLENBQUNTLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQztFQUVEO0VBQ0FDLFNBQVMsV0FBQUEsVUFBQSxFQUFFO0lBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQ3BDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy52di5BdWRpby5wbGF5R2FtZU92ZXIoKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KClcclxuXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZV9zY2VuZScpXHJcbiAgICAgICAgfSwgMilcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBvdmVyIGRlc3Ryb3knKVxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
