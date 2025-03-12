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
})

cc.Class({
    extends: cc.Component,

    properties: {
        // bg1: cc.TiledLayer,
        // bg2: cc.TiledLayer,
        // bg3: cc.TiledLayer,
        // objects: cc.TiledObjectGroup,
        level_arr: [cc.TiledMapAsset]
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // this.tiledMap = this.node.getComponent(cc.TiledMap)
        // this.tiledMap.tmxAsset = this.level_arr[4]

        // this.bg1 = this.tiledMap.getLayer('bg1')
        // this.bg2 = this.tiledMap.getLayer('bg2')
        // this.bg3 = this.tiledMap.getLayer('bg3')
        // this.objects = this.tiledMap.getObjectGroup('objects')

        // this.home_wall_pos_arr = this.initHomeWall()
        // this.home_gid_pos_arr1 = []
        // this.home_gid_pos_arr2 = []
        // for (let i=0;i<this.home_wall_pos_arr.length;i++){
        //     this.home_gid_pos_arr1.push(this.bg1.getTileGIDAt(this.home_wall_pos_arr[i]))
        // }
        // for (let i=0;i<this.home_wall_pos_arr.length;i++){
        //     this.home_gid_pos_arr2.push(this.bg2.getTileGIDAt(this.home_wall_pos_arr[i]))
        // }
    },

    initMap(){
        this.tiledMap = this.node.getComponent(cc.TiledMap)
        this.tiledMap.tmxAsset = this.level_arr[cc.vv.UserInfo.level-1]

        this.bg1 = this.tiledMap.getLayer('bg1')
        this.bg2 = this.tiledMap.getLayer('bg2')
        this.bg3 = this.tiledMap.getLayer('bg3')
        this.objects = this.tiledMap.getObjectGroup('objects')

        // this.home_wall_pos_arr = this.initHomeWall()
        // this.home_gid_pos_arr1 = []
        // this.home_gid_pos_arr2 = []
        // for (let i=0;i<this.home_wall_pos_arr.length;i++){
        //     this.home_gid_pos_arr1.push(this.bg1.getTileGIDAt(this.home_wall_pos_arr[i]))
        // }
        // for (let i=0;i<this.home_wall_pos_arr.length;i++){
        //     this.home_gid_pos_arr2.push(this.bg2.getTileGIDAt(this.home_wall_pos_arr[i]))
        // }

        this.bg1.node.active = true
        this.bg2.node.active = false
        this.bg3.node.active = false

        let bornArray = this.objects.getObjects()
        // console.log(bornArray)
        let born0 = cc.v2(bornArray[0]["x"], bornArray[0]["y"]);
        let born1 = cc.v2(bornArray[1]["x"], bornArray[1]["y"]);
        let born2 = cc.v2(bornArray[2]["x"], bornArray[2]["y"]);
        let born3 = cc.v2(bornArray[3]["x"], bornArray[3]["y"]);
        let born4 = cc.v2(bornArray[4]["x"], bornArray[4]["y"]);
        let born5 = cc.v2(bornArray[5]["x"], bornArray[5]["y"]);
        let born6 = cc.v2(bornArray[6]["x"], bornArray[6]["y"]);
        let born7 = cc.v2(bornArray[7]["x"], bornArray[7]["y"]);
        let born8 = cc.v2(bornArray[8]["x"], bornArray[8]["y"]);
        let born9 = cc.v2(bornArray[9]["x"], bornArray[9]["y"]);
        let born10 = cc.v2(bornArray[10]["x"], bornArray[10]["y"]);
        let born11 = cc.v2(bornArray[11]["x"], bornArray[11]["y"]);
        let born12 = cc.v2(bornArray[12]["x"], bornArray[12]["y"]);
        let born13 = cc.v2(bornArray[13]["x"], bornArray[13]["y"]);
        let born14 = cc.v2(bornArray[14]["x"], bornArray[14]["y"]);

        console.log(born0.x, born0.y)

        this.player_pos = born0.add(cc.v2(42*0.5-4, -42*0.5+4))
        this.enemy_pos_arr = [
            born1.add(cc.v2(42*0.5+4, -42*0.5-4)),
            born2.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born3.add(cc.v2(42*0.5-4, -42*0.5-4)),
        ]
        this.props_pos_arr = [
            born4.add(cc.v2(42*0.5+4, -42*0.5-4)),
            born5.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born6.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born7.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born8.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born9.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born10.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born11.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born12.add(cc.v2(42*0.5-4, -42*0.5-4)),
            born13.add(cc.v2(42*0.5-4, -42*0.5-4)),
        ]
        this.home_pos = born14.add(cc.v2(42*0.5-4, -42*0.5+4))
    },

    initHomeWall (){
        let arr = []
        arr.push(cc.v2(22, 51))
        arr.push(cc.v2(23, 51))
        arr.push(cc.v2(28, 51))
        arr.push(cc.v2(29, 51))

        arr.push(cc.v2(22, 50))
        arr.push(cc.v2(23, 50))
        arr.push(cc.v2(28, 50))
        arr.push(cc.v2(29, 50))

        arr.push(cc.v2(22, 49))
        arr.push(cc.v2(23, 49))
        arr.push(cc.v2(28, 49))
        arr.push(cc.v2(29, 49))

        arr.push(cc.v2(22, 48))
        arr.push(cc.v2(23, 48))
        arr.push(cc.v2(28, 48))
        arr.push(cc.v2(29, 48))

        arr.push(cc.v2(22, 47))
        arr.push(cc.v2(23, 47))
        arr.push(cc.v2(24, 47))
        arr.push(cc.v2(25, 47))
        arr.push(cc.v2(26, 47))
        arr.push(cc.v2(27, 47))
        arr.push(cc.v2(28, 47))
        arr.push(cc.v2(29, 47))

        arr.push(cc.v2(22, 46))
        arr.push(cc.v2(23, 46))
        arr.push(cc.v2(24, 46))
        arr.push(cc.v2(25, 46))
        arr.push(cc.v2(26, 46))
        arr.push(cc.v2(27, 46))
        arr.push(cc.v2(28, 46))
        arr.push(cc.v2(29, 46))
        return arr
    },

    initPlayer(data){
        if (cc.vv.UserInfo.live <= 0) {
            cc.vv.Global.game.is_over = true
            return
        }
        let player = cc.instantiate(cc.vv.Global.game.player_tank_prefab)
        player.position = this.player_pos
        this.node.addChild(player, -1)
        player.active = false
        player.getComponent('player_tank').is_shield = true
        if (data){
            if (data.moveSpeed){
                player.getComponent('player_tank').moveSpeed = data.moveSpeed
            }
            if (data.fireSpeed){
                player.getComponent('player_tank').fireSpeed = data.fireSpeed
            }
            if (data.tank_level){
                player.getComponent('player_tank').tank_level = data.tank_level
            }
            player.getComponent('player_tank').changeTankValue()
        }
        
        let callback = ()=>{
            player.active = true
            let shield = cc.instantiate(cc.vv.Global.game.shield_prefab)
            player.addChild(shield)
            shield.getComponent('shield').init(player.getComponent('player_tank'))
        }

        data = {
            is_enemy : false,
            callback : callback
        }

        let appear = cc.instantiate(cc.vv.Global.game.appear_prefab)
        appear.position = this.player_pos
        this.node.addChild(appear)
        appear.getComponent('appear').init(data)

        return player.getComponent('player_tank')
    },

    initEnemy(){
        if (cc.vv.Global.enemy_count <= 0) return
        let enemy = cc.instantiate(cc.vv.Global.game.enemy_tank_prefab)
        enemy.position = this.enemy_pos_arr[cc.vv.Global.game.enemy_index]
        enemy.active = false
        this.node.addChild(enemy,-1)
        enemy.getComponent('enemy_tank').is_shield = true
        cc.vv.Global.game.enemy_index ++
        cc.vv.Global.enemy_count --
        if (cc.vv.Global.game.enemy_index >= 3){
            cc.vv.Global.game.enemy_index = 0
        }

        let callback = ()=>{
            enemy.active = true
            enemy.getComponent('enemy_tank').is_shield = false
        }

        let data = {
            is_enemy : true,
            callback : callback
        }

        let appear = cc.instantiate(cc.vv.Global.game.appear_prefab)
        appear.position = enemy.position
        this.node.addChild(appear)
        appear.getComponent('appear').init(data)

        return enemy.getComponent('enemy_tank')
    },

    initProps(){
        let pos = this.props_pos_arr[parseInt(Math.random() * this.props_pos_arr.length)]
        let props = cc.instantiate(cc.vv.Global.game.props_prefab)
        props.position = pos
        this.node.addChild(props)
        if (cc.vv.Global.game.props && cc.vv.Global.game.props.node && cc.vv.Global.game.props.node.active){
            cc.vv.Global.game.props.node.destroy()
        }
        cc.vv.Global.game.props = props.getComponent('props') 
    },

    addPoint (data){
        let point = cc.instantiate(cc.vv.Global.game.point_prefab)
        point.position = data.position
        this.node.addChild(point)
        let score = 0
        if (data.level == 1){
            score = 100
        }
        else if (data.level == 2){
            score = 200
        }
        else if (data.level == 3){
            score = 300
        }
        else if (data.level == 4){
            score = 400
        }
        else if (data.level == 5){
            score = 500
        }
        point.getComponent('point').init(score)
    },

    repairHome(){
        console.log('修复home')
        for (let i=0;i<this.home_wall_pos_arr.length;i++){
            this.bg1.setTileGIDAt(this.home_gid_pos_arr1[i], this.home_wall_pos_arr[i].x, this.home_wall_pos_arr[i].y, this.home_gid_pos_arr1[i])
            this.bg2.setTileGIDAt(this.home_gid_pos_arr2[i], this.home_wall_pos_arr[i].x, this.home_wall_pos_arr[i].y, this.home_gid_pos_arr2[i])
        }
    },

    getPosFromTiled(pos){
        if (pos.x < 0 || pos.y < 0){
            return cc.v2(0, 0)
        }
        let x = pos.x*14
        let y = (52-pos.y)*14
        return cc.v2(x, y)
    },

    getTiledRoundCoordinate:function (pos) {
        var cox = -1, coy = -1;
        var layersize = this.bg1.getLayerSize();
        let aa = this.node.getComponent(cc.TiledMap).getTileSize()
        // var tilesize = this.map1.getTileSize();
        var tilesize = this.tiledMap.getTileSize()
        cox = Math.round((pos.x /*- this.leftBoundary*/) / (tilesize.width));
        coy = Math.round((layersize.height - pos.y / (tilesize.height)));
        // console.log(cox, coy, 11111111)
        if (cox >= 0 && cox < layersize.width && coy >= 0 && coy < layersize.height) {
            return cc.v2(cox, coy);
        } else {
            return cc.v2(-1, -1);
        }
    },

    getTiledCoordinate:function (pos) {
        var cox = -1, coy = -1;
        var layersize = this.bg1.getLayerSize();
        let aa = this.node.getComponent(cc.TiledMap).getTileSize()
        // var tilesize = this.map1.getTileSize();
        var tilesize = this.tiledMap.getTileSize()
        cox = parseInt((pos.x /*- this.leftBoundary*/) / (tilesize.width));
        coy = parseInt((layersize.height - pos.y / (tilesize.height)));
        // console.log(cox, coy, 11111111)
        if (cox >= 0 && cox < layersize.width && coy >= 0 && coy < layersize.height) {
            return cc.v2(cox, coy);
        } else {
            return cc.v2(-1, -1);
        }
    },

    getTiledRoundIdFromPos:function (pos) {
        var point = this.getTiledRoundCoordinate(pos);
        if (point.x < 0 || point.y < 0) {
            return -1;
        }
        return this.bg1.getTileGIDAt(point);
    },

    getTiledIdFromPos:function (pos) {
        var point = this.getTiledCoordinate(pos);
        if (point.x < 0 || point.y < 0) {
            return -1;
        }
        if (this.bg2.node.active){
            let gid = this.bg2.getTileGIDAt(point);
            if (gid > 0){
                return gid
            }
        }
        return this.bg1.getTileGIDAt(point);
    },

    checkPoint:function (pos) {
        var toP = pos;
        var tid = this.getTiledIdFromPos(pos);
        // 空
        if (tid == 0){
            return false
        }
        // 草地
        else if (cc.vv.Global.isGrassland(tid)){
            return false
        }
        return true
    },

    collisionTanks (pos) {
        let enemy_tank_arr = cc.vv.Global.game.enemy_tank_arr
        for (let i=0;i<enemy_tank_arr.length;i++){
            if (enemy_tank_arr[i] && enemy_tank_arr[i].node && enemy_tank_arr[i].node.isValid
                 && enemy_tank_arr[i].node.getBoundingBox().contains(pos)){
                return true
            }
        }
        let player = cc.vv.Global.game.player
        if (player && player.node && player.isValid && player.node.getBoundingBox().contains(pos)){
            return true
        }
        return false;
    },

    collisionBullet(pos, is_enemy){
        let bullet_arr = cc.vv.Global.game.bullet_arr
        for (let i=0;i<bullet_arr.length;i++){
            if (bullet_arr[i].isValid && bullet_arr[i].getBoundingBox().contains(pos)
             && bullet_arr[i].getComponent('bullet').is_enemy != is_enemy){
                return bullet_arr[i]
            }
        }
        return null
    },

    collisionBulletAndEnemyTanks (pos){
        let enemy_tank_arr = cc.vv.Global.game.enemy_tank_arr
        for (let i=0;i<enemy_tank_arr.length;i++){
            if (enemy_tank_arr[i] && enemy_tank_arr[i].node && enemy_tank_arr[i].node.isValid && enemy_tank_arr[i].node.getBoundingBox().contains(pos)){
                return enemy_tank_arr[i]
            }
        }
        return null
    },

    collisionBulletAndPlayerTanks (pos){
        let player = cc.vv.Global.game.player
        if (player && player.node && player.node.active && player.node.isValid && player.node.getBoundingBox().contains(pos)){
            return player
        }
        return null
    },

    onDestroy (){
        console.log('game map destroy')
    }
});
