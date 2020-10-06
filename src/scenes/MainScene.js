import Phaser from "phaser"

class MainScene extends Phaser.Scene{
  constructor(){
    super('MainScene')
  }

  preload(){
    this.load.image('playerShip', '../assets/sprites/playerShip.png')
  }

  create(){
    
  }

  update(){
    
  }
}

export default MainScene