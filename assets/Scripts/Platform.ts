const { ccclass, property } = cc._decorator;

@ccclass
export default class Platform extends cc.Component {

    protected isTouched: boolean = false;

    private anim: cc.Animation = null;

    private moveSpeed: number = 50;

    private camera: cc.Node = null;

    start() {
        this.anim = this.getComponent(cc.Animation);

        this.camera = cc.find('Canvas/Main Camera');

        if (this.node.name == "Conveyor") {
            this.node.scaleX = (Math.random() >= 0.5) ? 1 : -1;
            this.moveSpeed *= this.node.scaleX;
        }
        else if(this.node.name == "Normal")
        {
            let canMove = (Math.random() > 0.8) ? true : false;
            if(canMove)
            {
                let moveDir = (Math.random() > 0.5) ? "v" : "h";
                let delayTime = Math.random() * 2;
                this.platformMove(moveDir, delayTime);
            }
        }
    }

    update(dt)
    {   
        if(this.camera.y - this.node.y >= 190) // platform out of screen
            this.platformDestroy();
    }

    playAnim() {
        if(this.anim)
            this.anim.play();
    }

    platformDestroy()
    {
        this.node.destroy();
    }

    platformMove(moveDir: string, delayTime: number)
    {
        let easeRate: number = 2;
        // ===================== TODO =====================
        // 1. Make platform move back and forth. You should use moveDir to decide move direction.
        //    'v' for vertical, and 'h' for horizontal.
        // 2. Use action system to make platfrom move forever.
        //    For horizontal case, you should first move right 50 pixel in 2s and then move back to initial position in 2s
        //    For vertical case, you should first move up 50 pixel in 2s and then move back to initial position in 2s
        //    You need to use "easeInOut" to modify your action with "easeRate" as parameter.
        // 3. Use scheduleOnce with delayTime to run this action. 
        // ================================================
    }

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
