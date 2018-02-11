let Battleship = require('./battleship')

// Your code here
let ship = process.argv[2];
let position = process.argv[3];

let runShip = new Battleship(ship, position.split(' '));

runShip.shootPos()
runShip.randomShipPos();
// console.log(runShip.createBoard());
runShip.insertShipIntoBoard();
runShip.shootTheShips();