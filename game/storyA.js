/*global Phaser game*/
var game_state = {};

game_state.storyA = {
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
        game.load.audio('music', 'assets/Songs.mp3');
    },
    create: function() {

        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');

        var song = game.add.audio('music');
        song.play();
        
        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 0,
            "Bjarne- a brand new immigrant to the US from Germany. \nHe’s brilliant: a coder, a linguist, a psychologist. ", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 150,
            "He’s so smart, that the government of America wants him. \nThey want his intelligence, his efficiency.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 300,
            "The only issue? In this world, America’s democracy \nfell decades ago, to be replaced by an absolute monarchy.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 450,
            "The current ruler, Emperor Lewis, is a cruel man. \nHe would claim young people, mainly immigrants as his own.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text5 = game.add.text(5, 600,
            "These young people rarely made it out of service alive, \nand on the off-chance that they did, \nthey often suffered from psychological damage.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        text.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text2.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text3.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text4.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text5.setTextBounds(0, 0, screen.availWidth, screen.availHeight);

        this.cursors = game.input.keyboard.createCursorKeys();

    },


    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('storyB');
        }
    },
    test: function() {
        game.add.sprite(0, 0, 'coding');
    },
};
game.state.add('storyA', game_state.storyA);
game.state.start('storyA');