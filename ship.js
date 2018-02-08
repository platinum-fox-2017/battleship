class Ship {
    constructor(cordinat){
        if(cordinat.length > 1){
            this.life = 2
        }else{
            this.life = 1
        }
        this.cordinat = cordinat
        this.getHit = 0
    }
}

module.exports = Ship