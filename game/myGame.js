/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};

game_state.main = function() {};

game_state.main.prototype = {
    score: 0,
    preload: function() {

        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.spritesheet('star', 'assets/phone.png', 26, 46);
        game.load.spritesheet('dude', 'assets/michael.png', 30, 81);

    },
    create: function() {
        /**Enabling the Arcade Physics system*/
        game.physics.startSystem(Phaser.Physics.ARCADE);

        /**Adding a background*/
        game.add.sprite(0, 0, 'sky');
        
        

        /**
         * Contains the ground and the two ledges,
         * Enables the physics in that group.
         */
        this.platforms = game.add.group();
        this.platforms.enableBody = true;

        /**Creating a group for the ground*/
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');

        /**Set width to the width of the game*/
        ground.scale.setTo(2, 2);

        /**Stops the ground from falling away*/
        ground.body.immovable = true;

        //The ledges
        var ledge = this.platforms.create(50, 450, 'ground');
        ledge.body.immovable = true;
        ledge.scale.setTo(.05, .2);


        var ledge1 = this.platforms.create(50, 350, 'ground');
        ledge1.body.immovable = true;
        ledge1.scale.setTo(.05, .2);

        var ledge2 = this.platforms.create(50, 250, 'ground');
        ledge2.body.immovable = true;
        ledge2.scale.setTo(.05, .2);

        var ledge3 = this.platforms.create(62, 250, 'ground');
        ledge3.body.immovable = true;
        ledge3.scale.setTo(.02, 100);

        // var ledge = this.platforms.create(0, 100, 'ground');
        // ledge.body.immovable = true;

        // var ledge = this.platforms.create()

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
        for (var i = 0; i < 3; i++) {
            /**Creates stars at even spaces*/
            var star = this.stars.create(i * 300, 0, 'star');

            /**Star gravity*/
            star.body.gravity.y = 300;
        }

        /**Score display*/
        this.scoreText = game.add.text(16, 16, "Score: 0", {
            fontSize: '32px',
            fill: '#000'
        });
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

        /**Moves the player to the left when the left arrow key is pressed*/
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
        }

        /**Moves the player to the right when the right arrow key is pressed*/
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;
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
        this.scoreText.text = `Score: ${this.score}`;
    }
};

game.state.add('main', game_state.main);
game.state.start('main');
