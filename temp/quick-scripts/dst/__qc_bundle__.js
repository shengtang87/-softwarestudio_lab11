
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZVRvLmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlVG8iLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIHZlcnNpb25zLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjIuMS92Mi4yLjIg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuY2MuUm90YXRlVG8uX3JldmVyc2UgPSB0cnVlO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDO1lBQ0ksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUExSEQ7UUFEQyxRQUFRLEVBQUU7K0NBQ2U7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzRDQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDUTtJQVpoQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEgxQjtJQUFELGFBQUM7Q0E5SEQsQUE4SEMsQ0E5SG1DLEVBQUUsQ0FBQyxTQUFTLEdBOEgvQztrQkE5SG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1nciBmcm9tIFwiLi9HYW1lTWdyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBkaWVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNZ3I6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGp1bXBGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIGZhbGxEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSByZWJvcm5Qb3M6IGNjLlZlYzIgPSBjYy52MigwLCAtMTQ2KTtcclxuXHJcbiAgICBwcml2YXRlIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wbGF5ZXJTcGVlZCAqIHRoaXMubW92ZURpciAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAvLyByYXljYXN0OiBjaGVjayB3aGV0aGVyIHRoZSBwbGF5ZXIgaXMgc3RhbmRpbmcgb24gdGhlIHBsYXRmb3JtP1xyXG4gICAgICAgIGxldCBwb2ludDEgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgcG9pbnQxLmFkZFNlbGYoY2MudjIoMTIsIDIpKTtcclxuICAgICAgICBwb2ludDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludDEpO1xyXG4gICAgICAgIGxldCBwb2ludDIgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgcG9pbnQyLmFkZFNlbGYoY2MudjIoLTEyLCAyKSk7XHJcbiAgICAgICAgcG9pbnQyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9pbnQyKTtcclxuICAgICAgICBsZXQgaXNIaXQgPSB0aGlzLnJheWNhc3RUZXN0KHBvaW50MSwgY2MudjIoMCwgLTUpKSB8fCB0aGlzLnJheWNhc3RUZXN0KHBvaW50MiwgY2MudjIoMCwgLTUpKTtcclxuICAgICAgICAvLyBpZihpc0hpdCl7XHJcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuZmFsbERvd24pe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5mYWxsRG93biA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZmFsbERvd24gPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmZhbGxEb3duID0gIWlzSGl0O1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJheWNhc3RUZXN0KHN0YXJ0OiBjYy5WZWMyLCBkaXJlY3Rpb246IGNjLlZlYzIpe1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS5waHlzaWNNYW5hZ2VyLnJheUNhc3Qoc3RhcnQsIHN0YXJ0LmFkZChkaXJlY3Rpb24pLCBjYy5SYXlDYXN0VHlwZS5BbGxDbG9zZXN0KTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbGxpZGVyTmFtZSA9IHJlc3VsdFtpXS5jb2xsaWRlci5ub2RlLm5hbWU7XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyTmFtZSAhPSB0aGlzLm5vZGUubmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYm9ybigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5yZWJvcm5Qb3M7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVySnVtcCh2ZWxvY2l0eTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmZhbGxEb3duKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB2ZWxvY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKClcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllU291bmQsZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckFuaW1hdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5mYWxsRG93bilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZWZmZWN0JykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmp1bXBGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikuZ2F0aGVyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKCdnYXRoZXInKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdlZmZlY3QnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdnYXRoZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoJ3dhbGsnKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZSgnZ2F0aGVyJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTWdyLmdldENvbXBvbmVudChcIkdhbWVNZ3JcIikudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdlZmZlY3QnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheSgnd2FsaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcilcclxuICAgIHtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcIndhbGxcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
