
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