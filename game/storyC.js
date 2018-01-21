/*global Phaser game*/
var game_state = {};

var thing1 = 2;
game_state.storyC = {

    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
        game.load.audio('talk', 'assets/script_1.mp3');
        game.load.audio('talk2', 'assets/script_2.mp3');
    },

    create: function() {

        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');


        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 50,
            "Oh, hello!", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 150,
            "The man merely grunted and took Bjarne’s bags.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 250,
            "Oh! Are you here to pick me up? Alright!", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 350,
            "Bjarne grabbed the rest of his stuff. \nThe man walked towards a shiny, black car.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text5 = game.add.text(5, 500,
            "The man opened the trunk and placed down Bjarne’s stuff, \nand Bjarne followed suit.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text6 = game.add.text(5, 650,
            "Then, the man opened the door, and helped Bjarne in.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
            var text7 = game.add.text(5, 700,
            "Press spacebar to hear the italic words!", {
                font: 'bold 20px Courier',
                align: 'center',
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        text.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text2.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text3.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text4.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text5.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        text6.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
                text7.setTextBounds(0, 0, screen.availWidth, screen.availHeight);


        this.cursors = game.input.keyboard.createCursorKeys();

        this.talk = game.add.audio('talk');
        this.talk2 = game.add.audio('talk2');
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('storyD');
        }

        if (this.spaceKey.isDown) {
            if ((thing1%2) == 0) {
                this.talk.play();
                thing1++;
            }
            else if ((thing1%2) == 1) {

                this.talk2.play();
                thing1++;
            }

        }
    },
};
game.state.add('storyC', game_state.storyC);
