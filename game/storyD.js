/*global Phaser game*/
var game_state = {};
var thing2 = 0;
game_state.storyD = {
    preload: function() {
        game.load.image('sky', 'assets/sky.jpeg');
        game.load.spritesheet('bjarne', 'assets/michael.png', 30, 81);
        game.load.image('michael', 'assets/michaelclone.jpg', 525, 500);
        game.load.image('painting', 'assets/painting.jpg');
        game.load.image('coding', 'assets/wood.jpg');
        game.load.audio('talk', 'assets/script_3.mp3');
        game.load.audio('talk2', 'assets/script_4.mp3');
        game.load.audio('talk3', 'assets/script_5.mp3');
    },
    create: function() {

        /**Adding a background*/
        game.add.sprite(0, 0, 'coding');

        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 50,
            "Thank you! Are we heading straight to the meeting, \nor are we going to stop off first?", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 150,
            "The man did not speak, turning the key in the ignition and driving.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 250,
            "Uh, excuse me, can you answer my question?", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 350,
            "Still, the driver remained silent.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text5 = game.add.text(5, 450,
            "Okay. Be that way then.", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text6 = game.add.text(5, 550,
            "Markus fell into an uncomfortable silence. \nHis foot thumped against the ground in irritation.", {
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
        text6.setTextBounds(0, 0, screen.availWidth, screen.availHeight);
        this.cursors = game.input.keyboard.createCursorKeys();
        this.talk = game.add.audio('talk');
        this.talk2 = game.add.audio('talk2');
        this.talk3 = game.add.audio('talk3');
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },


    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('storyE');
        }
        if (this.spaceKey.isDown) {
            alert("outer");
            if (thing2 == 0) {
                this.talk.play();
                thing2++;
            }
            else if (thing2 == 1) {
                this.talk2.play();
                thing2++;
            }
            else if (thing2 == 2){
                this.talk3.play();
                thing2++;
            }

        }
    },
};
game.state.add('storyD', game_state.storyD);
