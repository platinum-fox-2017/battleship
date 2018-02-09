class Battleship{
  constructor(ship){
    this.area = this.createBoard()
    this.ship = ship
  }

  createBoard(){
    let size = []
    for(let i=0; i<=9; i++){
      size.push([])
      for(let j=0; j<=9; j++){
        size[i].push(' ')
      }
    }
    return size
  }

  shipPosition(){
    for(let i=0; i<this.ship; i++){
      let randomCol = Math.ceil(Math.random() * 9)
      let randomRow = Math.ceil(Math.random() * 9)
      this.area[randomCol][randomRow] = 'K'
    }
    return this.area
  }
}

var warShip = new Battleship(3)
console.log(warShip.shipPosition())
