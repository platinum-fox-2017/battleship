class BattleShip {
    constructor(ship, position) {
        this.ship = ship
        this.position = position
        this.randomPos;
        this.insert_ship;
        this.shoot_pos = new Array()
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
      this.randomPos = posShip
    //   console.log(this.randomPos)
    }

    shootPos() {
        for (let i = 0; i < this.position.length; i++) {
            this.shoot_pos.push([parseInt(this.position[i][0]), parseInt(this.position[i][2])])
        }
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
        let importShips = this.randomPos
        let posShipArr = new Array()
        // console.log(importShips[0])
        for (let i = 0; i < importShips.length; i++) {
            posShipArr.push(importShips[i].join(''))
        }
        // console.log(posShipArr)
       for (let index = 0; index < importBoards.length; index++) {
            for (let i = 0; i < importBoards.length; i++) {
                for (let j = 0; j < posShipArr.length; j++) {
                    if (posShipArr[j] === index + '' + i) {
                        importBoards[index][i].push('K')
                    }    
                }     
            }
       }
        this.insert_ship = importBoards
    }

    shootTheShips() {
        let ranPosArr = new Array()
        let posShipArr = new Array()
        let countShoot = 0
  
        for (let i = 0; i < this.randomPos.length; i++) {
            posShipArr.push(this.randomPos[i].join(''))
        }

        for (let h = 0; h < this.shoot_pos.length; h++) {
            ranPosArr.push(this.shoot_pos[h].join(''))
        }

        for (let i = 0; i < this.insert_ship.length; i++) {
            for (let j = 0; j < this.insert_ship.length; j++) {
               for (let k = 0; k < ranPosArr.length; k++) {
                   if (ranPosArr[k] === i + '' + j) {
                       this.insert_ship[i][j].push('O')
                   } 
               }
            }
        }

        for (let x = 0; x < ranPosArr.length; x++) {
            for (let y = 0; y < posShipArr.length; y++) {
                if (ranPosArr[x] === posShipArr[y]) {
                    // console.log(ranPosArr[x][0])
                    let first = ranPosArr[x][0]
                    let sec = ranPosArr[x][1]
                    // console.log(first, sec)
                    this.insert_ship[first][sec].splice(0, 2)
                    this.insert_ship[first][sec].push('X')
                    countShoot++
                } 
                // else {
                //     console.log('miss')
                // }
            }
        }
        console.log(`Your Shoot Coordinate: ${ranPosArr}`)
        console.log(`Ship Coordinate: ${posShipArr} \n`)
        console.log(this.insert_ship)
        console.log(`\n BOOM! shoot ${countShoot} ship!`);
              
    }
}

module.exports = BattleShip