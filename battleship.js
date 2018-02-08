// Release 0 & 1
class Battleship {
    constructor (shipAmount, coordinates){
      this.ships = shipAmount
      this.boardSize = 10;
      this.coordinate = coordinates
      this.hitCount = 0
      this.board = this.initBoard()
      this.inputCoordinates = this.processInput()
      this.enemyCoordinates = this.enemies()
    }
  
    initBoard(){
      let board = []
      for (let i = 0; i < this.boardSize; i++){
          board.push([])
          for (let j = 0; j < this.boardSize; j++){
              board[i].push(".")
          }
      }
      return board
    }
  
    randomRow () {
      return Math.abs(Math.round(Math.random()*(this.boardSize-1)))
    }
    randomCol () {
      return Math.round(Math.random()*(this.boardSize-1))
    }
    
    enemies (){
      let positions = []
        while (positions.length < this.ships){
          positions.push([this.randomRow(),this.randomCol()])
          // removes duplicate arrays
          for (let i= 0; i < positions.length; i++){
            for (let j = 0; j < positions.length; j++){
                if (i != j && positions[i].map(b => ''+b).join('') == positions[j].map(b => ''+b).join('')){
                    positions.splice(j,1)
                }
            }
          }
        }
      return positions
    }
    
    processInput(){
      let res = []
      let shoot = this.coordinate.split('-')
      for (let i = 0; i < shoot.length; i++){
          res.push([])
          for (let j = 0; j < shoot[i].length-1; j++){
              res[i].push(shoot[i].split(',')[j])
          }
      }
      return res.map(a => a.map(b => +b))
    }
  
    printBoard(){
      for (let i = 0; i < this.enemyCoordinates.length; i++){
            this.board[this.enemyCoordinates[i][0]][this.enemyCoordinates[i][1]] = 'K'
      }
      for(let m = 0; m < this.inputCoordinates.length; m++){
        if (this.board[this.inputCoordinates[m][0]][this.inputCoordinates[m][1]] === 'K'){
          this.hitCount+=1
          this.board[this.inputCoordinates[m][0]][this.inputCoordinates[m][1]] = '*'
        } else if (this.board[this.inputCoordinates[m][0]][this.inputCoordinates[m][1]] == '*'){;
            continue;
        } else {
            this.board[this.inputCoordinates[m][0]][this.inputCoordinates[m][1]] = 'O'
        }
      }
      return this.output(this.board)
    }
    message(){
      if (this.hitCount == 0){
        return `\nNo ships have been destroyed!`
      } else if (this.hitCount == this.ships) {
        return '\nCongratulations you have won!'
      } else {
        return `\n${this.hitCount} have been destroyed! ${this.ships-this.hitCount} ships remains!`  
      }
    }
    output(mapper){
      for (let j = 0; j < mapper.length; j++){
        mapper[j] = mapper[j].join('  ') 
      }
      console.log(mapper.join('\n'))
      return this.message()
    }
  
  }

  var argv = process.argv;
  var ship = new Battleship(argv[2], argv[3]);
  console.log(ship.enemies())
  console.log(ship.printBoard())