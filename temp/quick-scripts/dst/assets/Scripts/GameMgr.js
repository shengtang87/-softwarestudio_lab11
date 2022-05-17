
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eafa6oJfhL2YaT2IrMk8jP', 'GameMgr');
// Scripts/GameMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMgr = /** @class */ (function (_super) {
    __extends(GameMgr, _super);
    function GameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noDieMode = false;
        _this.background = null;
        _this.wall = null;
        _this.player = null;
        _this.platforms = null;
        _this.platformPrefabs = [];
        _this.startIcon = null;
        _this.pauseIcon = null;
        _this.scoreNode = null;
        _this.highestScoreNode = null;
        _this.energyBar = null;
        _this.camera = null;
        _this.bgm = null;
        _this.debugCollider = null;
        _this.gathering = false;
        _this.energyValue = 0;
        _this.backgroundSize = 256;
        _this.wallSize = 384;
        _this.physicManager = null;
        _this.score = 0;
        _this.highestScore = 0;
        _this.pause = false;
        _this.inGame = false;
        _this.scoreInterval = 280;
        _this.nextTarget = 0;
        _this.posArr = [1, 3, 0, 2];
        _this.posIdx = 0;
        _this.mouseDown = false;
        return _this;
    }
    GameMgr.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -200);
    };
    GameMgr.prototype.start = function () {
        var _this = this;
        this.debugCollider = this.node.getChildByName("DebugCollider");
        this.debugCollider.active = this.noDieMode;
        this.updateHighestScore(0);
        this.gatherEnergy = function () {
            var newValue = (_this.energyValue + 1) % 13;
            _this.updateEnergyBar(newValue);
        };
        this.node.on('mousedown', function (event) {
            if (event.getButton() == 0 && this.inGame) {
                this.mouseDown = true;
            }
        }, this);
        this.node.on('mouseup', function (event) {
            if (event.getButton() == 0 && this.inGame) {
                this.mouseDown = false;
                if (this.gathering) {
                    this.gathering = false;
                    // ===================== TODO =====================
                    // 1. When user releases mouse, you should unschedule "gatherEnergy" function.
                    // 2. Call the "playerJump" function in Player.ts with "this.energyValue * 50" as parameter.
                    // ================================================
                }
            }
        }, this);
        this.generatePlatforms(500);
    };
    GameMgr.prototype.update = function (dt) {
        if (this.player.fallDown) {
            this.gathering = false;
            // ===================== TODO =====================
            // 1. When player falls down,  you should unschedule "gatherEnergy" function.
            // ================================================
        }
        else {
            if (this.mouseDown && !this.gathering) {
                this.gathering = true;
                // ===================== TODO =====================
                // 1. When user presses mouse,  you should call "gatherEnergy" function every 0.05s.
                // ================================================
            }
        }
        if (this.camera.y - this.wall.y >= this.wallSize)
            this.wall.y += this.wallSize;
        if (this.camera.y - this.background.y >= this.backgroundSize)
            this.background.y += this.backgroundSize;
        if (this.inGame) {
            if (this.player.node.y - this.camera.y > 100)
                this.camera.y = this.player.node.y - 100;
            if (this.camera.y - 200 > this.player.node.y) {
                if (this.player.node.active) {
                    this.player.playerDie();
                    this.gameOver();
                }
            }
            if (this.player.node.y >= this.nextTarget) {
                this.updateScore(this.score + 1);
                this.nextTarget += this.scoreInterval;
            }
        }
        else {
            this.camera.y += 1;
        }
        this.debugCollider.y = 22;
    };
    GameMgr.prototype.randomChoosePlatform = function () {
        var rand = Math.random();
        //0: normal, 1: conveyor
        var prob = [8, 1];
        var sum = prob.reduce(function (a, b) { return a + b; });
        for (var i = 1; i < prob.length; i++)
            prob[i] += prob[i - 1];
        for (var i = 0; i < prob.length; i++) {
            prob[i] /= sum;
            if (rand <= prob[i])
                return i;
        }
    };
    GameMgr.prototype.generatePlatforms = function (num) {
        this.platforms.removeAllChildren();
        for (var i = 0; i < num; i++) {
            var randIdx = this.randomChoosePlatform();
            var platform = cc.instantiate(this.platformPrefabs[randIdx]);
            platform.parent = this.platforms;
            platform.position = cc.v2(-132 + Math.floor(Math.random() * 29) - 14 + 88 * this.posArr[this.posIdx], -105 + 40 * i);
            this.posIdx = (this.posIdx + 1) % 4;
        }
    };
    GameMgr.prototype.updateEnergyBar = function (value) {
        this.energyValue = value;
        this.energyBar.width = this.energyValue * 8;
    };
    GameMgr.prototype.updateHighestScore = function (score) {
        this.highestScore = score;
        this.highestScoreNode.getComponent(cc.Label).string = (Array(4).join("0") + this.highestScore.toString()).slice(-4);
    };
    GameMgr.prototype.updateScore = function (score) {
        this.score = score;
        this.scoreNode.getComponent(cc.Label).string = (Array(4).join("0") + this.score.toString()).slice(-4);
    };
    GameMgr.prototype.gameStart = function () {
        this.startIcon.active = false;
        this.generatePlatforms(500);
        this.inGame = true;
        this.background.position = cc.v2();
        this.wall.position = cc.v2();
        this.camera.position = cc.v2();
        if (this.score > this.highestScore)
            this.updateHighestScore(this.score);
        this.updateScore(1);
        this.player.node.active = true;
        this.player.reborn();
        this.nextTarget = this.player.node.y + this.scoreInterval * this.score;
        cc.audioEngine.playMusic(this.bgm, true);
    };
    GameMgr.prototype.gamePause = function () {
        if (this.pause)
            this.pause = false;
        else
            this.pause = true;
        if (this.pause) {
            this.pauseIcon.active = true;
            this.scheduleOnce(function () {
                cc.game.pause();
            }, 0.1);
        }
        else {
            this.pauseIcon.active = false;
            cc.game.resume();
        }
    };
    GameMgr.prototype.gameOver = function () {
        this.startIcon.active = true;
        this.player.node.active = false;
        this.inGame = false;
        this.unschedule(this.gatherEnergy);
        this.updateEnergyBar(0);
        this.gathering = false;
        cc.audioEngine.stopMusic();
    };
    GameMgr.prototype.gameEnd = function () {
        cc.game.end();
    };
    __decorate([
        property()
    ], GameMgr.prototype, "noDieMode", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "wall", void 0);
    __decorate([
        property(Player_1.default)
    ], GameMgr.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "platforms", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameMgr.prototype, "platformPrefabs", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "startIcon", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "pauseIcon", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "scoreNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "highestScoreNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "energyBar", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "camera", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameMgr.prototype, "bgm", void 0);
    GameMgr = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}(cc.Component));
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUV4QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlSQztRQTlRRyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUd0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWdCLEVBQUUsQ0FBQztRQUdsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFaEIsb0JBQWMsR0FBRyxHQUFHLENBQUM7UUFFckIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUVmLG1CQUFhLEdBQXNCLElBQUksQ0FBQztRQUV4QyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFJdkIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQWEsQ0FBQyxDQUFDLEVB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SSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7d0NBQ0w7SUF2Q1IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlSM0I7SUFBRCxjQUFDO0NBalJELEFBaVJDLENBalJvQyxFQUFFLENBQUMsU0FBUyxHQWlSaEQ7a0JBalJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIG5vRGllTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2FsbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXRmb3JtczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgcGxhdGZvcm1QcmVmYWJzOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhcnRJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBhdXNlSWNvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlnaGVzdFNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmVyZ3lCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBkZWJ1Z0NvbGxpZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBnYXRoZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBlbmVyZ3lWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRTaXplID0gMjU2O1xyXG5cclxuICAgIHByaXZhdGUgd2FsbFNpemUgPSAzODQ7XHJcblxyXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGhpZ2hlc3RTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHBhdXNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBnYXRoZXJFbmVyZ3k7XHJcblxyXG4gICAgcHJpdmF0ZSBpbkdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlSW50ZXJ2YWw6IG51bWJlciA9IDI4MDtcclxuXHJcbiAgICBwcml2YXRlIG5leHRUYXJnZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NBcnI6IG51bWJlcltdID0gWzEsIDMsIDAsIDJdO1xyXG5cclxuICAgIHByaXZhdGUgcG9zSWR4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgbW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLCAtMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiRGVidWdDb2xsaWRlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpZGVyLmFjdGl2ZSA9IHRoaXMubm9EaWVNb2RlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hlc3RTY29yZSgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYXRoZXJFbmVyZ3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9ICh0aGlzLmVuZXJneVZhbHVlKzEpICUgMTM7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRW5lcmd5QmFyKG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZihldmVudC5nZXRCdXR0b24oKSA9PSAwICYmIHRoaXMuaW5HYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZihldmVudC5nZXRCdXR0b24oKSA9PSAwICYmIHRoaXMuaW5HYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5nYXRoZXJpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhdGhlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBXaGVuIHVzZXIgcmVsZWFzZXMgbW91c2UsIHlvdSBzaG91bGQgdW5zY2hlZHVsZSBcImdhdGhlckVuZXJneVwiIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIENhbGwgdGhlIFwicGxheWVySnVtcFwiIGZ1bmN0aW9uIGluIFBsYXllci50cyB3aXRoIFwidGhpcy5lbmVyZ3lWYWx1ZSAqIDUwXCIgYXMgcGFyYW1ldGVyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVQbGF0Zm9ybXMoNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuZmFsbERvd24pe1xyXG4gICAgICAgICAgICB0aGlzLmdhdGhlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gMS4gV2hlbiBwbGF5ZXIgZmFsbHMgZG93biwgIHlvdSBzaG91bGQgdW5zY2hlZHVsZSBcImdhdGhlckVuZXJneVwiIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3VzZURvd24gJiYgIXRoaXMuZ2F0aGVyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdGhlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIC8vIDEuIFdoZW4gdXNlciBwcmVzc2VzIG1vdXNlLCAgeW91IHNob3VsZCBjYWxsIFwiZ2F0aGVyRW5lcmd5XCIgZnVuY3Rpb24gZXZlcnkgMC4wNXMuXHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEueSAtIHRoaXMud2FsbC55ID49IHRoaXMud2FsbFNpemUpXHJcbiAgICAgICAgICAgIHRoaXMud2FsbC55ICs9IHRoaXMud2FsbFNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEueSAtIHRoaXMuYmFja2dyb3VuZC55ID49IHRoaXMuYmFja2dyb3VuZFNpemUpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC55ICs9IHRoaXMuYmFja2dyb3VuZFNpemU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5HYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIubm9kZS55IC0gdGhpcy5jYW1lcmEueSA+IDEwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSB0aGlzLnBsYXllci5ub2RlLnkgLSAxMDA7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5jYW1lcmEueS0yMDAgPiB0aGlzLnBsYXllci5ub2RlLnkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllckRpZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIubm9kZS55ID49IHRoaXMubmV4dFRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSh0aGlzLnNjb3JlICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUYXJnZXQgKz0gdGhpcy5zY29yZUludGVydmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVidWdDb2xsaWRlci55ID0gMjI7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQ2hvb3NlUGxhdGZvcm0oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHJcbiAgICAgICAgLy8wOiBub3JtYWwsIDE6IGNvbnZleW9yXHJcbiAgICAgICAgbGV0IHByb2IgPSBbOCwgMV07XHJcbiAgICAgICAgbGV0IHN1bSA9IHByb2IucmVkdWNlKChhLGIpPT5hK2IpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBwcm9iLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBwcm9iW2ldICs9IHByb2JbaS0xXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvYi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2JbaV0gLz0gc3VtO1xyXG4gICAgICAgICAgICBpZihyYW5kIDw9IHByb2JbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVQbGF0Zm9ybXMobnVtOiBOdW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmFuZElkeCA9IHRoaXMucmFuZG9tQ2hvb3NlUGxhdGZvcm0oKTtcclxuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF0Zm9ybVByZWZhYnNbcmFuZElkeF0pO1xyXG4gICAgICAgICAgICBwbGF0Zm9ybS5wYXJlbnQgPSB0aGlzLnBsYXRmb3JtcztcclxuICAgICAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24gPSBjYy52MigtMTMyICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjkpIC0gMTQgKyA4OCAqIHRoaXMucG9zQXJyW3RoaXMucG9zSWR4XSwgLTEwNSs0MCppKTtcclxuICAgICAgICAgICAgdGhpcy5wb3NJZHggPSAodGhpcy5wb3NJZHggKyAxKSAlIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVuZXJneUJhcih2YWx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVuZXJneUJhci53aWR0aCA9IHRoaXMuZW5lcmd5VmFsdWUgKiA4O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpZ2hlc3RTY29yZShzY29yZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGlnaGVzdFNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgdGhpcy5oaWdoZXN0U2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5oaWdoZXN0U2NvcmUudG9TdHJpbmcoKSkuc2xpY2UoLTQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5zY29yZS50b1N0cmluZygpKS5zbGljZSgtNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZVN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0SWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUGxhdGZvcm1zKDUwMCk7XHJcbiAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQucG9zaXRpb24gPSBjYy52MigpO1xyXG4gICAgICAgIHRoaXMud2FsbC5wb3NpdGlvbiA9IGNjLnYyKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24gPSBjYy52MigpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoZXN0U2NvcmUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVIaWdoZXN0U2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgxKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVib3JuKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0VGFyZ2V0ID0gdGhpcy5wbGF5ZXIubm9kZS55ICsgdGhpcy5zY29yZUludGVydmFsICogdGhpcy5zY29yZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lUGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucGF1c2UpXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMucGF1c2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhcnRJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhdGhlckVuZXJneSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFbmVyZ3lCYXIoMCk7XHJcbiAgICAgICAgdGhpcy5nYXRoZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUVuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZ2FtZS5lbmQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=