class Ship {
  constructor(count, coordinateShoot){
    this.board = new Array();;
    this.count = count;
    this.coordinateShip = new Array();
    this.coordinateShoot = new Array();
    this.mapShip = new Array();
    this.mapShoot = new Array();
    this.mapWar = new Array();
    this.rightShoot = 0;
    this.mapEmpty = new Array();
    this.map_empty();
    this.separate_coordinate_shoot(coordinateShoot);

  }

  separate_coordinate_shoot(arr){
    for(let i = 0; i < arr.length; i++){
      // let tempObject = new Object();
      // tempObject.x = arr[i][0];
      // tempObject.y = arr[i][2];
      // this.coordinateShoot.push(tempObject);

      let tempArray = new Array();
      tempArray.push(parseInt(arr[i][0]));
      tempArray.push(parseInt(arr[i][2]));
      this.coordinateShoot.push(tempArray);
    }
  }

  calculate_result(){
    for(let k = 0; k < this.coordinateShoot.length; k++){
      for(let i = 0; i < this.coordinateShip.length; i++){
        for(let j = 0; j< this.coordinateShip[i].length; j++){
          if((this.coordinateShoot[k][0]==this.coordinateShip[i][j][0])&&(this.coordinateShoot[k][1]==this.coordinateShip[i][j][1])){
            this.rightShoot++;
            console.log(this.coordinateShoot[k]+" - "+this.coordinateShip[i][j]);
            j=this.coordinateShip[i].length;
          }
        }
      }
    }
  }

  result(){
    console.log("Anda berhasil mengenai "+this.rightShoot+" sasaran dari "+this.coordinateShoot.length+" tembakan.");
  }

  map_war(){
    for(let i = 0; i < 6; i++){
      let tempArray = new Array();
      for(let j = 0; j < 6; j++){
        if(this.mapShoot[i][j]=="*"&&this.mapShip[i][j]=="-"){
          tempArray.push("X");
          // this.rightShoot++;
        }
        else if(this.mapShip[i][j]=="-"){
          tempArray.push("-");
        }
        else{
          tempArray.push(this.mapShoot[i][j]);
        }
      }
      this.mapWar.push(tempArray);
    }
  }

  map_ship(){
    for(let i = 0; i < 6; i++){
      let tempArray = new Array();
      for(let j = 0; j < 6; j++){
        if(this.check_ship(i,j,this.coordinateShip)){
          tempArray.push("-");
        }
        else{
          tempArray.push("O");
        }
      }
      this.mapShip.push(tempArray);
    }
  }

  map_empty(){
    for(let i = 0; i < 6; i++){
      let tempArray = new Array();
      for(let j = 0; j < 6; j++){
          tempArray.push("O");
      }
      this.mapEmpty.push(tempArray);
    }
  }

  map_shoot(){
    for(let i = 0; i < 6; i++){
      let tempArray = new Array();
      for(let j = 0; j < 6; j++){
        if(this.check_ship(i,j,this.coordinateShoot)){
          tempArray.push("*");
        }
        else{
          tempArray.push("O");
        }
      }
      this.mapShoot.push(tempArray);
    }
  }


  check_ship(row,col,obj){
    for(let i = 0; i < obj.length; i++){
      if(obj[i][1]==row && obj[i][0]==col)
        return true;
    }
    return false;
  }

  isUnique(search,array){
    for(let i = 0; i<array.length; i++){
      if(array[i].x==search[0] && array[i].y==search[1]){
        return false;
      }
    }
    return true;
  }

  print_board(arr){
    console.log("  0 1 2 3 4 5");
    console.log("  _ _ _ _ _ _");
    for(let i = 0;i < 6; i++){
      console.log()
    }
  }

  randomize_ship2(){
    for(let i = 0 ; i < this.count ; i++){
      let shipObject = new Object();
      var shipArray = new Array();
      let shipSize = 2+Math.floor(Math.random()*2);
      // console.log("Ship Size: " + shipSize);
      let x_pos = Math.floor(Math.random()*6);
      let y_pos = Math.floor(Math.random()*6);

      while(this.mapEmpty[y_pos][x_pos]!="O"){
        x_pos = Math.floor(Math.random()*6);
        y_pos = Math.floor(Math.random()*6);
      }
      this.mapEmpty[y_pos][x_pos]="-";

      // console.log(this.mapEmpty);
      let direction =  Math.floor(Math.random()*4);
      let flagCheck = false;
      while(flagCheck==false){
        switch(direction){
          case 0:
            if(this.checkInside(x_pos+1,y_pos,shipSize-2,this.mapEmpty,direction)){
              for(let i = 0; i < shipSize; i++){
                this.mapEmpty[y_pos][x_pos+i] = "-";
                shipArray.push([x_pos,y_pos+i]);

              }
              flagCheck = true;
            }
            else {
              direction++;
            }
          break;

          case 1:
            if(this.checkInside(x_pos,y_pos+1,shipSize-2,this.mapEmpty,direction)){
              for(let i = 0; i < shipSize; i++){
                this.mapEmpty[y_pos+i][x_pos] = "-";
                shipArray.push([x_pos+i,y_pos]);
              }
              flagCheck = true;
            }
            else {
              direction++;
            }
          break;

          case 2:
            if(this.checkInside(x_pos-1,y_pos,shipSize-2,this.mapEmpty,direction)){
              for(let i = 0; i < shipSize; i++){
                this.mapEmpty[y_pos][x_pos-i] = "-";
                shipArray.push([x_pos-i,y_pos]);
              }
              flagCheck = true;
            }
            else {
              direction++;
            }
          break;

          case 3:
            if(this.checkInside(x_pos,y_pos-i,shipSize-2,this.mapEmpty,direction)){
              for(let i = 0; i < shipSize; i++){
                this.mapEmpty[y_pos-i][x_pos] = "-";
                shipArray.push([x_pos,y_pos-i]);
              }
              flagCheck = true;
            }
            else {
              direction=0;
            }
          break;
        }
      }
      this.coordinateShip.push(shipArray);
    }
    console.log(this.coordinateShip);
    console.log(this.coordinateShoot);
  }

  checkInside(x,y, count, check,flag){
    if(x<0||y<0||x>5||y>5)
      return false
    if(count<=0)
      return true;
    if(check[y][x]=="O"){
      switch(flag){
        case 0:x+=1;
        break;
        case 1:y+=1;
        break;
        case 2:x-=1;
        break;
        case 3:y-=1;
        break;
      }
      return this.checkInside(x,y, --count,check,flag);
    }
    else {
        return false;
    }
  }

  randomize_ship(){
    for(let i = 0 ; i < this.count ; i++){
      let shipObject = new Object();
      let shipSize = 2+Math.floor(Math.random()*2);
      let x_pos = Math.floor(Math.random()*6);
      let y_pos = Math.floor(Math.random()*6);
      while(!this.isUnique([x_pos,y_pos],this.coordinateShip)){
        x_pos = Math.floor(Math.random()*6);
        y_pos = Math.floor(Math.random()*6);
      }
      shipObject.x = x_pos;
      shipObject.y = y_pos;
      shipObject.condition = true;
      this.coordinateShip.push(shipObject);
    }
    // console.log(this.coordinateShip);
  }
}

// battleship = new Battleship(5,"1,3;1,5;3,5;5,4");
// // battleship.map_empty();
// console.log(battleship.mapEmpty);
// battleship.randomize_ship2();
// console.log(battleship.mapEmpty);

module.exports = Ship;
