let Battleship = require('./battleship')

// Your code here
let ship = process.argv[2];
let position = process.argv[3];

let runShip = new Battleship(ship, position.split(' '));

// console.log(runShip.randomShipPos());
// console.log(runShip.createBoard());
console.log(runShip.insertShipIntoBoard());