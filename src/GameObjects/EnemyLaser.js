import Entity from './Entities'

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyLaser");
    this.body.velocity.y = 200;
  }
}

export default EnemyLaser