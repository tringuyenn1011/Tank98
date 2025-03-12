"use strict";
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