
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/common/Audio');
require('./assets/Script/common/Config');
require('./assets/Script/common/Enum');
require('./assets/Script/common/Global');
require('./assets/Script/common/Tank');
require('./assets/Script/common/Tools');
require('./assets/Script/common/UserInfo');
require('./assets/Script/game/appear');
require('./assets/Script/game/bullet');
require('./assets/Script/game/caozuo');
require('./assets/Script/game/direction');
require('./assets/Script/game/direction2');
require('./assets/Script/game/enemy_tank');
require('./assets/Script/game/fire_flower');
require('./assets/Script/game/game_map');
require('./assets/Script/game/player_tank');
require('./assets/Script/game/props');
require('./assets/Script/game/rocker');
require('./assets/Script/game/shield');
require('./assets/Script/game/toast');
require('./assets/Script/game_control');
require('./assets/Script/home_control');
require('./assets/Script/login_control');
require('./assets/Script/ui/game_over');
require('./assets/Script/ui/game_result');
require('./assets/Script/ui/point');
require('./assets/Script/ui/stage');
require('./assets/migration/use_reversed_rotateBy');

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