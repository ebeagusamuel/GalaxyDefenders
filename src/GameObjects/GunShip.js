import Entity from './Entities'

class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyShip1", "GunShip");
    
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default GunShip