
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
        var easeRate = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXRmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdGQztRQTlFYSxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTdCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQzs7UUFxRGpDLG1EQUFtRDtRQUNuRCx3REFBd0Q7UUFDeEQsbUVBQW1FO1FBQ25FLHlEQUF5RDtRQUN6RCxFQUFFO1FBQ0YsNkZBQTZGO1FBQzdGLEVBQUU7UUFDRix1RUFBdUU7UUFDdkUseUZBQXlGO1FBQ3pGLHNGQUFzRjtRQUN0RixFQUFFO1FBQ0YsZ0ZBQWdGO1FBQ2hGLG9DQUFvQztRQUNwQyxFQUFFO1FBQ0YsbUhBQW1IO1FBQ25ILEVBQUU7UUFDRiwwRkFBMEY7UUFDMUYsRUFBRTtRQUNGLG1EQUFtRDtJQUNyRCxDQUFDO0lBdEVHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTVDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEM7YUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFDbEM7WUFDSSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBRyxPQUFPLEVBQ1Y7Z0JBQ0ksSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN6QztTQUNKO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUseUJBQXlCO1lBQzVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUk7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLE9BQWUsRUFBRSxTQUFpQjtRQUUzQyxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7UUFDekIsbURBQW1EO1FBQ25ELHlGQUF5RjtRQUN6RiwrQ0FBK0M7UUFDL0Msc0RBQXNEO1FBQ3RELGtIQUFrSDtRQUNsSCw2R0FBNkc7UUFDN0cscUZBQXFGO1FBQ3JGLDBEQUEwRDtRQUMxRCxtREFBbUQ7SUFDdkQsQ0FBQztJQTNEZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdGNUI7SUFBRCxlQUFDO0NBaEZELEFBZ0ZDLENBaEZxQyxFQUFFLENBQUMsU0FBUyxHQWdGakQ7a0JBaEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNUb3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBwcml2YXRlIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiQ29udmV5b3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKE1hdGgucmFuZG9tKCkgPj0gMC41KSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgKj0gdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIk5vcm1hbFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNhbk1vdmUgPSAoTWF0aC5yYW5kb20oKSA+IDAuOCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGNhbk1vdmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlRGlyID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gXCJ2XCIgOiBcImhcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheVRpbWUgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhdGZvcm1Nb3ZlKG1vdmVEaXIsIGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKHRoaXMuY2FtZXJhLnkgLSB0aGlzLm5vZGUueSA+PSAxOTApIC8vIHBsYXRmb3JtIG91dCBvZiBzY3JlZW5cclxuICAgICAgICAgICAgdGhpcy5wbGF0Zm9ybURlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbSgpIHtcclxuICAgICAgICBpZih0aGlzLmFuaW0pXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhdGZvcm1EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXRmb3JtTW92ZShtb3ZlRGlyOiBzdHJpbmcsIGRlbGF5VGltZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlYXNlUmF0ZTogbnVtYmVyID0gMjtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBNYWtlIHBsYXRmb3JtIG1vdmUgYmFjayBhbmQgZm9ydGguIFlvdSBzaG91bGQgdXNlIG1vdmVEaXIgdG8gZGVjaWRlIG1vdmUgZGlyZWN0aW9uLlxyXG4gICAgICAgIC8vICAgICd2JyBmb3IgdmVydGljYWwsIGFuZCAnaCcgZm9yIGhvcml6b250YWwuXHJcbiAgICAgICAgLy8gMi4gVXNlIGFjdGlvbiBzeXN0ZW0gdG8gbWFrZSBwbGF0ZnJvbSBtb3ZlIGZvcmV2ZXIuXHJcbiAgICAgICAgLy8gICAgRm9yIGhvcml6b250YWwgY2FzZSwgeW91IHNob3VsZCBmaXJzdCBtb3ZlIHJpZ2h0IDUwIHBpeGVsIGluIDJzIGFuZCB0aGVuIG1vdmUgYmFjayB0byBpbml0aWFsIHBvc2l0aW9uIGluIDJzXHJcbiAgICAgICAgLy8gICAgRm9yIHZlcnRpY2FsIGNhc2UsIHlvdSBzaG91bGQgZmlyc3QgbW92ZSB1cCA1MCBwaXhlbCBpbiAycyBhbmQgdGhlbiBtb3ZlIGJhY2sgdG8gaW5pdGlhbCBwb3NpdGlvbiBpbiAyc1xyXG4gICAgICAgIC8vICAgIFlvdSBuZWVkIHRvIHVzZSBcImVhc2VJbk91dFwiIHRvIG1vZGlmeSB5b3VyIGFjdGlvbiB3aXRoIFwiZWFzZVJhdGVcIiBhcyBwYXJhbWV0ZXIuXHJcbiAgICAgICAgLy8gMy4gVXNlIHNjaGVkdWxlT25jZSB3aXRoIGRlbGF5VGltZSB0byBydW4gdGhpcyBhY3Rpb24uIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyAxLiBJbiB0aGUgcGh5c2ljcyBsZWN0dXJlLCB3ZSBrbm93IHRoYXQgQ29jb3MgQ3JlYXRvclxyXG4gIC8vICAgIHByb3ZpZGVzIGZvdXIgY29udGFjdCBjYWxsYmFja3MuIFlvdSBuZWVkIHRvIHVzZSBjYWxsYmFja3MgdG9cclxuICAvLyAgICBkZXNpZ24gZGlmZmVyZW50IGJlaGF2aW9ycyBmb3IgZGlmZmVyZW50IHBsYXRmb3Jtcy5cclxuICAvL1xyXG4gIC8vICAgIEhpbnRzOiBUaGUgY2FsbGJhY2tzIGFyZSBcIm9uQmVnaW5Db250YWN0XCIsIFwib25FbmRDb250YWN0XCIsIFwib25QcmVTb2x2ZVwiLCBcIm9uUG9zdFNvbHZlXCIuXHJcbiAgLy9cclxuICAvLyAyLiBUaGVyZSBhcmUgdHdvIGRpZmZlcmVudCB0eXBlcyBvZiBwbGF0Zm9ybXM6IFwiTm9ybWFsXCIgJiBDb252ZXlvclwiLlxyXG4gIC8vICAgIEZvciBcIkNvbnZleW9yXCIsIHlvdSBoYXZlIHRvIGRvIFwiZGVsaXZlcnkgZWZmZWN0XCIgd2hlbiBwbGF5ZXIgaXMgaW4gY29udGFjdCB3aXRoIGl0LlxyXG4gIC8vICAgIE5vdGUgdGhhdCB0aGUgcGxhdGZvcm1zIGhhdmUgXCJkZWxpdmVyeSBlZmZlY3RcIiBvbmx5IHdoZW4gcGxheWVyIHN0YW5kcyBvbiB0aGVtLiBcclxuICAvL1xyXG4gIC8vICAgIEhpbnRzOiBDaGFuZ2UgXCJsaW5lYXJWZWxvY2l0eVwiIG9mIHRoZSBwbGF5ZXIncyByaWdpZGJvZHkgdG8gbWFrZSBoaW0gbW92ZS5cclxuICAvLyAgICBUaGUgbW92ZSB2YWx1ZSBpcyBcIm1vdmVTcGVlZFwiLlxyXG4gIC8vXHJcbiAgLy8gMy4gQWxsIHRoZSBwbGF0Zm9ybXMgaGF2ZSBvbmx5IFwidXBzaWRlXCIgY29sbGlzaW9uLiBZb3UgaGF2ZSB0byBwcmV2ZW50IHRoZSBjb2xsaXNpb25zIGZyb20gdGhlIG90aGVyIGRpcmVjdGlvbnMuXHJcbiAgLy9cclxuICAvLyAgICBIaW50czogWW91IGNhbiB1c2UgXCJjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWxcIiB0byBqdWRnZSBjb2xsaXNpb24gZGlyZWN0aW9uLlxyXG4gIC8vXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn1cclxuIl19