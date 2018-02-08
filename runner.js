const Battleship = require('./battleship');

var myArgv = process.argv;

var battleship = new Battleship(myArgv[2]);
battleship.generateShip();
console.log('============================================')
console.log('This is the battlefield before the attack !')
console.log(battleship.getShip());
console.log('============================================')
console.log(" ");
console.log('============================================')
console.log('This is the Ship coordinate !');
console.log(battleship.getShipCoordinate());
console.log('============================================')
console.log(" ");
console.log("Now your attack launch !");
console.log(" ");

console.log('============================================')
console.log('This is the attack coordinate !')
console.log(battleship.getAttackCoordinate(myArgv[3]))
console.log('============================================')
console.log(" ");

battleship.attack();
console.log('============================================')
console.log('This is battlefield after attack !');
console.log(battleship.getShip());
console.log('============================================')
console.log(" ");

console.log(battleship.scoreResult());