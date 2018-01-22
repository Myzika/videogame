/*global Phaser*/
// var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, '');
var game_state = {};

game_state.end = {

    /**
     * Loads in the images
     */
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg');
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
        game.load.audio('song', 'assets/sadsong.mp3', true);
    },

    create: function() {

        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');

        this.song = game.add.audio('song', 1, true);
        this.song.play();

        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 0,
            "Congratulations!", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 100,
            "You made it out!", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 200,
            "After making it out of this dungeon, this pit of hell, \nyou went on to take the down the government \nthrough the use of technological knowledge.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 350,
            "It took you over a year, and a lot of focused work, \nbut you managed to do it.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text5 = game.add.text(5, 500,
            "With no desire to run a country, you passed on leadership \nto the German government, \nwhich gave the US government a democratic system, \nand allowed it to govern itself.", {
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

    },

};
game.state.add('end', game_state.end);
//game.state.start('story');
