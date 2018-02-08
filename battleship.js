class Battleship{
  constructor(area){
    this.area = area
  }

  createBoard(){
    let size = []
    for(let i=0; i<this.area; i++){
      let row = []
      for(let j=0; j<this.area; j++){
        row.push('| |')
      }
      size.push(row)
    }
    return size
  }
}

const warShip = new Battleship(10)
console.log(warShip.createBoard())
