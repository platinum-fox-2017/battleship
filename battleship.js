"use strict"

// const Ship=require('./ship.js')

class Ship {

    constructor(ships,size) {
        this.size= size || 10
        this.shipPosition=this.placingShips(ships,this.size) || this.placingShips(1,10)
        this.board=this.createBoard(this.size) || this.createBoard(10)
        this.shooted=0;
        this.miss=0;
    }

    createBoard(size) {
        let arrBoard=[];
        for(let i=0; i<size; i++) {
                arrBoard.push([]);
            for(let j=0; j<size; j++) {
                arrBoard[i].push(' ');
            }
        }
        for(let i=0; i<this.shipPosition.length; i++) {
            for(let j=0; j<this.shipPosition[i].length ;j++) {
                let a=Math.floor(this.shipPosition[i][j]/10);
                let b=this.shipPosition[i][j]%10; 
                arrBoard[a].splice(b,1,'O'); 
            }
        }
        return arrBoard;
    }

    placingShips(total,size) {
        this.shipPosition=[]
        let arrPos=[];
        while(arrPos.length<=total) {
            let pos=Math.floor(Math.random()*Math.pow(size,2));
            let shipLength=this.shipLengthRandomizer(2,3);
            let horizontal = Math.floor(Math.random()*2);
            let arrSingleShipPos=[];
            let inputed=true;
            if(this.checkTokenIsAvailable(pos)) {
                if(horizontal===1) {
                    for(let right=1; right<shipLength; right++) { //horizontal kanan
                        if(this.checkTokenIsAvailable(pos+right) && (((pos%this.size)-1)+(shipLength-1))>this.size-2) break;
                        else if(right===shipLength-1) {
                           inputed===false; 
                           for(let ka=0; ka<shipLength; ka++) {
                               arrSingleShipPos.push(ka+pos);
                           }
                        }
                        arrPos.push(arrSingleShipPos);
                    }
                    if(inputed && (((pos%this.size)-1)-(shipLength-1))<0) { //horizontal kiri
                        for(let left=0; left<shipLength; left++) {
                            if(this.checkTokenIsAvailable(pos-left)) break;
                            else if(left===shipLength-1) {
                               inputed===false; 
                               for(let ka=0; ka<shipLength; ka++) {
                                   arrSingleShipPos.push(pos-left);
                               }
                               arrPos.push(arrSingleShipPos);
                            }
                        } 
                    }
                }
                else {
                    for(let up=0; up<shipLength; up++) { //vertical atas
                        if(this.checkTokenIsAvailable(pos-(up*this.size)) && ((pos)-((shipLength-1)*this.size))<0) break;
                            else if(up===shipLength-1) {
                            inputed===false; 
                                for(let at=0; at<shipLength; at++) {
                                arrSingleShipPos.push(pos-(at*this.size));
                            }
                            arrPos.push(arrSingleShipPos);
                        }        
                    }
                    if(inputed && ((pos)+((shipLength-1)*this.size))<=Math.pow(this.size,2)) { //vertical bawah
                        for(let down=0; down<shipLength; down++) {
                            if(this.checkTokenIsAvailable(pos+(down*10))) break;
                            else if(left===shipLength-1) {
                                inputed===false; 
                                for(let ba=0; ba<shipLength; ba++) {
                                    arrSingleShipPos.push(pos+(ba*10));
                                }
                                arrPos.push(arrSingleShipPos);
                            }
                        }
                    }
                }
            }
        }
        console.log(arrPos,arrPos.length)
        return arrPos;
    }

    shipLengthRandomizer(min,max) {
        let avas=min||12
        return min+Math.floor(Math.random()*(max-(min-1)));
    }

    checkTokenIsAvailable(search) {
        for(let i=0; i<this.shipPosition.length; i++) {
            if(this.shipPosition[i].indexOf(search)!==-1) {
                return false;
            }
        }
        return true;
    }

    hitting(hitLoc) {
        for(let i in hitLoc) {
            for(let a in this.shipPosition) {
                let hit=this.shipPosition[a].indexOf(hitLoc[i]);
                if(hit>=0) {
                    this.shooted++;
                    for(let b in this.shipPosition[a]) {
                        let pos=this.shipPosition[a][b];
                        let x=Math.floor(pos/this.size);
                        let y=pos%this.size; 
                        this.board[x].splice(y,1,'@');
                    }
                    this.shipPosition.splice(i,1);
                    break;
                }
                else if(a==this.shipPosition.length-1) {
                    this.miss++;
                    let x=Math.floor(hitLoc[i]/this.size);
                    let y=hitLoc[i]%this.size;
                    this.board[x].splice(y,1,'X');
                }
            }
        }
    }

    drawBoard() {
        console.log(this.board.map(a=>a.join('|')).join('\n'));
    }

    status() {
        this.drawBoard();
        console.log(`You hit ${this.shooted} ships, and miss ${this.miss} times`)
    }
}


var mayArgv=process.argv;
//node battleship.js (jumlahKapal) 3,1;2,4;2,2 

var shipGame = new Ship(mayArgv[2]);

let shootLocation=mayArgv[3];
shootLocation=shootLocation.split('-').map(a=>a.split(','));
for(let i=0; i<shootLocation.length; i++) {
    shootLocation[i]=shootLocation[i].map(a=>Number(a));
    shootLocation[i]=(shipGame.size*shootLocation[i][0])+shootLocation[i][1]
}

shipGame.hitting(shootLocation);

// console.log(shootLocation,shipGame.shipPosition);
shipGame.status();
// console.log(shipGame.board.map(a=>a.join('|')).join('\n'));
