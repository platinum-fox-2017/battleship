const Sea = require('./sea')

let battleship = new Sea(6)

let argv = process.argv
let command = argv.splice(2,argv.length)
let ships = command[0]
let cordinat = command.splice(1,command.length)

battleship.createBoard()
console.log(battleship.printBoard(ships,cordinat))