import Phaser from "phaser"
import Player from "../GameObjects/Player"
import GunShip from "../GameObjects/GunShip";
// import CarrierShip from '../GameObjects/CarrierShip'
import ChaserShip from '../GameObjects/ChaserShip'

class MainScene extends Phaser.Scene{
  constructor(){
    super('MainScene')
  }

  preload(){
    this.load.image('playerShip', '../assets/sprites/playerShip.png')
    this.load.image('enemyShip1', '../assets/sprites/enemyShip1.png')
    this.load.image('enemyShip2', '../assets/sprites/enemyShip2.png')
    this.load.image('enemyShip3', '../assets/sprites/enemyShip3.png')
    this.load.image('enemyLaser', '../assets/sprites/enemyLaser.png')
    this.load.image('playerLaser', '../assets/sprites/playerLaser.png')
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
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {
    
            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        // else {
        //   enemy = new CarrierShip(
        //     this,
        //     Phaser.Math.Between(0, this.game.config.width),
        //     0
        //   );
        // }
    
        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
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

    if (this.keySpace.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();
    }
  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
}

export default MainScene