class BattleShip {
  constructor(army_number,board,shotsAttempt){
    this.army = []
    this.battleground = []
    this.board = board
    this.shotsAttempt = shotsAttempt
    for(let i =0;i<army_number;i++){
      let ship = {}
      ship.name = 'K'
      let random1 = Math.floor(Math.random()*this.board)
      let random2 = Math.floor(Math.random()*this.board)
      ship.position = `${random1},${random2}`
      this.army.push(ship)
    }
  }

  create_board(){
    for(let i =0;i<this.board;i++){
      this.battleground.push([])
      for(let j=0;j<this.board;j++){
        this.battleground[i].push(' ')
      }
    }
  }

    print_ships(){
      for(let i = 0;i<this.army.length;i++){
        for(let j =0;j<this.board;j++){
          for(let k =0;k<this.board;k++){
            if(this.army[i].position === `${j},${k}`){
              this.battleground[j][k] = this.army[i].name
            }
          }
        }
      }
    }

    shots(){
      for(let i = 0;i<this.shotsAttempt;i++){
        let random1 = Math.floor(Math.random()*this.board)
        let random2 = Math.floor(Math.random()*this.board)
        for (let j =0;j<this.board;j++){
          for(let k =0;k<this.board;k++){
            if(this.battleground[random1][random2] == 'K'){
              this.battleground[random1][random2]='O'
            } else if(this.battleground[random1][random2] == ' '){
              this.battleground[random1][random2]='X'
            }
          }
        }
      }
    }
}

let jawa = new BattleShip(10,10,10)
jawa.create_board()
console.log(jawa.army);
jawa.print_ships()
// console.log(jawa.battleground);
jawa.shots()
console.log(jawa.battleground);
