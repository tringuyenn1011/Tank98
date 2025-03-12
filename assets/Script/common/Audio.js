/**
 * 音频控制类
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // bgmVolume:1.0,//背景音量
        // sfxVolume:1.0,//音效音量
        // isOpenSound:true,//是否开始声音

        bgmAudioID:-1,//背景音乐id
    },

    // use this for initialization
    init: function () {
        
    },
    /**获取声音地址*/
    getUrl(url){
        // return cc.url.raw("resources/sound/" + url + ".ogg");
        return "sound/" + url //+ ".ogg"
    },
    /**播放背景音乐*/
    playBGM(index){
        
        // let audioUrl = this.getUrl('bg'+index);
        // if(this.bgmAudioID >= 0){
        //     cc.audioEngine.stop(this.bgmAudioID);
        // }
        // this.bgmAudioID = cc.audioEngine.play(audioUrl, true, 1);
    },
    stopBGM(){
        // cc.audioEngine.stop(this.bgmAudioID);
    },
    /**播放音效*/
    playSFX:function(url){
        let audioUrl = this.getUrl(url);
        // cc.audioEngine.play(audioUrl, false, 1);
        cc.loader.loadRes(audioUrl, cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 1);
        });
    },
    /**暂停所有*/
    pauseAll(){
        cc.audioEngine.pauseAll();
    },
    /**重启所有*/
    resumeAll(){
        cc.audioEngine.resumeAll();
    },
   
    playStart(){
        this.playSFX('stage_start')
    },

    playFire(){
        this.playSFX('bullet_shot')
    },

    playWall (){
        this.playSFX('bullet_hit_1')
    },

    playTuWall (){
        this.playSFX('bullet_hit_2')
    },

    playTank (){
        let name = 'explosion_'
        let random = parseInt(Math.random() * 10)
        if (random <= 5){
            name += 1
        }
        else {
            name += 2
        }
        this.playSFX(name)
    },

    playGameOver(){
        this.playSFX('game_over')
    },

    playResult (){
        this.playSFX('statistics_1')
    },

    playPowerupAppear (){
        this.playSFX('powerup_appear')
    },

    playPowerupPick (){
        this.playSFX('powerup_pick')
    },
});
