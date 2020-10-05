import Phaser from "phaser";
import game from '../index';

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
    let title = this.add.text(
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
    title.setOrigin(0.5);
      
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

    let submitButton = this.add.text(200, 230, "Submit", {
      fontFamily: "monospace",
      fontSize: 18,
      fontStyle: "bold",
      color: "#000000",
      backgroundColor: "#fed141",
      padding: 5,
    })

    submitButton.setInteractive();

    submitButton.on("pointerup", function(){
      if (printText.text.length > 0) {
        inputText.text = '';
        window.global.name = printText.text
      }
    })
  }
}

export default MenuScene