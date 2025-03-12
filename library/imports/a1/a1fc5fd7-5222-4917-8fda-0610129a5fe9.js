"use strict";
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