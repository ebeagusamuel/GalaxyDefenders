import Phaser from 'phaser';
import API from '../LeaderBoard';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    this.add.text(120, 10, 'Game Over', {
      fontFamily: 'monospace',
      fontSize: 40,
      fontStyle: 'bold',
      color: '#fed141',
      align: 'center',
    });

    this.add.text(130, 60, `Your Score: ${window.global.score}`, {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#fed141',
      align: 'center',
    });

    this.add.text(140, 100, 'Top scores', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.add.text(80, 130, 'PlayerName          Score', {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#fed141',
      align: 'center',
    });

    API.topScores().then((playersScores) => {
      const count = playersScores.length <= 10 ? playersScores.length : 10;
      for (let i = 0; i < count; i += 1) {
        this.add.text(80, 170 + i * 20, `${playersScores[i].user}`, {
          fontFamily: 'monospace',
          fontSize: 16,
          fontStyle: 'bold',
          color: '#ffffff',
          align: 'center',
        });
        this.add.text(320, 170 + i * 20, `${playersScores[i].score}`, {
          fontFamily: 'monospace',
          fontSize: 16,
          fontStyle: 'bold',
          color: '#ffffff',
          align: 'center',
        });
      }
    });

    this.restartButton = this.add.text(180, 400, 'Restart', {
      fontFamily: 'monospace',
      fontSize: 18,
      fontStyle: 'bold',
      color: '#000000',
      backgroundColor: '#fed141',
      padding: 5,
    });
    this.restartButton.setInteractive();
    this.restartButton.on(
      'pointerup',
      () => {
        window.location.reload();
      },
      this,
    );
  }
}

export default GameOverScene;
