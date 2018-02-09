// Your code here
'use strict'

class Battleship{
    constructor(coordinate){
        this.coordinate = coordinate
        this.chance = 5
    }
    printBoard(){
        let board = []
        for (let i = 0; i < 10; i++) {
            let col = []
            board.push(col)
            for (let j = 0; j < 10; j++) {
                let row = []
                let a = this.coordinate[0][0]+''+this.coordinate[0][1]
                if (i + '' + j === a ) {
                    col.push('K')
                } else {
                    col.push(' ')
                }
            }
        }
        return board
    }
    randomBattleShip(){

    }
}

module.exports = Battleship;