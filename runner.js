'use strict'
const Battleship = require('./battleship')

let ship = process.argv[2];
let position = process.argv[3];

let start = new Battleship(ship, position.split(' '));

start.shootPos()
start.randomShipPos();
start.insertShipIntoBoard();
start.shootTheShips();