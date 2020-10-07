import Phaser from "phaser"
import Player from "../GameObjects/Player"
import GunShip from "../GameObjects/GunShip";
// import CarrierShip from '../GameObjects/CarrierShip'
import ChaserShip from '../GameObjects/ChaserShip'
import ScrollingBackground from '../GameObjects/ScrollingBackground'

class MainScene extends Phaser.Scene{
  constructor(){
    super('MainScene')
  }

  preload(){
    this.load.image("bg1", "../assets/sprites/bg1.png")
    this.load.image('playerShip', '../assets/sprites/playerShip.png')
    this.load.image('enemyShip1', '../assets/sprites/enemyShip1.png')
    this.load.image('enemyShip2', '../assets/sprites/enemyShip2.png')
    this.load.image('enemyShip3', '../assets/sprites/enemyShip3.png')
    this.load.image('enemyLaser', '../assets/sprites/enemyLaser.png')
    this.load.image('playerLaser', '../assets/sprites/playerLaser.png')
    this.load.spritesheet("explosion", "../assets/sprites/sprExplosion.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create(){
    this.anims.create({
      key: "explosion",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0
    });

    let score = this.add.text(10, 20, "Score:", {
      fontFamily: "monospace",
      fontSize: 18,
      fontStyle: "bold",
      color: "#000000",
      backgroundColor: "#fed141",
      padding: 5,
    })

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "playerShip"
    );

    this.cusors = this.input.keyboard.createCursorKeys();
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

    this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
      
        enemy.explode(true);
        playerLaser.destroy();
        window.global.score += 1
        score.setText(`Score: ${window.global.score}`)
      }      
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData("isDead") &&
          !enemy.getData("isDead")) {
        player.explode(false);
        player.onDestroy()
        enemy.explode(true);
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      if (!player.getData("isDead") &&
          !laser.getData("isDead")) {
        player.explode(false);
        player.onDestroy()
        laser.destroy();
      }
    });

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var bg = new ScrollingBackground(this, "bg1", i * 10);
      this.backgrounds.push(bg);
    }
  }

  update(){
    if (!this.player.getData("isDead")) {
      this.player.update();
      if (this.cusors.up.isDown) {
        this.player.moveUp();
      }
      else if (this.cusors.down.isDown) {
        this.player.moveDown();
      }
      if (this.cusors.left.isDown) {
        this.player.moveLeft();
      }
      else if (this.cusors.right.isDown) {
        this.player.moveRight();
      }
    
      if (this.keySpace.isDown) {
        this.player.setData("isShooting", true);
      }
      else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();

      if (enemy.x < -enemy.displayWidth ||
        enemy.x > this.game.config.width + enemy.displayWidth ||
        enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > this.game.config.height + enemy.displayHeight) {
    
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
    
          enemy.destroy();
        }
      }
    }

    for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
      var laser = this.enemyLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
      var laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
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
  };
}

export default MainScene