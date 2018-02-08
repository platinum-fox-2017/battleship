// Your code here
class Battleship {
  constructor(ship,koodinatSerang){
    this.ship = ship;
    this.koodinatSerang = this.generateKoordinatSerang(koodinatSerang);
    this.boardSize = 10;
    this.shipPosition = this.generateShipPosition();
    this.board = this.genereateBoard(); 
  }
  generateKoordinatSerang(koordinat){
    var koordinatSerang = [];
    var koordinatSplit = koordinat.split('.');
    for(var i = 0; i < koordinatSplit.length; i++){
      koordinatSerang.push(koordinatSplit[i]);  
    }
    return koordinatSerang;
  }
  generateShipPosition(){
    var shipPosition = [];
    for(var i = 0; i < this.ship; i++){
      var position = this.rollPosition();
      shipPosition.push(position);
    } 
    return shipPosition;
  }
  rollPosition() {
    let  possible = "123456789";
    let  textSatu = possible.charAt(Math.floor(Math.random() * possible.length));
    let  textDua = possible.charAt(Math.floor(Math.random() * possible.length));
    return `${textSatu},${textDua}`;
  }
  genereateBoard(){
    var board = []
    var boardPerbaris = [];
    var actualSize = this.boardSize * this.boardSize;
    var barisKe = 1;
    for(var i = 1; i <= actualSize; i++){
      if(this.isShipPosition(barisKe,i)){
        boardPerbaris.push('|<>|'); 
      } else if(this.isSerangPosition(barisKe,i)){
        boardPerbaris.push('|**|');
      } else {
        boardPerbaris.push('|__|');
      }
      if(i % this.boardSize  === 0 && i != 0){
        barisKe++;
        board.push(boardPerbaris);  
        boardPerbaris = [];
      }
    }
    return board;
  }
  isSerangPosition(barisKe,kolomKe){
    kolomKe = String(kolomKe);
    if(kolomKe.length === 1){
      kolomKe = kolomKe[0];  
    } else {
      kolomKe = kolomKe[1];  
    }
    var boardCurrent = `${barisKe},${kolomKe}`;
    for(var i = 0; i < this.koodinatSerang.length; i++){
      if(boardCurrent === this.koodinatSerang[i]) return true; 
    }
    return false;
  }
  isShipPosition(barisKe,kolomKe){
    kolomKe = String(kolomKe);
    if(kolomKe.length === 1){
      kolomKe = kolomKe[0];  
    } else {
      kolomKe = kolomKe[1];  
    }
    var boardCurrent = `${barisKe},${kolomKe}`;
    for(var i = 0; i < this.shipPosition.length; i++){
      if(boardCurrent === this.shipPosition[i]) return true; 
    }
    return false;
  }
  printBoard(){
   for(var i = 0; i < this.board.length; i++ ){
     var boardPerbaris = this.board[i].join('');
     console.log(boardPerbaris);
   }  
  }
}

var argv = process.argv;
var battle = new Battleship(argv[2],argv[3]);
battle.printBoard();
console.log("Posisi Kapal: ",battle.shipPosition);
console.log("Koordinat Serang: ",battle.koodinatSerang);
