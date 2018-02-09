'use strict'
const Battleship = require('./battleship')

const coordinate = process.argv[2]

const start = new Battleship ()
console.log(start.printBoard())


