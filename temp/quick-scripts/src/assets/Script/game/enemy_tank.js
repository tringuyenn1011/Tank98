"use strict";
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