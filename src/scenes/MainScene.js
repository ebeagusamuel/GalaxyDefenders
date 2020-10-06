import Phaser from "phaser"
import Player from "../GameObjects/Player"
import GunShip from "../GameObjects/GunShip";

class MainScene extends Phaser.Scene{
  constructor(){
    super('MainScene')
  }

  preload(){
    this.load.image('playerShip', '../assets/sprites/playerShip.png')
    this.load.image('enemyShip1', '../assets/sprites/enemyShip1.png')
    this.load.image('enemyShip2', '../assets/sprites/enemyShip2.png')
    this.load.image('enemyShip3', '../assets/sprites/enemyShip3.png')
  }

  create(){
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "playerShip"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();

    this.time.addEvent({
      delay: 1000,
      callback: function() {
        var enemy = new GunShip(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });
  }

  update(){
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}

export default MainScene