import Phaser from 'phaser'
import MenuScene from './scenes/MenuScene'

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
  parent: "divId",
  dom: {
    createContainer: true,
  },
  scene: [MenuScene],
  pixelArt: true,
  roundPixels: true
}

window.global = {
  name: ''
}

const game = new Phaser.Game(config)

export default game
