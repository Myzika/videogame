/*global Phaser*/
var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, '');
var game_state = {};

game_state.story= {
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
    },
    create: function() {
        game.add.sprite(0, 0, 'painting');
        var text = game.add.text(0, 0, "Bjarne- a brand new immigrant to the US from Germany. \nHe’s brilliant: a coder, a linguist, a psychologist. ", {
            font: 'bold 40px Courier',
            align: "center",
            boundsAlignH: 'center',
            boundsAlignV: 'bottom',
            fill: 'white',
        });
        text.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        game.add.sprite(screen.availWidth / 3 - 70, 50, 'michael');
        
        this.cursors = game.input.keyboard.createCursorKeys();

    },

    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('storyFull');
        //   game.add.sprite(0, 0, 'coding');
        }
    },

};
game.state.add('story', game_state.story);
game.state.start('story');
