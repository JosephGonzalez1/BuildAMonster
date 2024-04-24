class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 50;
        
        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY + 50;
        
        this.leftEyeX = this.bodyX - 35;
        this.leftEyeY = this.bodyY - 50;
        
        this.rightEyeX = this.bodyX + 35;
        this.rightEyeY = this.bodyY - 50;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 125;
        
        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 125;

        this.leftEarX = this.bodyX - 35;
        this.leftEarY = this.bodyY - 115;
        
        this.rightEarX = this.bodyX + 35;
        this.rightEarY = this.bodyY - 115;

        this.mouthX = this.bodyX + 0;
        this.mouthY = this.bodyY + 0;


        
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
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.leftEye.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_green_eye.png");
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_green_eye.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('S'), 500)) {
            this.toggleSmile();
        }
    
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('F'), 500)) {
            this.toggleFangs();
        }
    
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 500)) {
            this.moveLeft();
        }
    
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 500)) {
            this.moveRight();
        }       
    }
    // Function to toggle smile
    toggleSmile() {
        this.my.sprite.smile.visible = true;
        this.my.sprite.fangs.visible = false;
    }

    // Function to toggle fangs
    toggleFangs() {
        this.my.sprite.smile.visible = false;
        this.my.sprite.fangs.visible = true;
    }

    // Function to move left
    moveLeft() {
        for (let spriteName in this.my.sprite) {
            this.my.sprite.body.x -= 1;
            this.my.sprite.leftArm.x -= 1;
            this.my.sprite.rightArm.x -= 1;
            this.my.sprite.leftEye.x -= 1;
            this.my.sprite.rightEye.x -= 1;
            this.my.sprite.leftLeg.x -= 1;
            this.my.sprite.rightLeg.x -= 1;
            this.my.sprite.leftEar.x -= 1;
            this.my.sprite.rightEar.x -= 1;
            this.my.sprite.fangs.x -= 1;
            this.my.sprite.smile.x -= 1;
        }
    }

    // Function to move right
    moveRight() {
        for (let spriteName in this.my.sprite) {
            this.my.sprite.body.x += 1;
            this.my.sprite.leftArm.x += 1;
            this.my.sprite.rightArm.x += 1;
            this.my.sprite.leftEye.x += 1;
            this.my.sprite.rightEye.x += 1;
            this.my.sprite.leftLeg.x += 1;
            this.my.sprite.rightLeg.x += 1;
            this.my.sprite.leftEar.x += 1;
            this.my.sprite.rightEar.x += 1;
            this.my.sprite.fangs.x += 1;
            this.my.sprite.smile.x += 1;
        }
    }
}