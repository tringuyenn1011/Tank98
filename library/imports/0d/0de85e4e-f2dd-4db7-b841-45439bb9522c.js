"use strict";
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