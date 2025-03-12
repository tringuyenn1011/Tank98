"use strict";
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