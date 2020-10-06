import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
  constructor(){
    super('MenuScene')
  }

  preload(){
    this.load.plugin(
      "rexinputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
      true
    );
  }

  create(){
    this.title = this.add.text(
      this.game.config.width * 0.5,
      100,
      "Galaxy Defenders",
      {
        fontFamily: "monospace",
        fontSize: 40,
        fontStyle: "bold",
        color: "#fed141",
        align: "center",
      }
    );
    this.title.setOrigin(0.5);
      
    let printText = this.add
      .text(240, 200, "PlayerName:", {
        fontSize: "15px",
        fixedWidth: 100,
        fixedHeight: 100,
      })
      .setOrigin(0.5);

    let inputText = this.add
    .rexInputText(240, 200, 200, 30, {
      type: "text",
      placeholder: "Enter player name",
      fontSize: 20,
      color: "#ffffff",
      borderBottom: `3px solid #fed141`,
    })
    .setOrigin(0.5)
    .on("textchange", () => {
      printText.text = inputText.text;
    });

    printText.text = inputText.text

    this.submitButton = this.add.text(200, 230, "Submit", {
      fontFamily: "monospace",
      fontSize: 18,
      fontStyle: "bold",
      color: "#000000",
      backgroundColor: "#fed141",
      padding: 5,
    })
    this.submitButton.setInteractive();
    this.submitButton.on("pointerup", () => {
      if (printText.text.length > 0) {
        inputText.text = '';
        window.global.name = printText.text
      }
    })

    this.playButton = this.add.text(210, 280, "Play", {
      fontFamily: "monospace",
      fontSize: 18,
      fontStyle: "bold",
      color: "#000000",
      backgroundColor: "#fed141",
      padding: 5,
    });
    this.playButton.setInteractive();

    this.controlBtn = this.add.text(
      190,
      330,
      "Controls",
      {
        fontFamily: "monospace",
        fontSize: 18,
        fontStyle: "bold",
        color: "#000000",
        backgroundColor: "#fed141",
        padding: 5,
      }
    );
    this.controlBtn.setInteractive();
    this.controlBtn.on(
      "pointerup",
      () => {
        this.scene.switch("Controls");
      },
      this
    );

    this.add.text(100, this.game.config.height -  30, "Made By Samuel Ebeagu",{
      fontFamily: "monospace",
      fontSize: 20,
      fontStyle: "bold",
      color: "#fed141",
      align: "center",
    } )
  }
}

export default MenuScene