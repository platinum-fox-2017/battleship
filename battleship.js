// Your code here
class Battleship{
    constructor (){
        this.boardSize = 10;
        this.board = this.boards()
    }

    boards(){
        let board = []
        for (let i = 0; i < this.boardSize; i++){
            board.push([])
            for (let j = 0; j < this.boardSize; j++){
                board[i].push(" ")
            }
        }
        return board
    }

    randomEnemy () {

    }

}

var ship = new Battleship()
console.log(ship.boards())