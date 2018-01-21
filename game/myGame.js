/*global Phaser game*/
var game_state = {};

game_state.main = function() {};

game_state.main.prototype = {
    score: 0,
    /**
     * Loads in all of the sprites and sounds
     */
    preload: function() {

        game.load.image('sky', 'assets/sky.jpeg');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('star', 'assets/phone.png', 26, 46);
        game.load.spritesheet('dude', 'assets/michael.png', 30, 81);
        game.load.audio('kids', 'assets/marteriakids.mp3');
        game.load.image('door', 'assets/door.png');
        game.load.image('ground2', 'assets/bigcube.png');
        game.load.image('stone', 'assets/stone.jpg');

    },
    create: function() {
        /**Enabling the Arcade Physics system*/
        game.physics.startSystem(Phaser.Physics.ARCADE);

        /**Adding a background*/
        game.add.sprite(0, 0, 'sky');

        this.song = game.add.audio('kids', .25, true);
        this.song.play();

        /**
         * Contains the ground and the two ledges,
         * Enables the physics in that group.
         */
        this.platforms = game.add.group();
        this.platforms.enableBody = true;

        /**Creating a group for the ground*/
        var ground = this.platforms.create(0, 650, 'stone');
        var ground2= this.platforms.create(596, 650, 'stone');
        /**Set width to the width of the game*/
        ground.scale.setTo(1, 1);
        ground2.scale.setTo(1,1);

        /**Stops the ground from falling away*/
        ground.body.immovable = true;
        ground2.body.immovable=true;

        //The ledges
        var ledge4 = this.platforms.create(50, 550, 'ground');
        ledge4.body.immovable = true;
        ledge4.scale.setTo(.05, .2);

        var ledge1 = this.platforms.create(50, 450, 'ground');
        ledge1.body.immovable = true;
        ledge1.scale.setTo(.05, .2);

        var ledge2 = this.platforms.create(50, 350, 'ground');
        ledge2.body.immovable = true;
        ledge2.scale.setTo(.05, .2);

        var ledge3 = this.platforms.create(50, 250, 'ground');
        ledge3.body.immovable = true;
        ledge3.scale.setTo(.05, .2);

        var ledge = this.platforms.create(62, 170, 'stone');
        ledge.body.immovable = true;
        ledge.scale.setTo(.02, 200); 



        var ledge5 = this.platforms.create(120, 550, 'ground');
        ledge5.body.immovable = true;
        ledge5.scale.setTo(.8, .2);

        var ledge6 = this.platforms.create(165, 455, 'ground');
        ledge6.body.immovable = true;
        ledge6.scale.setTo(.8, .2);

        var ledge7 = this.platforms.create(120, 0, 'stone');
        ledge7.body.immovable = true;
        ledge7.scale.setTo(.02, 1.6);
        
        var ledge8 = this.platforms.create(120, 360, 'ground');
        ledge8.body.immovable = true;
        ledge8.scale.setTo(.8, .2);
        
        var ledge9=this.platforms.create(300, 81, 'stone');
        ledge9.body.immovable=true;
        ledge9.scale.setTo(.02, 200);
        
        var ledge10 = this.platforms.create(165, 265, 'ground');
        ledge10.body.immovable = true;
        ledge10.scale.setTo(.8, .2);
        
        var ledge11 = this.platforms.create(120, 170, 'ground');
        ledge11.body.immovable = true;
        ledge11.scale.setTo(.8, .2);
        
        var ledge12 = this.platforms.create(340, 0, 'stone');
        ledge12.body.immovable = true;
        ledge12.scale.setTo(.02, 1.6);
        
        var ledge13=this.platforms.create(450, 81, 'stone');
        ledge13.body.immovable=true;
        ledge13.scale.setTo(.02, 200);
        
        var ledge14 = this.platforms.create(350, 550, 'ground');
        ledge14.body.immovable = true;
        ledge14.scale.setTo(.018, .2);
        
        var ledge15 = this.platforms.create(448, 455, 'ground');
        ledge15.body.immovable = true;
        ledge15.scale.setTo(.018, .2);
        
        var ledge16 = this.platforms.create(350, 360, 'ground');
        ledge16.body.immovable = true;
        ledge16.scale.setTo(.018, .2);
        
        var ledge17 = this.platforms.create(448, 265, 'ground');
        ledge17.body.immovable = true;
        ledge17.scale.setTo(.018, .2);
        
        var ledge18 = this.platforms.create(350, 170, 'ground');
        ledge18.body.immovable = true;
        ledge18.scale.setTo(.018, .2);
        
        var ledge19 = this.platforms.create(448, 92, 'ground');
        ledge19.body.immovable = true;
        ledge19.scale.setTo(.018, .2);
        
        var ledge20 = this.platforms.create(520, 580, 'ground');
        ledge20.body.immovable = true;
        ledge20.scale.setTo(.05, 1.5);
        
        var ledge21 = this.platforms.create(520, 485, 'ground');
        ledge21.body.immovable = true;
        ledge21.scale.setTo(3.5, .2);

        var ledge22 = this.platforms.create(570, 580, 'ground');
        ledge22.body.immovable = true;
        ledge22.scale.setTo(.05, 1.5);

        var ledge23 = this.platforms.create(620, 580, 'ground');
        ledge23.body.immovable = true;
        ledge23.scale.setTo(.05, 1.5);

        var ledge24 = this.platforms.create(670, 580, 'ground');
        ledge24.body.immovable = true;
        ledge24.scale.setTo(.05, 1.5);

        var ledge25 = this.platforms.create(720, 580, 'ground');
        ledge25.body.immovable = true;
        ledge25.scale.setTo(.05, 1.5);

        var ledge26 = this.platforms.create(770, 580, 'ground');
        ledge26.body.immovable = true;
        ledge26.scale.setTo(.05, 1.5);

        var ledge27 = this.platforms.create(820, 580, 'ground');
        ledge27.body.immovable = true;
        ledge27.scale.setTo(.05, 1.5);

        var ledge28 = this.platforms.create(870, 580, 'ground');
        ledge28.body.immovable = true;
        ledge28.scale.setTo(.05, 1.5);

        var ledge29 = this.platforms.create(920, 580, 'ground');
        ledge29.body.immovable = true;
        ledge29.scale.setTo(.05, 1.5);

        var ledge30 = this.platforms.create(970, 580, 'ground');
        ledge30.body.immovable = true;
        ledge30.scale.setTo(.05, 1.5);

        var ledge31 = this.platforms.create(1020, 580, 'ground');
        ledge31.body.immovable = true;
        ledge31.scale.setTo(.05, 1.5);

        var ledge32 = this.platforms.create(1070, 580, 'ground');
        ledge32.body.immovable = true;
        ledge32.scale.setTo(.05, 1.5);

        var ledge33 = this.platforms.create(1120, 580, 'ground');
        ledge33.body.immovable = true;
        ledge33.scale.setTo(.05, 1.5);

        var ledge34 = this.platforms.create(1200, 570, 'ground');
        ledge34.body.immovable = true;
        ledge34.scale.setTo(.5, .5);

        //Second set of hurdles
        var ledge34 = this.platforms.create(520, 400, 'ground');
        ledge34.body.immovable = true;
        ledge34.scale.setTo(.3, .5);

        var ledge39 = this.platforms.create(520, 400, 'ground');
        ledge39.body.immovable = true;
        ledge39.scale.setTo(.05, 1.5);

        var ledge40 = this.platforms.create(560, 300, 'ground');
        ledge40.body.immovable = true;
        ledge40.scale.setTo(3.3, .2);

        var ledge41 = this.platforms.create(570, 400, 'ground');
        ledge41.body.immovable = true;
        ledge41.scale.setTo(.05, 1.5);

        var ledge42 = this.platforms.create(620, 400, 'ground');
        ledge42.body.immovable = true;
        ledge42.scale.setTo(.05, 1.5);

        var ledge43 = this.platforms.create(670, 400, 'ground');
        ledge43.body.immovable = true;
        ledge43.scale.setTo(.05, 1.5);

        var ledge44 = this.platforms.create(720, 400, 'ground');
        ledge44.body.immovable = true;
        ledge44.scale.setTo(.05, 1.5);

        var ledge45 = this.platforms.create(770, 400, 'ground');
        ledge45.body.immovable = true;
        ledge45.scale.setTo(.05, 1.5);

        var ledge46 = this.platforms.create(820, 400, 'ground');
        ledge46.body.immovable = true;
        ledge46.scale.setTo(.05, 1.5);

        var ledge47 = this.platforms.create(870, 400, 'ground');
        ledge47.body.immovable = true;
        ledge47.scale.setTo(.05, 1.5);

        var ledge48 = this.platforms.create(920, 400, 'ground');
        ledge48.body.immovable = true;
        ledge48.scale.setTo(.05, 1.5);

        var ledge49 = this.platforms.create(970, 400, 'ground');
        ledge49.body.immovable = true;
        ledge49.scale.setTo(.05, 1.5);

        var ledge50 = this.platforms.create(1020, 400, 'ground');
        ledge50.body.immovable = true;
        ledge50.scale.setTo(.05, 1.5);

        var ledge51 = this.platforms.create(1070, 400, 'ground');
        ledge51.body.immovable = true;
        ledge51.scale.setTo(.05, 1.5);

        var ledge52 = this.platforms.create(1120, 400, 'ground');
        ledge52.body.immovable = true;
        ledge52.scale.setTo(.05, 1.5);

        var ledge53 = this.platforms.create(510, 0, 'stone');
        ledge53.body.immovable = true;
        ledge53.scale.setTo(.02, 1.4);

        //More hurdles
        var ledge54 = this.platforms.create(570, 220, 'ground');
        ledge54.body.immovable = true;
        ledge54.scale.setTo(.05, 1.5);

        var ledge55 = this.platforms.create(620, 220, 'ground');
        ledge55.body.immovable = true;
        ledge55.scale.setTo(.05, 1.5);

        var ledge56 = this.platforms.create(670, 220, 'ground');
        ledge56.body.immovable = true;
        ledge56.scale.setTo(.05, 1.5);

        var ledge57 = this.platforms.create(720, 220, 'ground');
        ledge57.body.immovable = true;
        ledge57.scale.setTo(.05, 1.5);

        var ledge58 = this.platforms.create(770, 220, 'ground');
        ledge58.body.immovable = true;
        ledge58.scale.setTo(.05, 1.5);

        var ledge59 = this.platforms.create(820, 220, 'ground');
        ledge59.body.immovable = true;
        ledge59.scale.setTo(.05, 1.5);

        var ledge60 = this.platforms.create(870, 220, 'ground');
        ledge60.body.immovable = true;
        ledge60.scale.setTo(.05, 1.5);

        var ledge61 = this.platforms.create(920, 220, 'ground');
        ledge61.body.immovable = true;
        ledge61.scale.setTo(.05, 1.5);

        var ledge62 = this.platforms.create(970, 220, 'ground');
        ledge62.body.immovable = true;
        ledge62.scale.setTo(.05, 1.5);

        var ledge63 = this.platforms.create(1020, 220, 'ground');
        ledge63.body.immovable = true;
        ledge63.scale.setTo(.05, 1.5);

        var ledge64 = this.platforms.create(1070, 220, 'ground');
        ledge64.body.immovable = true;
        ledge64.scale.setTo(.05, 1.5);

        var ledge65 = this.platforms.create(1120, 220, 'ground');
        ledge65.body.immovable = true;
        ledge65.scale.setTo(.05, 1.5);

        var ledge66 = this.platforms.create(1200, 220, 'ground');
        ledge66.body.immovable = true;
        ledge66.scale.setTo(.5, .5);

        var ledge67 = this.platforms.create(540, 120, 'ground');
        ledge67.body.immovable = true;
        ledge67.scale.setTo(3.3, .2);

        /**
         * The sprite
         */
        this.player = game.add.sprite(0, 450, 'dude');

        /**Enables player physics*/
        game.physics.arcade.enable(this.player);

        /**Properties of sprite physics*/
        this.player.body.bounce.y = 0;
        this.player.body.gravity.y = 4500;
        this.player.body.collideWorldBounds = true;

        /**Walking animation*/
        this.player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14, true);
        this.player.animations.add('left', [18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 14, true);


        /**Sets up the controls*/
        this.cursors = game.input.keyboard.createCursorKeys();

        /**
         * Stars
         * These will be collectable.
         */
        this.stars = game.add.group();

        /**Enables physics for the stars*/
        this.stars.enableBody = true;
        /**Evenly spaced stars*/
        /**Creates stars at even spaces*/
        var star = this.stars.create(55, 120, 'star');
        var star = this.stars.create(140, 110, 'star');
        var star = this.stars.create(448, 0, 'star');

        /**Star gravity*/
        star.body.gravity.y = 300;


        /**Score display*/
        this.scoreText = game.add.text(16, 16, "Information: 0", {
            fontSize: '32px',
            fill: '#000'
        });

        this.door = game.add.group(); 
        this.door.enableBody = true;
        var door = this.door.create(screen.availWidth - 100, 10, 'door');
        door.enableBody = true;
        this.cheat = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    update: function() {
        /**
         * If the player overlaps with the stars, 
         * call the collectStar function
         */
        game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);

        /**Player and platform collision*/
        game.physics.arcade.collide(this.player, this.platforms);

        /**Star and platform collision*/
        game.physics.arcade.collide(this.stars, this.platforms);

        /**Sets player movement to 0*/
        this.player.body.velocity.x = 0;

        game.physics.arcade.overlap(this.player, this.door, this.end, null, this);

        /**Moves the player to the left when the left arrow key is pressed*/
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -300;
            this.player.animations.play('left');
        }

        /**Moves the player to the right when the right arrow key is pressed*/
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 300;
            this.player.animations.play('right');
        }

        /**When no keys are pressed, the player will stand still.*/
        else {
            this.player.animations.stop();
            this.player.frame = 13;
        }

        /**
         * Jumping
         * Conditional- if the player is touching the ground
         * AND if the up button is pressed
         */
        if (this.cheat.isDown) {
            this.player.body.velocity.y = -5000;
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -1000;
        }

    },
    /**
     * Collect star
     * @player {player} player
     * @star {starObject} star object
     */
    collectStar: function(player, star) {
        // Kill star and update
        star.kill();
        this.score += 1;
        this.scoreText.text = `Information: ${this.score}`;
    },

    /**
     * Ends the game when the player touches the door
     * @param {player} player
     * @param {door} door object
     */
    end: function(player, door) {
        if (this.score >= 3) {
            this.song.stop();
            game.state.start('end');
        }

    }
};

game.state.add('main', game_state.main);
