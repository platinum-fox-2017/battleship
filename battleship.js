"use strict"

class BattleShip{
  constructor(ship) {
    this.ship=ship;
    this.map=this.createMap();
  }


  createMap(){
    var arrMap=[];
    for(let i=0;i<10;i++){
    arrMap.push([]);
      for(let j=0;j<10;j++){
      arrMap[i].push(' ');
      }
    }
    return arrMap;
  }

  launchShip(){
    var rand = 9;
    for(let i=0;i<=this.ship;i++){
      var rowShip=Math.ceil(Math.random() * rand);
      var colShip=Math.ceil(Math.random() * rand);
      this.map[rowShip][colShip]='K';
    }
    return this.map;
  }

}

const args = process.argv;
var newBS= new BattleShip(2);
console.log(newBS.launchShip());
//console.log(args.createMap.arrMap[0,0]);
