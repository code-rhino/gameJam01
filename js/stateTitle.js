var StateTitle={

   preload:function()
    {
       console.log("Title State")
       game.load.image("logo","images/title/gameLogo.png");
       game.load.spritesheet("buttons","images/ui/buttons.png",265,75)
    },

    create:function()
    {
        this.logo = game.add.sprite(game.world.centerX,game.world.centerY,"logo");
        this.logo.anchor.set(0.5,0.5);
        this.btnStart = game.add.button(game.world.centerX,game.world.height -120,"buttons",this.startGame,this,7,6,7);
        this.btnStart.anchor.set(0.5,0.5);
    },

    update:function()
    {

    },

    startGame:function()
    {
        game.state.start("StateMain")
    }

}
