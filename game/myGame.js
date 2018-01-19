/*global Phaser game*/

//var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};

game_state.main = function() {};

game_state.main.prototype = {
    score: 0,
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

        /**Star gravity*/
        star.body.gravity.y = 300;


        /**Score display*/
        this.scoreText = game.add.text(16, 16, "Information: 0", {
            fontSize: '32px',
            fill: '#000'
        });

        this.door = game.add.group();
        this.door.enableBody = true;
        var door = this.door.create(screen.availWidth - 100, 20, 'door');
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
    end: function(player, door) {
        if (this.score >= 3) {
            game.state.start('end');
            alert();
        }

    }
};

game.state.add('main', game_state.main);
game.state.start('main');
