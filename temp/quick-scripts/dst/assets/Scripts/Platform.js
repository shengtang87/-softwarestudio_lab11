
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