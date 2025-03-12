
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