
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
require('./assets/Scripts/GameMgr');
require('./assets/Scripts/Platform');
require('./assets/Scripts/Player');
require('./assets/migration/use_reversed_rotateTo');

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQThIQztRQTNIRyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLGVBQVMsR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLFFBQUUsR0FBaUIsSUFBSSxDQUFDOztJQXdHcEMsQ0FBQztJQXJHRyxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUVMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhELGlFQUFp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RUFDcEM7WUFDSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQTFIRDtRQURDLFFBQVEsRUFBRTsrQ0FDZTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NENBQ0E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNRO0lBWmhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4SDFCO0lBQUQsYUFBQztDQTlIRCxBQThIQyxDQTlIbUMsRUFBRSxDQUFDLFNBQVMsR0E4SC9DO2tCQTlIb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTWdyIGZyb20gXCIuL0dhbWVNZ3JcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcGxheWVyU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGRpZVNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZU1ncjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAganVtcEZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgZmFsbERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIHJlYm9yblBvczogY2MuVmVjMiA9IGNjLnYyKDAsIC0xNDYpO1xyXG5cclxuICAgIHByaXZhdGUgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBsYXllclNwZWVkICogdGhpcy5tb3ZlRGlyICogZHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLm1vdmVEaXIgPj0gMCkgPyAxIDogLTE7XHJcblxyXG4gICAgICAgIC8vIHJheWNhc3Q6IGNoZWNrIHdoZXRoZXIgdGhlIHBsYXllciBpcyBzdGFuZGluZyBvbiB0aGUgcGxhdGZvcm0/XHJcbiAgICAgICAgbGV0IHBvaW50MSA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBwb2ludDEuYWRkU2VsZihjYy52MigxMiwgMikpO1xyXG4gICAgICAgIHBvaW50MSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvaW50MSk7XHJcbiAgICAgICAgbGV0IHBvaW50MiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBwb2ludDIuYWRkU2VsZihjYy52MigtMTIsIDIpKTtcclxuICAgICAgICBwb2ludDIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludDIpO1xyXG4gICAgICAgIGxldCBpc0hpdCA9IHRoaXMucmF5Y2FzdFRlc3QocG9pbnQxLCBjYy52MigwLCAtNSkpIHx8IHRoaXMucmF5Y2FzdFRlc3QocG9pbnQyLCBjYy52MigwLCAtNSkpO1xyXG4gICAgICAgIC8vIGlmKGlzSGl0KXtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5mYWxsRG93bil7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVFbmVyZ3lCYXIoMCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmZhbGxEb3duID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5mYWxsRG93biA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZmFsbERvd24gPSAhaXNIaXQ7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmF5Y2FzdFRlc3Qoc3RhcnQ6IGNjLlZlYzIsIGRpcmVjdGlvbjogY2MuVmVjMil7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoXCJHYW1lTWdyXCIpLnBoeXNpY01hbmFnZXIucmF5Q2FzdChzdGFydCwgc3RhcnQuYWRkKGRpcmVjdGlvbiksIGNjLlJheUNhc3RUeXBlLkFsbENsb3Nlc3QpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJOYW1lID0gcmVzdWx0W2ldLmNvbGxpZGVyLm5vZGUubmFtZTtcclxuICAgICAgICAgICAgaWYoY29sbGlkZXJOYW1lICE9IHRoaXMubm9kZS5uYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVib3JuKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnJlYm9yblBvcztcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJKdW1wKHZlbG9jaXR5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuZmFsbERvd24pXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIHZlbG9jaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJEaWUoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5kaWVTb3VuZCxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQW5pbWF0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmZhbGxEb3duKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdlZmZlY3QnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuanVtcEZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS5nYXRoZXJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ2dhdGhlcicpLmlzUGxheWluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2VmZmVjdCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoJ2dhdGhlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnd2FsaycpLmlzUGxheWluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdnYXRoZXInKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVFbmVyZ3lCYXIoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2VmZmVjdCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCd3YWxrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwid2FsbFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlyICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a19aqP7g1Cx45fKgZDGSeR', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiB2ZXJzaW9ucy5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiDniYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5jYy5Sb3RhdGVUby5fcmV2ZXJzZSA9IHRydWU7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
                    this.unschedule(this.gatherEnergy);
                    // 2. Call the "playerJump" function in Player.ts with "this.energyValue * 50" as parameter.
                    this.player.playerJump(this.energyValue * 50);
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
            this.unschedule(this.gatherEnergy);
            // ================================================
        }
        else {
            if (this.mouseDown && !this.gathering) {
                this.gathering = true;
                // ===================== TODO =====================
                // 1. When user presses mouse,  you should call "gatherEnergy" function every 0.05s.
                this.schedule(this.gatherEnergy, 0.05);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBc1JDO1FBblJHLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIscUJBQWUsR0FBZ0IsRUFBRSxDQUFDO1FBR2xDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUVoQixvQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUVyQixjQUFRLEdBQUcsR0FBRyxDQUFDO1FBRWYsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBRXhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUl2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFlBQU0sR0FBYSxDQUFDLENBQUMs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SUFBSSxDQUFDOytDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzsyQ0FDSztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29EQUNZO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDTDtJQXZDUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc1IzQjtJQUFELGNBQUM7Q0F0UkQsQUFzUkMsQ0F0Um9DLEVBQUUsQ0FBQyxTQUFTLEdBc1JoRDtrQkF0Um9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgbm9EaWVNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxhdGZvcm1zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBwbGF0Zm9ybVByZWZhYnM6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydEljb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGF1c2VJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWdoZXN0U2NvcmVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVuZXJneUJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGRlYnVnQ29sbGlkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGdhdGhlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGVuZXJneVZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYmFja2dyb3VuZFNpemUgPSAyNTY7XHJcblxyXG4gICAgcHJpdmF0ZSB3YWxsU2l6ZSA9IDM4NDtcclxuXHJcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgaGlnaGVzdFNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGdhdGhlckVuZXJneTtcclxuXHJcbiAgICBwcml2YXRlIGluR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmVJbnRlcnZhbDogbnVtYmVyID0gMjgwO1xyXG5cclxuICAgIHByaXZhdGUgbmV4dFRhcmdldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHBvc0FycjogbnVtYmVyW10gPSBbMSwgMywgMCwgMl07XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NJZHg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsIC0yMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmRlYnVnQ29sbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEZWJ1Z0NvbGxpZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmRlYnVnQ29sbGlkZXIuYWN0aXZlID0gdGhpcy5ub0RpZU1vZGU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlSGlnaGVzdFNjb3JlKDApO1xyXG5cclxuICAgICAgICB0aGlzLmdhdGhlckVuZXJneSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gKHRoaXMuZW5lcmd5VmFsdWUrMSkgJSAxMztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbmVyZ3lCYXIobmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmdldEJ1dHRvbigpID09IDAgJiYgdGhpcy5pbkdhbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ21vdXNldXAnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmdldEJ1dHRvbigpID09IDAgJiYgdGhpcy5pbkdhbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdhdGhlcmluZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2F0aGVyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSBUT0RPID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIFdoZW4gdXNlciByZWxlYXNlcyBtb3VzZSwgeW91IHNob3VsZCB1bnNjaGVkdWxlIFwiZ2F0aGVyRW5lcmd5XCIgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2F0aGVyRW5lcmd5KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIENhbGwgdGhlIFwicGxheWVySnVtcFwiIGZ1bmN0aW9uIGluIFBsYXllci50cyB3aXRoIFwidGhpcy5lbmVyZ3lWYWx1ZSAqIDUwXCIgYXMgcGFyYW1ldGVyLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllckp1bXAodGhpcy5lbmVyZ3lWYWx1ZSAqIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmdlbmVyYXRlUGxhdGZvcm1zKDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmZhbGxEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5nYXRoZXJpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIDEuIFdoZW4gcGxheWVyIGZhbGxzIGRvd24sICB5b3Ugc2hvdWxkIHVuc2NoZWR1bGUgXCJnYXRoZXJFbmVyZ3lcIiBmdW5jdGlvbi5cclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2F0aGVyRW5lcmd5KVxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3VzZURvd24gJiYgIXRoaXMuZ2F0aGVyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhdGhlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIC8vIDEuIFdoZW4gdXNlciBwcmVzc2VzIG1vdXNlLCAgeW91IHNob3VsZCBjYWxsIFwiZ2F0aGVyRW5lcmd5XCIgZnVuY3Rpb24gZXZlcnkgMC4wNXMuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2F0aGVyRW5lcmd5LCAwLjA1KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEueSAtIHRoaXMud2FsbC55ID49IHRoaXMud2FsbFNpemUpXHJcbiAgICAgICAgICAgIHRoaXMud2FsbC55ICs9IHRoaXMud2FsbFNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmEueSAtIHRoaXMuYmFja2dyb3VuZC55ID49IHRoaXMuYmFja2dyb3VuZFNpemUpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC55ICs9IHRoaXMuYmFja2dyb3VuZFNpemU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5HYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIubm9kZS55IC0gdGhpcy5jYW1lcmEueSA+IDEwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSB0aGlzLnBsYXllci5ub2RlLnkgLSAxMDA7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5jYW1lcmEueS0yMDAgPiB0aGlzLnBsYXllci5ub2RlLnkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLm5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllckRpZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIubm9kZS55ID49IHRoaXMubmV4dFRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSh0aGlzLnNjb3JlICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUYXJnZXQgKz0gdGhpcy5zY29yZUludGVydmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVidWdDb2xsaWRlci55ID0gMjI7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQ2hvb3NlUGxhdGZvcm0oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHJcbiAgICAgICAgLy8wOiBub3JtYWwsIDE6IGNvbnZleW9yXHJcbiAgICAgICAgbGV0IHByb2IgPSBbOCwgMV07XHJcbiAgICAgICAgbGV0IHN1bSA9IHByb2IucmVkdWNlKChhLGIpPT5hK2IpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBwcm9iLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBwcm9iW2ldICs9IHByb2JbaS0xXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvYi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2JbaV0gLz0gc3VtO1xyXG4gICAgICAgICAgICBpZihyYW5kIDw9IHByb2JbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVQbGF0Zm9ybXMobnVtOiBOdW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmFuZElkeCA9IHRoaXMucmFuZG9tQ2hvb3NlUGxhdGZvcm0oKTtcclxuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF0Zm9ybVByZWZhYnNbcmFuZElkeF0pO1xyXG4gICAgICAgICAgICBwbGF0Zm9ybS5wYXJlbnQgPSB0aGlzLnBsYXRmb3JtcztcclxuICAgICAgICAgICAgcGxhdGZvcm0ucG9zaXRpb24gPSBjYy52MigtMTMyICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjkpIC0gMTQgKyA4OCAqIHRoaXMucG9zQXJyW3RoaXMucG9zSWR4XSwgLTEwNSs0MCppKTtcclxuICAgICAgICAgICAgdGhpcy5wb3NJZHggPSAodGhpcy5wb3NJZHggKyAxKSAlIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVuZXJneUJhcih2YWx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVuZXJneUJhci53aWR0aCA9IHRoaXMuZW5lcmd5VmFsdWUgKiA4O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpZ2hlc3RTY29yZShzY29yZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGlnaGVzdFNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgdGhpcy5oaWdoZXN0U2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5oaWdoZXN0U2NvcmUudG9TdHJpbmcoKSkuc2xpY2UoLTQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5zY29yZS50b1N0cmluZygpKS5zbGljZSgtNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZVN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0SWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUGxhdGZvcm1zKDUwMCk7XHJcbiAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQucG9zaXRpb24gPSBjYy52MigpO1xyXG4gICAgICAgIHRoaXMud2FsbC5wb3NpdGlvbiA9IGNjLnYyKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24gPSBjYy52MigpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoZXN0U2NvcmUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVIaWdoZXN0U2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgxKTtcclxuICAgICAgICB0aGlzLnBsYXllci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVib3JuKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0VGFyZ2V0ID0gdGhpcy5wbGF5ZXIubm9kZS55ICsgdGhpcy5zY29yZUludGVydmFsICogdGhpcy5zY29yZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lUGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucGF1c2UpXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMucGF1c2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhcnRJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhdGhlckVuZXJneSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFbmVyZ3lCYXIoMCk7XHJcbiAgICAgICAgdGhpcy5nYXRoZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUVuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZ2FtZS5lbmQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3e6dBne/JI4rscTjPZ8hyF', 'Platform');
// Scripts/Platform.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouched = false;
        _this.anim = null;
        _this.moveSpeed = 50;
        _this.camera = null;
        return _this;
    }
    Platform.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
        this.camera = cc.find('Canvas/Main Camera');
        if (this.node.name == "Conveyor") {
            this.node.scaleX = (Math.random() >= 0.5) ? 1 : -1;
            this.moveSpeed *= this.node.scaleX;
        }
        else if (this.node.name == "Normal") {
            var canMove = (Math.random() > 0.8) ? true : false;
            if (canMove) {
                var moveDir = (Math.random() > 0.5) ? "v" : "h";
                var delayTime = Math.random() * 2;
                this.platformMove(moveDir, delayTime);
            }
        }
    };
    Platform.prototype.update = function (dt) {
        if (this.camera.y - this.node.y >= 190) // platform out of screen
            this.platformDestroy();
    };
    Platform.prototype.playAnim = function () {
        if (this.anim)
            this.anim.play();
    };
    Platform.prototype.platformDestroy = function () {
        this.node.destroy();
    };
    Platform.prototype.platformMove = function (moveDir, delayTime) {
        var _this = this;
        var easeRate = 2;
        var action;
        var seq1 = cc.sequence(cc.moveBy(2, 0, 50).easing(cc.easeInOut(easeRate)), cc.moveBy(2, 0, -50).easing(cc.easeInOut(easeRate)));
        var seq2 = cc.sequence(cc.moveBy(2, 50, 0).easing(cc.easeInOut(easeRate)), cc.moveBy(2, -50, 0).easing(cc.easeInOut(easeRate)));
        if (moveDir == "v") {
            action = cc.repeatForever(seq1);
        }
        else {
            action = cc.repeatForever(seq2);
        }
        this.scheduleOnce(function () {
            _this.node.runAction(action);
        }, delayTime);
        // ===================== TODO =====================
        // 1. Make platform move back and forth. You should use moveDir to decide move direction.
        //    'v' for vertical, and 'h' for horizontal.
        // 2. Use action system to make platfrom move forever.
        //    For horizontal case, you should first move right 50 pixel in 2s and then move back to initial position in 2s
        //    For vertical case, you should first move up 50 pixel in 2s and then move back to initial position in 2s
        //    You need to use "easeInOut" to modify your action with "easeRate" as parameter.
        // 3. Use scheduleOnce with delayTime to run this action. 
        // ================================================
    };
    // ===================== TODO =====================
    // 1. In the physics lecture, we know that Cocos Creator
    //    provides four contact callbacks. You need to use callbacks to
    //    design different behaviors for different platforms.
    //
    //    Hints: The callbacks are "onBeginContact", "onEndContact", "onPreSolve", "onPostSolve".
    //
    // 2. There are two different types of platforms: "Normal" & Conveyor".
    //    For "Conveyor", you have to do "delivery effect" when player is in contact with it.
    //    Note that the platforms have "delivery effect" only when player stands on them. 
    //
    //    Hints: Change "linearVelocity" of the player's rigidbody to make him move.
    //    The move value is "moveSpeed".
    //
    // 3. All the platforms have only "upside" collision. You have to prevent the collisions from the other directions.
    //
    //    Hints: You can use "contact.getWorldManifold().normal" to judge collision direction.
    //
    // ================================================
    Platform.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == "player") {
            if (contact.getWorldManifold().normal.y != 1 || contact.getWorldManifold().normal.x != 0) {
                contact.disabled = true;
            }
        }
    };
    Platform.prototype.onPreSolve = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == "player") {
            if (contact.getWorldManifold().normal.y != 1 || contact.getWorldManifold().normal.x != 0) {
                contact.disabled = true;
            }
            if (this.node.name == "Conveyor") {
                otherCollider.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.moveSpeed, otherCollider.getComponent(cc.RigidBody).linearVelocity.y);
            }
        }
    };
    Platform.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (this.node.name == "Conveyor") {
            otherCollider.getComponent(cc.RigidBody).linearVelocity = cc.v2(contact.moveSpeed, otherCollider.getComponent(cc.RigidBody).linearVelocity.y);
        }
    };
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUhDO1FBbkhhLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFN0IsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQTZHbkMsQ0FBQztJQTNHRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUU1QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RDO2FBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQ2xDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUcsT0FBTyxFQUNWO2dCQUNJLElBQUksT0FBTyxH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QUFDLGNBQWMsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVJO0lBQ0gsQ0FBQztJQXBIa0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFINUI7SUFBRCxlQUFDO0NBckhELEFBcUhDLENBckhxQyxFQUFFLENBQUMsU0FBUyxHQXFIakQ7a0JBckhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNUb3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwcml2YXRlIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiQ29udmV5b3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKE1hdGgucmFuZG9tKCkgPj0gMC41KSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgKj0gdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIk5vcm1hbFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNhbk1vdmUgPSAoTWF0aC5yYW5kb20oKSA+IDAuOCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGNhbk1vdmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlRGlyID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gXCJ2XCIgOiBcImhcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheVRpbWUgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGZvcm1Nb3ZlKG1vdmVEaXIsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKHRoaXMuY2FtZXJhLnkgLSB0aGlzLm5vZGUueSA+PSAxOTApIC8vIHBsYXRmb3JtIG91dCBvZiBzY3JlZW5cclxuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybURlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbSgpIHtcclxuICAgICAgICBpZih0aGlzLmFuaW0pXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhdGZvcm1EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXRmb3JtTW92ZShtb3ZlRGlyOiBzdHJpbmcsIGRlbGF5VGltZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlYXNlUmF0ZTogbnVtYmVyID0gMjtcclxuICAgICAgICBsZXQgYWN0aW9uOiBjYy5BY3Rpb247XHJcbiAgICAgICAgdmFyIHNlcTE9Y2Muc2VxdWVuY2UoY2MubW92ZUJ5KDIsMCw1MCkuZWFzaW5nKGNjLmVhc2VJbk91dChlYXNlUmF0ZSkpLGNjLm1vdmVCeSgyLDAsLTUwKS5lYXNpbmcoY2MuZWFzZUluT3V0KGVhc2VSYXRlKSkpO1xyXG4gICAgICAgIHZhciBzZXEyPWNjLnNlcXVlbmNlKGNjLm1vdmVCeSgyLDUwLDApLmVhc2luZyhjYy5lYXNlSW5PdXQoZWFzZVJhdGUpKSxjYy5tb3ZlQnkoMiwtNTAsMCkuZWFzaW5nKGNjLmVhc2VJbk91dChlYXNlUmF0ZSkpKTtcclxuICAgICAgICBpZihtb3ZlRGlyPT1cInZcIil7XHJcbiAgICAgICAgICAgIGFjdGlvbj1jYy5yZXBlYXRGb3JldmVyKHNlcTEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhY3Rpb249Y2MucmVwZWF0Rm9yZXZlcihzZXEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXHJcbiAgICAgICAgfSxkZWxheVRpbWUpXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gTWFrZSBwbGF0Zm9ybSBtb3ZlIGJhY2sgYW5kIGZvcnRoLiBZb3Ugc2hvdWxkIHVzZSBtb3ZlRGlyIHRvIGRlY2lkZSBtb3ZlIGRpcmVjdGlvbi5cclxuICAgICAgICAvLyAgICAndicgZm9yIHZlcnRpY2FsLCBhbmQgJ2gnIGZvciBob3Jpem9udGFsLlxyXG4gICAgICAgIC8vIDIuIFVzZSBhY3Rpb24gc3lzdGVtIHRvIG1ha2UgcGxhdGZyb20gbW92ZSBmb3JldmVyLlxyXG4gICAgICAgIC8vICAgIEZvciBob3Jpem9udGFsIGNhc2UsIHlvdSBzaG91bGQgZmlyc3QgbW92ZSByaWdodCA1MCBwaXhlbCBpbiAycyBhbmQgdGhlbiBtb3ZlIGJhY2sgdG8gaW5pdGlhbCBwb3NpdGlvbiBpbiAyc1xyXG4gICAgICAgIC8vICAgIEZvciB2ZXJ0aWNhbCBjYXNlLCB5b3Ugc2hvdWxkIGZpcnN0IG1vdmUgdXAgNTAgcGl4ZWwgaW4gMnMgYW5kIHRoZW4gbW92ZSBiYWNrIHRvIGluaXRpYWwgcG9zaXRpb24gaW4gMnNcclxuICAgICAgICAvLyAgICBZb3UgbmVlZCB0byB1c2UgXCJlYXNlSW5PdXRcIiB0byBtb2RpZnkgeW91ciBhY3Rpb24gd2l0aCBcImVhc2VSYXRlXCIgYXMgcGFyYW1ldGVyLlxyXG4gICAgICAgIC8vIDMuIFVzZSBzY2hlZHVsZU9uY2Ugd2l0aCBkZWxheVRpbWUgdG8gcnVuIHRoaXMgYWN0aW9uLiBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gMS4gSW4gdGhlIHBoeXNpY3MgbGVjdHVyZSwgd2Uga25vdyB0aGF0IENvY29zIENyZWF0b3JcclxuICAvLyAgICBwcm92aWRlcyBmb3VyIGNvbnRhY3QgY2FsbGJhY2tzLiBZb3UgbmVlZCB0byB1c2UgY2FsbGJhY2tzIHRvXHJcbiAgLy8gICAgZGVzaWduIGRpZmZlcmVudCBiZWhhdmlvcnMgZm9yIGRpZmZlcmVudCBwbGF0Zm9ybXMuXHJcbiAgLy9cclxuICAvLyAgICBIaW50czogVGhlIGNhbGxiYWNrcyBhcmUgXCJvbkJlZ2luQ29udGFjdFwiLCBcIm9uRW5kQ29udGFjdFwiLCBcIm9uUHJlU29sdmVcIiwgXCJvblBvc3RTb2x2ZVwiLlxyXG4gIC8vXHJcbiAgLy8gMi4gVGhlcmUgYXJlIHR3byBkaWZmZXJlbnQgdHlwZXMgb2YgcGxhdGZvcm1zOiBcIk5vcm1hbFwiICYgQ29udmV5b3JcIi5cclxuICAvLyAgICBGb3IgXCJDb252ZXlvclwiLCB5b3UgaGF2ZSB0byBkbyBcImRlbGl2ZXJ5IGVmZmVjdFwiIHdoZW4gcGxheWVyIGlzIGluIGNvbnRhY3Qgd2l0aCBpdC5cclxuICAvLyAgICBOb3RlIHRoYXQgdGhlIHBsYXRmb3JtcyBoYXZlIFwiZGVsaXZlcnkgZWZmZWN0XCIgb25seSB3aGVuIHBsYXllciBzdGFuZHMgb24gdGhlbS4gXHJcbiAgLy9cclxuICAvLyAgICBIaW50czogQ2hhbmdlIFwibGluZWFyVmVsb2NpdHlcIiBvZiB0aGUgcGxheWVyJ3MgcmlnaWRib2R5IHRvIG1ha2UgaGltIG1vdmUuXHJcbiAgLy8gICAgVGhlIG1vdmUgdmFsdWUgaXMgXCJtb3ZlU3BlZWRcIi5cclxuICAvL1xyXG4gIC8vIDMuIEFsbCB0aGUgcGxhdGZvcm1zIGhhdmUgb25seSBcInVwc2lkZVwiIGNvbGxpc2lvbi4gWW91IGhhdmUgdG8gcHJldmVudCB0aGUgY29sbGlzaW9ucyBmcm9tIHRoZSBvdGhlciBkaXJlY3Rpb25zLlxyXG4gIC8vXHJcbiAgLy8gICAgSGludHM6IFlvdSBjYW4gdXNlIFwiY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsXCIgdG8ganVkZ2UgY29sbGlzaW9uIGRpcmVjdGlvbi5cclxuICAvL1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcInBsYXllclwiKXtcclxuICAgICAgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkhPTF8fGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54IT0wKXtcclxuICAgICAgICBjb250YWN0LmRpc2FibGVkPXRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUHJlU29sdmUoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKXtcclxuICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwicGxheWVyXCIpXHJcbiAgICB7XHJcbiAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IT0xfHxjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCE9MCl7XHJcbiAgICAgICAgY29udGFjdC5kaXNhYmxlZD10cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMubm9kZS5uYW1lPT1cIkNvbnZleW9yXCIpe1xyXG4gICAgICAgIG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk9Y2MudjIodGhpcy5tb3ZlU3BlZWQsb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICBpZih0aGlzLm5vZGUubmFtZT09XCJDb252ZXlvclwiKXtcclxuICAgICAgb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eT1jYy52Mihjb250YWN0Lm1vdmVTcGVlZCxvdGhlckNvbGxpZGVyLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
