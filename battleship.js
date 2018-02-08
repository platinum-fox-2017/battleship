// Your code here

class BattleShip {
  constructor(shipAmount, nukeA, nukeB, nukeC) {
    this.height = 6
    this.length = 6
    this.shipAmount = shipAmount
    this.nukeAmount = 3
    this.nukeCoords = [nukeA, nukeB, nukeC]
    this.shipSinked = 0
  }

  make_board(){
    let rows = [];
    for (let i = 0; i < this.height; i++) {
      rows.push([]);
      for (let j = 0; j < this.length; j++) {
        rows[i].push('[_]');
      }
    }
    return this.map = rows;
  }

  fire_nukes(){
    let transCoords = [];
    for (let i = 0; i < this.nukeAmount; i++) {
      transCoords.push(this.nukeCoords[i].split('-'));
      if (this.map[transCoords[i][0]-1][transCoords[i][1]-1] === '[#]') {
        this.map[transCoords[i][0]-1][transCoords[i][1]-1] = '[*]';
        this.shipSinked += 1;
      } else {
        this.map[transCoords[i][0]-1][transCoords[i][1]-1] = '[X]';
      }
    }
    if (this.shipSinked === this.shipAmount) {
      console.log('You have defeated the enemy fleet!');
      console.log('Thank you, Admiral!');
    }
  }

  spawn_ship_random(){
    let rng = Math.round(Math.random());
    if (rng === 0) {
      this.spawn_ship_1x1();
    } else {
      this.spawn_ship_1x2();
    }
  }

  spawn_ship_1x1(){
    let heightPos = Math.round(Math.random()*(this.height-1));
    let lengthPos = Math.round(Math.random()*(this.length-1));
    if (this.map[heightPos][lengthPos] === '[_]') {
      this.map[heightPos][lengthPos] = '[#]';
    } else {
      this.spawn_ship_1x1();
    }
  }

  spawn_ship_1x2(){
    // let size = [1, 2];
    let startHgt = Math.round(Math.random()*(this.height-1));
    let startLgh = Math.round(Math.random()*(this.length-1));
    let rng = Math.round(Math.random());
    if (rng === 0) { // vertical
      if (this.map[startHgt-1] !== undefined) {
        if (this.map[startHgt][startLgh] === '[_]' && this.map[startHgt-1][startLgh] === '[_]') { // up
          this.map[startHgt][startLgh] = '[#]';
          this.map[startHgt-1][startLgh] = '[#]';
        } else {
          this.spawn_ship_1x2();
        }
      } else {
        if (this.map[startHgt+1] !== undefined) {
          if (this.map[startHgt][startLgh] === '[_]' && this.map[startHgt+1][startLgh] === '[_]') { // down
            this.map[startHgt][startLgh] = '[#]';
            this.map[startHgt+1][startLgh] = '[#]';
          } else {
            this.spawn_ship_1x2();
          }
        } else {
          this.spawn_ship_1x2();
        }
      }
    } else { // horizontal
      if (this.map[startHgt][startLgh+1] !== undefined) {
        if (this.map[startHgt][startLgh] === '[_]' && this.map[startHgt][startLgh+1] === '[_]') { // right
          this.map[startHgt][startLgh] = '[#]';
          this.map[startHgt][startLgh+1] = '[#]';
        } else {
          this.spawn_ship_1x2();
        }
      } else {
        if (this.map[startHgt][startLgh-1] !== undefined) {
          if (this.map[startHgt][startLgh] === '[_]' && this.map[startHgt][startLgh-1] === '[_]') { // left
            this.map[startHgt][startLgh] = '[#]';
            this.map[startHgt][startLgh-1] = '[#]';
          } else {
            this.spawn_ship_1x2();
          }
        } else {
          this.spawn_ship_1x2();
        }
      }
    }
  }
}

var game = new BattleShip(3, '1-2', '4-3', '2-6');

game.make_board();
for (let i = 0; i < game.shipAmount; i++) {
  game.spawn_ship_random();
}
console.log(game.map);
console.log(' ');

game.fire_nukes();
console.log(game.map);
console.log(`Ship sinked = ${game.shipSinked}`);
