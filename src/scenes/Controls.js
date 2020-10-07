class Controls extends Phaser.Scene {
  constructor(){
    super({key: "Controls"})
  }

  create(){
    this.add.text(80, this.game.config.height * 0.05, "Play Controls", {
      fontFamily: 'monospace',
      fontSize: 40,
      fontStyle: 'bold',
      color: '#fed141',
      align: 'center'
    })
    this.add.text(40, this.game.config.height * 0.5,
      `Move-Left: Left-cusor-key(←)\n\nMove-Right: Right-cusor-key(→)\n\nMove-Up: Up-cusor-key(↑)\n\nMove-Down: Down-cusor-key(↓)\n\nShoot: [Space]`,{
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#fed141',
        align: 'center'
      })
      .setOrigin(0, 1);

    this.btnBack = this.add.text(
      200, 400,
      "Back", {
        fontFamily: "monospace",
        fontSize: 18,
        fontStyle: "bold",
        color: "#000000",
        backgroundColor: "#fed141",
        padding: 5,
      }
    ).setOrigin(0, 1)
    this.btnBack.setInteractive();
    this.btnBack.on("pointerup", () => {
      this.scene.switch("MenuScene")
    }, this)
  }

}

export default Controls