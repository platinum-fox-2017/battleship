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
                arrBoard.push([])
            for(let j=0; j<size; j++) {
                arrBoard[i].push(' ')
            }
        }
        for(let i=0; i<this.shipPosition.length; i++) {
            let a=Math.floor(this.shipPosition[i]/10);
            let b=this.shipPosition[i]%10
            arrBoard[a].splice(b,1,'O')
        }

        return arrBoard;
    }

    placingShips(total,size) {
        let arrPos=[];
        for(let i=0; i<total; i++) {
            let pos=Math.floor(Math.random()*Math.pow(size,2));
            if(arrPos.indexOf(pos)!==-1) {
                pos=Math.floor(Math.random()*Math.pow(size,2));
            }
            arrPos.push(pos);
        }
        return arrPos;
    }

    hitting(hitLoc) {
        for(let i in hitLoc) {
            let hit=this.shipPosition.indexOf(hitLoc[i]);
            if(hit>=0) {
                this.shooted++;
                let x=Math.floor(hit/this.size);
                let y=hit%this.size;
                this.board[x].splice(y,1,'X');
                this.shipPosition.splice(hit,1);
            }
            else {
                this.miss++;
                let x=Math.floor(hitLoc[i]/this.size);
                let y=hitLoc[i]%this.size
                this.board[x].splice(y,1,'@');
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

shipGame.status();
