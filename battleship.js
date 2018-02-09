// Your code here
class Battleship {
    constructor(board, ship) {
        this.board = board
        this.ship = ship
    }

    createBoard() {
        let array = []
        for (let i = 0; i < this.board; i++) {
            array.push([])
            for (let j = 0; j < this.board; j++) {
                array[i].push(' ')
            }
        }

        for (let i = 0; i < this.ship; i++) {
            let x = Math.floor((Math.random() * this.board) + 0)
            let y = Math.floor((Math.random() * this.board) + 0)

            if (array[x][y] === ' ') {
                array[x][y] = 'X'
            } else {
                this.ship++
            }
        }

        return array
        // for (let i = 0; i < counter; i++) {
        //     const element = array[i];

        // }
    }


}

let ship = new Battleship(3, 3)

console.log(ship.createBoard())