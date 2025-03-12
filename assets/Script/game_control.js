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
    up : 0,
    right : 1,
    down : 2,
    left : 3,
    no : 4,
})


cc.Class({
    extends: cc.Component,

    properties: {
        // game_map: cc.Node,
        game_maps: cc.Node,
        direction: cc.Node,
        fire_btn: cc.Node,
        game_info: cc.Node,

        shield_prefab: cc.Prefab,
        appear_prefab: cc.Prefab,
        bullet_prefab: cc.Prefab,
        enemy_tank_prefab: cc.Prefab,
        player_tank_prefab: cc.Prefab,
        fire_flower_prefab: cc.Prefab,
        props_prefab: cc.Prefab,

        game_map_prefab: cc.Prefab,

        toast: cc.Prefab,
        game_result: cc.Prefab,
        game_over: cc.Prefab,
        game_stage: cc.Prefab,
        point_prefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.vv.Global.game = this

        this.startGame()
    },

    startGame (){
        cc.vv.Global.stage_info = cc.vv.Config.stage['stage_'+cc.vv.UserInfo.level]()
        cc.vv.Global.die_tank = {
            tank_1 : 0,
            tank_2 : 0,
            tank_3 : 0,
            tank_4 : 0,
        }

        cc.vv.Global.tieqiao_time = null
        cc.vv.Global.dinglei_time = null

        this.is_pause = true
        this.is_over = true
        this.is_enemy_tank_pause = false
        this.is_show_over = false

        this.props = null
        this.player_direction = TagOfDirection.no
        this.enemy_index = 0
        this.enemy_tank_arr = []
        this.bullet_arr = []

        this.frame_count = 0
        cc.vv.Global.enemy_count = 20

        this.game_maps.destroyAllChildren()
        this.game_map = cc.instantiate(this.game_map_prefab)
        this.game_maps.addChild(this.game_map)
        
        this.map = this.game_map.getComponent('game_map')
        this.map.initMap()

        if (this.player){
            cc.vv.UserInfo.live++
            let data = {
                moveSpeed : this.player.moveSpeed,
                fireSpeed : this.player.fireSpeed,
                tank_level : this.player.tank_level,
            }
            this.player = this.map.initPlayer(data)
            this.player_direction = TagOfDirection.no
        }
        this.initView()

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        let result = cc.instantiate(this.game_stage)
        this.node.addChild(result)
    },

    initView(){
        let x = 0
        let y = 0
        let enemys = this.game_info.getChildByName('enemys')
        // let ip = this.game_info.getChildByName('ip')
        // let live_tank = this.game_info.getChildByName('live_tank')
        let live_count = this.game_info.getChildByName('live_count')
        // let flag = this.game_info.getChildByName('flag')
        let level = this.game_info.getChildByName('level')
        x =/* (cc.winSize.width - this.game_map.width) / 4 +*/ this.game_map.width / 2 + 30
        y = cc.winSize.height / 2 - 5
        for (let i=0;i<enemys.childrenCount;i++){
            // if (i%2==0){
            //     y -= 15
            // }
            // let temp_x = x
            // if (i%2==1){
            //     temp_x -= 8
            // }
            // else {
            //     temp_x += 8
            // }
            let enemy = enemys.children[i]
            // enemy.position = cc.v2(temp_x, y)
            enemy.active = false
        }
        for (let i=0;i<cc.vv.Global.enemy_count;i++){
            let enemy = enemys.children[i]
            enemy.active = true
        }

        y = 15
        // ip.position = cc.v2(x, y)
        // live_tank.position = cc.v2(x-10, y-20)
        // live_count.position = cc.v2(x+10, y-20)

        // flag.position = cc.v2(x, y-60)
        // level.position = cc.v2(x+10, y-80)

        x = (cc.winSize.width - this.game_map.width) / 4 + this.game_map.width / 2
        y = cc.winSize.height * 0.25
        // this.direction.position = cc.v2(-x, -y)
        // this.fire_btn.position = cc.v2(x, -y)

        live_count.getComponent(cc.Label).string = cc.vv.UserInfo.live
        level.getComponent(cc.Label).string = cc.vv.UserInfo.level
    },

    initTank (){
        if (!this.player){
            let data = {
                moveSpeed : 1.2,
                fireSpeed : 3,
                tank_level : 3
            }
            this.player = this.map.initPlayer()
            this.player_direction = TagOfDirection.no
        }
        if (this.enemy_tank_arr.length < 4){
            this.enemy_tank_arr.push(this.map.initEnemy())
        }
    },

    onClickBack (){
        cc.director.loadScene('home_scene')
    },

    checkBullet (){
        for (let i=0;i<this.bullet_arr.length;i++){
            if (!this.bullet_arr[i].isValid){
                this.bullet_arr.splice(i, 1)
                i--
            }
        }
    },

    checkEnemyTank (){
        for (let i=0;i<this.enemy_tank_arr.length;i++){
            if (!this.enemy_tank_arr[i] || !this.enemy_tank_arr[i].node || !this.enemy_tank_arr[i].node.isValid){
                this.enemy_tank_arr.splice(i, 1)
                i--
            }
        }
    },

    checkPlayerTank (){
        if (!this.player || !this.player.node || !this.player.node.isValid){
            this.player = null
        }
    },

    onKeyDown (event) {
        if (!this.player || !this.player.node || !this.player.node.isValid){
            return
        }
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                this.player.onFire()
                break
            case cc.macro.KEY.left:
                this.player_direction = TagOfDirection.left
                break;
            case cc.macro.KEY.down:
                this.player_direction = TagOfDirection.down
                break
            case cc.macro.KEY.right:
                this.player_direction = TagOfDirection.right
                break
            case cc.macro.KEY.up:
                this.player_direction = TagOfDirection.up
                break
        }
    },
    
    onKeyUp (event) {
        if (!this.player || !this.player.node || !this.player.node.isValid){
            return
        }
        this.player_direction = TagOfDirection.no
    },

    update(dt){
        if (this.is_pause) return
        this.frame_count ++
        this.initView()
        this.initTank()
        this.checkBullet()
        this.checkEnemyTank()
        this.checkPlayerTank()

        // 铁锹 -- Hết thời gian của chức năng xẻng - Tòa thành ko phá vỡ
        if (cc.vv.Global.tieqiao_time){
           
            let time = new Date().getTime()
            if ((time - cc.vv.Global.tieqiao_time) / 1000 >= 15){
                this.map.bg2.node.active = false
                cc.vv.Global.tieqiao_time = null
            }
            else if ((time - cc.vv.Global.tieqiao_time) / 1000 >= 10){
                if (this.frame_count % 20 == 0){
                    this.map.bg2.node.active = !this.map.bg2.node.active
                    this.map.repairHome()
                }
            }
            else {
                this.map.bg2.node.active = true
            }
        }
        // 定雷 -- nhặt được cái đồng hồ - enemy đứng lại hết
        if (cc.vv.Global.dinglei_time){
            this.is_enemy_tank_pause = true
            let time = new Date().getTime()
            if ((time - cc.vv.Global.dinglei_time) / 1000 >= 10){
                cc.vv.Global.dinglei_time = null
                this.is_enemy_tank_pause = false
            }
        }
        
        // 游戏结束 -- thua
        if (this.is_over && !this.is_show_over){
            this.is_show_over = true
            let data = {
                text : 'GAME OVER',
                state : 1
            }
            let toast = cc.instantiate(this.toast)
            this.node.addChild(toast)
            toast.getComponent('toast').init(data)
        }
        // 胜利 -- thắng
        if (this.enemy_tank_arr.length == 0 &&  cc.vv.Global.enemy_count <= 0 && !this.is_show_over){
            this.is_show_over = true
            this.is_over = true
            this.scheduleOnce(()=>{
                let data = {
                    status : 1
                }
                let result = cc.instantiate(this.game_result)
                this.node.addChild(result)
                result.getComponent('game_result').init(data)
            }, 5)
        }
        if (this.player && this.player.node.active){
            if (this.player_direction == TagOfDirection.up){
                this.player.moveUp()
            }
            else if (this.player_direction == TagOfDirection.right){
                this.player.moveRight()
            }
            else if (this.player_direction == TagOfDirection.down){
                this.player.moveDown()
            }
            else if (this.player_direction == TagOfDirection.left){
                this.player.moveLeft()
            }
        }
    },
});
