const Ship = require('./ship')

class Sea{
    constructor(size){
        this.board = []
        this.cordinat = []
        this.shipCordinat = []
        this.enemyOrShip = []
        this.size = size
        this.dead = 0
    }

    createBoard(){
        for(let i = 0; i < this.size; i ++){
            let tmp = []
            for(let j = 0;j < this.size;j++){
                let cordinat = []
                tmp.push([])
                cordinat.push(i)
                cordinat.push(j)
                this.cordinat.push(cordinat)
            }
            this.board.push(tmp)
        }
    }

    printBoard(num,location){
        this.locateShip(num)
        this.shooting(location)
        console.log(this.board)
        let count = 0
        let shipDamage = 0
        for(let i = 0; i < this.enemyOrShip.length; i++){
            if(this.enemyOrShip[i].getHit >= this.enemyOrShip[i].life){
                count++
            }else if(this.enemyOrShip[i].getHit > 0){
                shipDamage++
            }
        }

        if(count > 0){
            return `Selamat anda telah membunuh ${count} Kapal`
        }else if(shipDamage === 0){
            return `Maaf peluru anda tidak ada yang kena, Harap beli koin di counter terdekat`
        }else if(shipDamage > 0){
            return `Terdapat kapal yang sudah sekarat!! Buruan beli koin lagi untuk mencoba lagi`
        }
        
    }

    locateShip(numShip){

        this.findShipCordinat(numShip)
    }

    findShipCordinat(numShip){
        let count = 0
        while(count < numShip){
            let randomLengthShip = Math.ceil(Math.random()*3)

            let random = Math.floor(Math.random() * this.cordinat.length)
            let x = this.cordinat[random][0]
            let y = this.cordinat[random][1]

            let cordinat = String(x) + String(y)
            if(this.shipCordinat.indexOf(cordinat) === -1){
                this.shipCordinat.push(cordinat)
                let shipCreated = this.createShip(cordinat,randomLengthShip)
                console.log(shipCreated)
                if(shipCreated !== false){

                    let ship = new Ship(shipCreated)

                    for(let i = 0; i < shipCreated.length; i++){
                        let cordinatX = Number(shipCreated[i][0])
                        let cordinatY = Number(shipCreated[i][1]) 
                        this.board[cordinatX][cordinatY].push('S')
                    }
                    this.enemyOrShip.push(ship)
                    console.log(this.enemyOrShip)
                    count++
                }
            }
        }
    }

    createShip(dot,shipLength){
        let shipCordinat = []
        let combine;
        let x = Number(dot[0])
        let y = Number(dot[1])

        let randomUpOrDow = Math.floor(Math.random()*2)
        let plusOrMinus = Math.floor(Math.random()*2)

        for(let i = 0; i < shipLength; i++){

            if(i === 0){
                shipCordinat.push(dot)
            }else{
                if(randomUpOrDow === 0 && plusOrMinus === 0 && x < this.board.length - 1){
                    x++   
                }else if(randomUpOrDow === 0 && plusOrMinus === 1 && x > 0){
                    x--
                }else if(randomUpOrDow === 1 && plusOrMinus === 0 && y < this.board[0].length - 1){
                    y++
                }else if(randomUpOrDow === 1 && plusOrMinus === 1 && y > 0){
                    y--
                }

                combine = String(x)+String(y)

                if(this.shipCordinat.indexOf(combine) !== -1){
                    return false
                }else{
                    shipCordinat.push(combine)
                }
            }
        }

        return shipCordinat
    }



    shooting(location){
        for(let i = 0; i < location.length; i++){
            let locationSplitting = location[i].split("-")
            let x = Number(locationSplitting[0])
            let y = Number(locationSplitting[1])
            if(this.board[x][y].length !== 0 ){
                let combine = String(x) + String(y)
                for(let j = 0; j < this.enemyOrShip.length;j++){
                    for(let k = 0; k < this.enemyOrShip[j].cordinat.length; k++){
                        if(this.enemyOrShip[j].cordinat[k] === combine){
                            this.enemyOrShip[j].getHit ++
                        }
                    }
                }
                this.board[x][y] = 'BOOM'
            }else{
                this.board[x][y] += "Dor"
            }
        }
    }
}

module.exports = Sea