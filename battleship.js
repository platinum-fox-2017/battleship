// Your code here
class Battleship {
  constructor(length) {
    this.length = length
  }
  print_board(length){
    let result = []
    for (let i = 0; i <= length; i++) {
      let row = []
      for (let j = 0; j <= length; j++) {
        row.push('[ ]')
      }
      result.push(row)
    }
    for(let j = 1; j <=length; j++){
      let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      result[j][0] = '['+j+']'
      result[0][j] = '['+dict[j-1]+']'
    }
    return result
  }
}

let inputLength
let kapalPerang = new Battleship(inputLength)
console.log(kapalPerang.print_board(7));
