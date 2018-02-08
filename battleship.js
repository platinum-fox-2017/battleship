// Your code here
class Battleship {
  constructor(length) {
    this.length = length


  }

  create_table() {
    let board = []
    for (var i = 0; i < this.length; i++) {
      let row = []
      for (var j = 0; j < this.length; j++) {
        row.push('[ ]')
      }
      board.push(row)
    }
    return board
  }


}


const ship = new Battleship(10)

console.log(ship.create_table());
