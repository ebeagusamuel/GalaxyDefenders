import Phaser from "phaser";
import game from '../index'

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
  }
}

export default MenuScene