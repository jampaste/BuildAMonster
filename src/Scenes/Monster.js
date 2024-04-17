class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.bimmy = false;
        my.bimmy2 = false;
        my.bimmy3 = false;
        my.bimmy4 = false;
        my.sprite.leg = this.add.sprite(this.bodyX+50, this.bodyY+100, "monsterParts", "leg_whiteA.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX-50, this.bodyY+100, "monsterParts", "leg_whiteA.png");
        my.sprite.arm = this.add.sprite(this.bodyX+80, this.bodyY+40, "monsterParts", "arm_whiteA.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX-80, this.bodyY+40, "monsterParts", "arm_whiteA.png");
        my.sprite.leg2.flipX = true;
        my.sprite.arm2.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body2 = this.add.sprite(this.bodyX, this.bodyY-100, "monsterParts", "body_greenD.png");
        
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY-150, "monsterParts", "mouth_closed_sad.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY-150, "monsterParts", "mouthE.png");
        my.sprite.mouth3 = this.add.sprite(this.bodyX, this.bodyY-150, "monsterParts", "mouthJ.png");

        my.sprite.head = this.add.sprite(this.bodyX+70, this.bodyY-140, "monsterParts", "detail_green_horn_large.png");
        my.sprite.head2 = this.add.sprite(this.bodyX-70, this.bodyY-140, "monsterParts", "detail_green_horn_large.png");
        my.sprite.head3 = this.add.sprite(this.bodyX+85, this.bodyY-100, "monsterParts", "detail_green_horn_large.png");
        my.sprite.head4 = this.add.sprite(this.bodyX-85, this.bodyY-100, "monsterParts", "detail_green_horn_large.png");
        my.sprite.head2.flipX = true;
        my.sprite.head4.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX, this.bodyY-60, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye3 = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye4 = this.add.sprite(this.bodyX-60, this.bodyY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye5 = this.add.sprite(this.bodyX+60, this.bodyY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye6 = this.add.sprite(this.bodyX+50, this.bodyY-100, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eye7 = this.add.sprite(this.bodyX-50, this.bodyY-100, "monsterParts", "eye_psycho_dark.png");

        my.sprite.mouth2.visible = false;
        my.sprite.mouth3.visible = false;
        

        this.input.keyboard.on("keydown", function(event) {
            if(event.code === "KeyS") {
                my.bimmy = true;
            }
            if(event.code === "KeyF") {
                my.bimmy2 = true;
            }
            if(event.code === "KeyA"){
                my.bimmy3 = true;
            }
            if(event.code === "KeyD"){
                my.bimmy4 = true;
            }
        });

        
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
       if(my.bimmy == true){
        my.bimmy = false;
        my.sprite.mouth2.visible = true;
        my.sprite.mouth.visible = false;
        my.sprite.mouth3.visible = false;
       }
       if(my.bimmy2 == true){
        my.bimmy2 = false;
        my.sprite.mouth2.visible = false;
        my.sprite.mouth.visible = false;
        my.sprite.mouth3.visible = true;
       }
       if(my.bimmy3 == true) {
        my.bimmy3 = false;
        for(const bimmy in my.sprite) {
            my.sprite[bimmy].x -= 5;
        }
       }
       if(my.bimmy4 == true) {
        my.bimmy4 = false;
        for(const bimmy in my.sprite) {
            my.sprite[bimmy].x += 5;
        }
       }
    }

}