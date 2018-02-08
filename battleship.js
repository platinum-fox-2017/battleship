class BattleShip {
    constructor(ship, position) {
        this.ship = ship
        this.position = position
    }

    randomShipPos() {
      let posShip = [];
      for(let i = 0; i < this.ship; i++) {
        let temp = []
        for(let j = 0; j < 2; j++) {
            temp.push(Math.floor(Math.random() * 5))
        }
        posShip.push(temp)
      }
      return posShip
    }

    createBoard() {
        let board = []
        for(let i = 0; i < 6; i++) {
            let tempBoard = []
            for (let j = 0; j < 6; j++) {
                tempBoard.push([])
            }
            board.push(tempBoard)
        }
        return board
    }

    insertShipIntoBoard() {

        let importBoards = this.createBoard()
        let importShips = this.randomShipPos()
        let kapalkita = importShips[0]
        kapalkita = kapalkita.toString()        
        let kapalSplit = kapalkita.split(',').join('')

       for (let index = 0; index < importBoards.length; index++) {
            for (let i = 0; i < importBoards.length; i++) {
                if (kapalSplit === index+''+i) {
                    importBoards[index][i].push('K')
                }         
            }
       }

        return importBoards

    }
}

module.exports = BattleShip