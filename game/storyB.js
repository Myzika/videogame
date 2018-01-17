/*global Phaser game*/
var game_state = {};

game_state.storyB = {
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

        //https://github.com/photonstorm/phaser/blob/v2.2.2/src/sound/AudioSprite.js
        var text = game.add.text(5, 0,
            "To be selected meant that there was a very small chance of escaping. \nThe smartest were always taken, and those with a darker backstory preferred \nbecause there was a lower chance of people looking for them.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text2 = game.add.text(5, 150,
            "That, is why Bjarne was the ultimate target. \nEverything about the young man fit the mold that the government wanted.", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text3 = game.add.text(5, 250,
            "He was ingenious, with a terrible, dark backstory, \nand substance abuse issues. ", {
                font: 'bold 30px Courier',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text4 = game.add.text(5, 350,
            "I took my first step out of the airport and looked around, \ntrying to find my bearings, to memorize my surroundings. \nI had a meeting I needed to get to. \nSomeone was supposed to meet me here, but where was here?", {
                font: 'italic 30px Avenir',
                align: "center",
                boundsAlignH: 'center',
                boundsAlignV: 'top',
                fill: 'white',
            });
        var text5 = game.add.text(5, 550,
            "Bjarne blinked a few times, trying to get used to the area. \nHe rearranged his bags, as he waited. \nA well-built man came out to stand in front of him.", {
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
            game.state.start('storyC');
        }
    },
    test: function() {
        game.add.sprite(0, 0, 'coding');
    },
};
game.state.add('storyB', game_state.storyB);
