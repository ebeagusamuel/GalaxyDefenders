import Phaser from 'phaser'

class GameOverScene extends Phaser.Scene {
  constructor(){
    super('GameOverScene')
  }

  create(){
    this.add.text(
      120,
      10,
      "Game Over",
      {
        fontFamily: "monospace",
        fontSize: 40,
        fontStyle: "bold",
        color: "#fed141",
        align: "center",
      }
    );
  }
}

export default GameOverScene