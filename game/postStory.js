/*global Phaser game*/
var game_state = {};
var thing = 0;
game_state.postStory = {
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
            "He woke up in a dark room.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 150,
            "He fumbled around, unsure of where he was.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 250,
            "After some time, he found a switch, and he flicked it.", {
                font: 'italic 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 350,
            "Light flooded into the room. \nHe could see the exit, over a room full of obstacles.", {
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
        this.talk2 = game.add.audio('talk2');
        this.talk3 = game.add.audio('talk3');
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },


    update: function() {
        if (this.cursors.right.isDown) {
            game.state.start('main');
        }
        if (this.spaceKey.isDown) {
            alert("outer");
            if (thing == 0) {
                this.talk.play();
                alert("a");
                thing++;
            }
            else if (thing == 1) {
                this.talk2.play();
                alert("b");
                thing++;
            }
            else if (thing == 2){
                this.talk3.play();
                alert("c");
                thing++;
            }

        }
    },
};
game.state.add('postStory', game_state.postStory);
