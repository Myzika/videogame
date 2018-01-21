/*global Phaser*/
var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, '');
var game_state = {};

game_state.story = {
    
    /**
     * Loads in the images
     */
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg');
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
    },
    
    create: function() {
        
        /**Adds the background*/
        game.add.sprite(0, 0, 'painting');

        
        /**Adds text */
        var text = game.add.text(0, 0, "Name: Markus Callum Sauer \nAge: 18 \nNationality: German", {
            font: 'bold 40px Courier',
            align: "center",
            boundsAlignH: 'center',
            boundsAlignV: 'bottom',
            fill: 'white',
        });
        text.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        var face = game.add.sprite(screen.availWidth / 2, 50, 'michael');
        face.centerX = screen.availWidth/2;
        face.centerY= screen.availHeight/3+50;
        
        this.cursors = game.input.keyboard.createCursorKeys();

    },

    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('storyA');
        }
    },

};
game.state.add('story', game_state.story);
game.state.start('story');
