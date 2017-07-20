
class Boot {
  preload() {
    console.log("Boot.preload")
  }
  create(){
    console.log("Boot.create")
    game.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("Load.preload")
    game.load.spritesheet("cake","assets/cake.png",43,64,1)
    game.load.spritesheet("dots","assets/dots.png",320,560,17)

  }

  create() {
    console.log("Load.create")
    game.state.start("Play")
  }
}

class Play {
  preload(){
    this.bg = game.add.sprite(0,0,"dots")
    this.bg.animations.add("bganim")
    this.bg.animations.play("bganim",8,true)
  }


  create() {
    console.log("Play.create")
    game.physics.startSystem(Phaser.Physics.ARCADE)

    this.cake = game.add.sprite(30,30,"cake")
    game.physics.enable(this.cake)
    this.cake.body.gravity.y = 1500
    this.cake.body.collideWorldBounds = true
    this.cake.body.bounce.setTo(0.4)
    this.cake.body.velocity.y = -400
    this.cake.body.velocity.x = 300

    this.cake2 = game.add.sprite(30,30,"cake")
    game.physics.enable(this.cake2)
    this.cake2.body.gravity.y = 100
    this.cake2.body.collideWorldBounds = true
    this.cake2.body.bounce.setTo(1.0)
    this.cake2.body.velocity.y = -200
    this.cake2.body.velocity.x = 500

    this.cursors = game.input.keyboard.createCursorKeys()

  }

  update() {
    game.physics.arcade.collide(this.cake,this.cake2)

    if (this.cursors.left.isDown) {
      this.cake.body.velocity.x = -300
    }
    if (this.cursors.right.isDown) {
      this.cake.body.velocity.x = 300
    }
    if (this.cursors.up.isDown) {
      this.cake.body.velocity.y = -500
    }
    if (this.cursors.down.isDown) {
      this.cake.body.velocity.y = 100
    }
  }
}

var game = new Phaser.Game(320,560);
game.state.add("Boot",Boot)
game.state.add("Load",Load)
game.state.add("Play",Play)
game.state.start("Boot")
