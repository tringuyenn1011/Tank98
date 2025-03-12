
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