class Battleship {

    constructor(kapal) {
        this.kapal                  = kapal;
        this.board                  = [];
        this.shipCoordinate         = [];
        this.attackCoordinate       = [];
        this.score                  = 0;
    }

    randomCoordinate() {
        var uniqueRow       = 0;
        var uniqueColumn    = 0;
        var counterShip     = 0;
        
        while(counterShip < this.kapal) {
            var newUniqueRow    = Math.floor(Math.random() * 5) + 1;
            var newUniqueColumn = Math.floor(Math.random() * 5) + 1;
            if((uniqueRow != newUniqueRow) || (uniqueColumn != newUniqueColumn)) {
                this.board[newUniqueRow][newUniqueColumn] = 'K';
                uniqueRow       = newUniqueRow;
                uniqueColumn    = newUniqueColumn;
                counterShip     = counterShip + 1;
            }
        } 
    }

    generateShip() {
        for (let i = 0; i < 6; i++) {
            var row = [];
            for (let j = 0; j < 6; j++) {
                    row.push('*');
            }
            this.board.push(row);
        }
        this.randomCoordinate();
        return this.board;
    }

    getShip() {
        return this.board;
    }


    getShipCoordinate() {
        let tempShipCoordinate = [];
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] == 'K') {
                    tempShipCoordinate.push(i.toString() + "." + j.toString());
                }
            }
        }

        for(let i = 0; i < tempShipCoordinate.length;i++) {
            var temp = tempShipCoordinate[i].split('.');
            this.shipCoordinate.push(temp);
        }

        return this.shipCoordinate;
    }

    getAttackCoordinate(bulletCordinate) {
        var separateCoordinate = bulletCordinate.split('.');

        for(let i = 0; i < separateCoordinate.length; i++) {
            var temp = separateCoordinate[i].split(',');
            this.attackCoordinate.push(temp);
        }
        return this.attackCoordinate;
    }

    hitShipChecker(attackArray) {
        for(let i = 0; i < this.shipCoordinate.length; i++) {
            if((attackArray[0] == this.shipCoordinate[i][0]) && (attackArray[1] == this.shipCoordinate[i][1])) {
                return true;
            }
        }
        return false;
    }

    attack() {
        for(let i = 0;i < this.attackCoordinate.length; i++) {
            var hitCheck = this.hitShipChecker(this.attackCoordinate[i]);
            if(hitCheck) {
                this.board[parseInt(this.attackCoordinate[i][0])][parseInt(this.attackCoordinate[i][1])] = 'O';
                this.score = this.score + 1;
            } else {
                this.board[parseInt(this.attackCoordinate[i][0])][parseInt(this.attackCoordinate[i][1])] = 'X';
            }
        }
    }

    scoreResult() {
        if (this.score == 0) {
            return "You missed all of the attack !";
        } else if (this.score > 0) {
            return "Good work, you hit " + this.score + " ship !";
        } else if (this.score >= this.kapal) {
            return "GREAT, YOU KILL 'EM ALL !";
        }
    }

    

}

module.exports = Battleship;