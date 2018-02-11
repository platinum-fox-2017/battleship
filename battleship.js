'use strict'
class BattleShip {
    constructor(ship, position) {
        this.ship = ship
        this.position = position
        this.randomPos
        this.insertShip
        this.shoot_pos = []
    }

    randomShipPos() {
        let shipPos = [];
        for (let i = 0; i < this.ship; i++) {
            let temp = []
            for (let j = 0; j < 2; j++) {
                temp.push(Math.floor(Math.random() * 5))
            }
            shipPos.push(temp)
        }
        this.randomPos = shipPos
    }

    shootPos() {
        for (let i = 0; i < this.position.length; i++) {
            this.shoot_pos.push([parseInt(this.position[i][0]), parseInt(this.position[i][2])])
        }
    }

    createBoard() {
        let board = []
        for (let i = 0; i < 8; i++) {
            let tempBoard = []
            for (let j = 0; j < 8; j++) {
                tempBoard.push([])
            }
            board.push(tempBoard)
        }
        return board
    }

    insertShipIntoBoard() {
        let importBoards = this.createBoard()
        let importShips = this.randomPos
        let posShipArr = []
        for (let i = 0; i < importShips.length; i++) {
            posShipArr.push(importShips[i].join(''))
        }
        for (let index = 0; index < importBoards.length; index++) {
            for (let i = 0; i < importBoards.length; i++) {
                for (let j = 0; j < posShipArr.length; j++) {
                    if (posShipArr[j] === index + '' + i) {
                        importBoards[index][i].push('K')
                    }
                }
            }
        }
        this.insertShip = importBoards
    }

    shootTheShips() {
        let ranPosArr = []
        let posShipArr = []
        let countShoot = 0

        for (let i = 0; i < this.randomPos.length; i++) {
            posShipArr.push(this.randomPos[i].join(''))
        }
        for (let j = 0; j < this.shoot_pos.length; j++) {
            ranPosArr.push(this.shoot_pos[j].join(''))
        }
        for (let i = 0; i < this.insertShip.length; i++) {
            for (let j = 0; j < this.insertShip.length; j++) {
                for (let k = 0; k < ranPosArr.length; k++) {
                    if (ranPosArr[k] === i + '' + j) {
                        this.insertShip[i][j].push('O')
                    }
                }
            }
        }
        for (let i = 0; i < ranPosArr.length; i++) {
            for (let j = 0; j < posShipArr.length; j++) {
                if (ranPosArr[i] === posShipArr[j]) {
                    let first = ranPosArr[i][0]
                    let sec = ranPosArr[i][1]
                    this.insertShip[first][sec].splice(0, 2)
                    this.insertShip[first][sec].push('X')
                    countShoot++
                }
            }
        }
        console.log(`Your Shoot Coordinate: ${ranPosArr}`)
        console.log(`Ship Coordinate: ${posShipArr} \n`)
        console.log(this.insertShip)
        console.log(`\n BOOM! you shoot ${countShoot} ship!`);
    }
}

module.exports = BattleShip