/*global Phaser game*/
var game_state = {};

game_state.storyFull = {
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
    },
    create: function() {
        
        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');
        //game.stage.backgroundColor = '#3598db';
        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(0, 0, "Bjarne- a brand new immigrant to the US from Germany. \nHe’s brilliant: a coder, a linguist, a psychologist. ", {
            font: 'bold 40px Courier',
            align: "center",
            boundsAlignH: 'center',
            boundsAlignV: 'top',
            fill: 'white',
        });
        var text2 = game.add.text(0, 150, "He’s so smart, that the government of America wants him. \nThey want his intelligence, his efficiency.", {
            font: 'bold 40px Courier',
            align: 'center',
            boundsAlignH: 'center',
            boundsAlignV: 'top',
            fill:'white',
        })
        text.setTextBounds(0, 0, screen.availWidth, screen.availHeight)
        // game.add.sprite(screen.availWidth/3-70, 50, 'michael');
        // this.cursors = game.input.keyboard.createCursorKeys();
        //  game.input.onDown(test, this);
        // var timer = game.time.create(false);
        // timer(2000, test, this);
        // timer.start();
    },
    
    
    update: function() {
        
    },
    test: function() {
        game.add.sprite(0, 0, 'coding');
    },
};
game.state.add('storyFull', game_state.storyFull);
//game.state.start('story');
