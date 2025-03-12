
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