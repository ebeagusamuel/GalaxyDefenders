import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [],
  pixelArt: true,
  roundPixels: true
}

const game = new Phaser.Game(config)

export default game
