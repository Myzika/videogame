/*global Phaser game*/
var game_state = {};
var thing = 0;
game_state.storyE = {
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
        game.load.audio('talk', 'assets/script_6.mp3');
    },
    create: function() {

        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');

        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 50,
            "Rather than going down the main freeway, as Markus had expected, \nthey instead turned down a dark alley, \nthat was barely wide enough for the car.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 200,
            "The man did not speak, turning the key in the ignition and driving. \nWait! Where are we going? Why are we not going down the freeway?", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 325,
            "Finally, the driver stopped the car and turned around, \nirritatedly at the young man. \nHe slammed his fist into Markus’ skull.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 500,
            "Markus fell into a state of unconsciousness.", {
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
        this.cursors = game.input.keyboard.createCursorKeys();
        this.talk = game.add.audio('talk');
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },


    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('postStory');
        }
        if (this.spaceKey.isDown) {
            this.talk.play();
        }
    },
};
game.state.add('storyE', game_state.storyE);
