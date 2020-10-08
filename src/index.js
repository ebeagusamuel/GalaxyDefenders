import Phaser from 'phaser'
import MenuScene from './scenes/MenuScene'
import Controls from './scenes/Controls'
import MainScene from './scenes/MainScene'
import GameOverScene from './scenes/GameOverScene'
// import API from './LeaderBoard'

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
  scene: [MenuScene, Controls, MainScene, GameOverScene],
  pixelArt: true,
  roundPixels: true
}

window.global = {
  "user": '',
  "score": 0
}

const game = new Phaser.Game(config)


