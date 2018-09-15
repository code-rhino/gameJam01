var StateMain = {

    preload:function()
     {
        // load images into library
         game.load.image("red", "images/main/blocks/red.png");
         game.load.image("blue", "images/main/blocks/blue.png");
         game.load.image("green", "images/main/blocks/green.png");
         game.load.image("yellow", "images/main/blocks/yellow.png");
         game.load.spritesheet("rings", "images/main/rings.png",60,65,5);
 
         game.load.audio("points", 'sounds/points.mp3');
         game.load.audio("gameOver", "sounds/gameOver.mp3");
     },
 
     create:function()
     {
         score = 0;
         this.speed = 200;
         this.incSpeed = 20;
         this.maxSpeed = 450;
         game.physics.startSystem(Phaser.Physics.Arcade);
 
         this.pointSound = game.add.audio("points");
         this.gameOverSound = game.add.audio("gameOver");
 
         console.log("I'm Ready")
         var red = game.add.image(0,0, "red");
         var blue = game.add.image(0,100, "blue");
         var green = game.add.image(100,0,"green");
         var yellow = game.add.image(100,100,"yellow");
 
         red.inputEnabled = true;
         red.name="red";
 
         blue.inputEnabled = true;
         blue.name="blue";
 
         green.inputEnabled = true;
         green.name="green";
 
         yellow.inputEnabled = true;
         yellow.name="yellow";
 
         red.events.onInputDown.add(this.changeColor,this);
         green.events.onInputDown.add(this.changeColor,this);
         blue.events.onInputDown.add(this.changeColor,this);
         yellow.events.onInputDown.add(this.changeColor,this);
 
         this.blockGroup = game.add.group();
         this.blockGroup.add(red);
         this.blockGroup.add(blue);
         this.blockGroup.add(green);
         this.blockGroup.add(yellow);
 
         this.blockGroup.x = game.world.centerX- this.blockGroup.width/2;
         this.blockGroup.y = game.height - 250;
 
         this.ring = game.add.image(game.world.centerX,this.blockGroup.y-100, "rings");
         this.ring.anchor.set(0.5,0.5);
 
 
 
         this.scoreText = game.add.text(game.world.centerX,150, "0");
         this.scoreText.fill = "#ffffff";
         this.scoreText.fontSize = 64;
         this.scoreText.anchor.set(0.5,0.5);
 
         this.scoreLabel = game.add.text(game.world.centerX,100,"score");
         this.scoreLabel.fill = "#ffffff";
         this.scoreLabel.fontSize = 32;
         this.scoreLabel.anchor.set(0.5, 0.5);
 
         this.setListeners();
         this.resetBall();
     },
     setListeners:function(){
         game.input.onUp.add(this.resetRing,this);
     },
     resetBall:function(){
         var color = game.rnd.integerInRange(0,5);
         var xx = game.rnd.integerInRange(0,game.world.width);
         var yy = game.rnd.integerInRange(0,100);
 
         this.speed += this.incSpeed;
         if (this.speed > this.maxSpeed){
             this.speed = this.maxSpeed;
         }
     },
     changeColor:function(target){
         console.log(target.name);
         // 0 = white, 1 = blue  2 = green 3 red yellow
         switch(target.name){
             case "red":
                 this.ring.frame = 3;
                 break;
             case "blue":
                 this.ring.frame = 1;
                 break;
             case "green":
                 this.ring.frame = 2;
                 break;
             case "yellow":
                 this.ring.frame = 4;
                 break;
         }
     },
     resetRing:function(){
       this.ring.frame=0;
     },
     update:function()
     {
 
     }
 
 }
 