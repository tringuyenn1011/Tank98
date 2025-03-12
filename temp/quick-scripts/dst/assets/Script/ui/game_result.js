
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