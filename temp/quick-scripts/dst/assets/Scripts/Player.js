
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cd2fFlgBpPIYNN/GI2S42+', 'Player');
// Scripts/Player.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerSpeed = 300;
        _this.dieSound = null;
        _this.gameMgr = null;
        _this.jumpFrame = null;
        _this.fallDown = false;
        _this.anim = null;
        _this.moveDir = 1;
        _this.rebornPos = cc.v2(0, -146);
        _this.rb = null;
        return _this;
    }
    Player.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
        this.rb = this.getComponent(cc.RigidBody);
    };
    Player.prototype.update = function (dt) {
        this.node.x += this.playerSpeed * this.moveDir * dt;
        this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
        // raycast: check whether the player is standing on the platform?
        var point1 = this.node.position;
        point1.addSelf(cc.v2(12, 2));
        point1 = this.node.parent.convertToWorldSpaceAR(point1);
        var point2 = this.node.position;
        point2.addSelf(cc.v2(-12, 2));
        point2 = this.node.parent.convertToWorldSpaceAR(point2);
        var isHit = this.raycastTest(point1, cc.v2(0, -5)) || this.raycastTest(point2, cc.v2(0, -5));
        // if(isHit){
        //     if(this.fallDown){
        //         this.gameMgr.getComponent("GameMgr").updateEnergyBar(0);
        //         this.fallDown = false;
        //     }
        // }else{
        //     this.fallDown = true;
        // }
        this.fallDown = !isHit;
        this.playerAnimation();
    };
    Player.prototype.raycastTest = function (start, direction) {
        var result = this.gameMgr.getComponent("GameMgr").physicManager.rayCast(start, start.add(direction), cc.RayCastType.AllClosest);
        for (var i = 0; i < result.length; i++) {
            var colliderName = result[i].collider.node.name;
            if (colliderName != this.node.name) {
                return true;
            }
        }
        return false;
    };
    Player.prototype.reborn = function () {
        this.node.position = this.rebornPos;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    };
    Player.prototype.playerJump = function (velocity) {
        if (!this.fallDown)
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, velocity);
    };
    Player.prototype.playerDie = function () {
        cc.audioEngine.playEffect(this.dieSound, false);
    };
    Player.prototype.playerAnimation = function () {
        if (this.fallDown) {
            this.anim.stop();
            this.node.getChildByName('effect').active = false;
            this.getComponent(cc.Sprite).spriteFrame = this.jumpFrame;
        }
        else {
            if (this.gameMgr.getComponent("GameMgr").gathering) {
                if (!this.anim.getAnimationState('gather').isPlaying) {
                    this.node.getChildByName('effect').active = true;
                    this.anim.play('gather');
                }
            }
            else {
                if (!this.anim.getAnimationState('walk').isPlaying) {
                    if (!this.anim.getAnimationState('gather').isPlaying) {
                        this.gameMgr.getComponent("GameMgr").updateEnergyBar(0);
                    }
                    this.node.getChildByName('effect').active = false;
                    this.anim.play('walk');
                }
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == "wall") {
            this.moveDir *= -1;
        }
    };
    __decorate([
        property()
    ], Player.prototype, "playerSpeed", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "dieSound", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "gameMgr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "jumpFrame", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDO1lBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUExSEQ7UUFEQyxRQUFRLEVBQUU7K0NBQ2U7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzRDQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDUTtJQVpoQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEgxQjtJQUFELGFBQUM7Q0E5SEQsQUE4SEMsQ0E5SG1DLEVBQUUsQ0FBQyxTQUFTLEdBOEgvQztrQkE5SG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1nciBmcm9tIFwiLi9HYW1lTWdyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBkaWVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNZ3I6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGp1bXBGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIGZhbGxEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSByZWJvcm5Qb3M6IGNjLlZlYzIgPSBjYy52MigwLCAtMTQ2KTtcclxuXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wbGF5ZXJTcGVlZCAqIHRoaXMubW92ZURpciAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAvLyByYXljYXN0OiBjaGVjayB3aGV0aGVyIHRoZSBwbGF5ZXIgaXMgc3RhbmRpbmcgb24gdGhlIHBsYXRmb3JtP1xyXG4gICAgICAgIGxldCBwb2ludDEgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgcG9pbnQxLmFkZFNlbGYoY2MudjIoMTIsIDIpKTtcclxuICAgICAgICBwb2ludDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludDEpO1xyXG4gICAgICAgIGxldCBwb2ludDIgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgcG9pbnQyLmFkZFNlbGYoY2MudjIoLTEyLCAyKSk7XHJcbiAgICAgICAgcG9pbnQyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9pbnQyKTtcclxuICAgICAgICBsZXQgaXNIaXQgPSB0aGlzLnJheWNhc3RUZXN0KHBvaW50MSwgY2MudjIoMCwgLTUpKSB8fCB0aGlzLnJheWNhc3RUZXN0KHBvaW50MiwgY2MudjIoMCwgLTUpKTtcclxuICAgICAgICAvLyBpZihpc0hpdCl7XHJcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuZmFsbERvd24pe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5mYWxsRG93biA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZmFsbERvd24gPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmZhbGxEb3duID0gIWlzSGl0O1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJheWNhc3RUZXN0KHN0YXJ0OiBjYy5WZWMyLCBkaXJlY3Rpb246IGNjLlZlYzIpe1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS5waHlzaWNNYW5hZ2VyLnJheUNhc3Qoc3RhcnQsIHN0YXJ0LmFkZChkaXJlY3Rpb24pLCBjYy5SYXlDYXN0VHlwZS5BbGxDbG9zZXN0KTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbGxpZGVyTmFtZSA9IHJlc3VsdFtpXS5jb2xsaWRlci5ub2RlLm5hbWU7XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyTmFtZSAhPSB0aGlzLm5vZGUubmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYm9ybigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5yZWJvcm5Qb3M7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVySnVtcCh2ZWxvY2l0eTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmZhbGxEb3duKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB2ZWxvY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKClcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllU291bmQsZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckFuaW1hdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5mYWxsRG93bilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZWZmZWN0JykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmp1bXBGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikuZ2F0aGVyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdnYXRoZXInKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdlZmZlY3QnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdnYXRoZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ3dhbGsnKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZ2F0aGVyJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdlZmZlY3QnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnd2FsaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcilcclxuICAgIHtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcIndhbGxcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19