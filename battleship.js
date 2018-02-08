class Battleship{
  constructor(kapal,target){
    this.maps=this.map()
    this.kapal=kapal
    this.target=target
    this.miss=0
    this.kena=0
  }

  map(){
    var map=[]
    for(let i=0;i<6;i++){
      map.push([])
      for(let j=0;j<6;j++){
        map[i].push(' ')
      }
    }
    return map
  }
  addkapal(){
    for(let i=0;i<this.kapal;i++){
      var baris=Math.floor((Math.random() * 6));
      var kolom=Math.floor((Math.random() * 6));
      if(this.maps[baris][kolom]==='K'){
        while(this.maps[baris][kolom]==='K'){
          baris=Math.floor((Math.random() * 6));
          kolom=Math.floor((Math.random() * 6));
        }
        this.maps[baris][kolom]='K'
      }else{
        this.maps[baris][kolom]='K'
      }
    }
  }

  shooter(){
    for(let i=0;i<this.target.length;i++){
      var depanbelakang=this.target[i].split(',')
      var depan = depanbelakang[0]
      var belakang = depanbelakang[1]
      this.missorkena(depan,belakang,this.miss,this.kena)
    }
    this.print()
  }

  missorkena(x,y,miss,kena){
    if(this.maps[x][y]===' '){
      this.maps[x][y]='X'
      this.miss++
    }else{
      this.maps[x][y]='O'
      this.kena++
    }
  }

  print(){
    console.log(this.maps)
    console.log(`kapal yang antaberantah = ${this.kena}`)
    console.log(`bom yang stress atau miss = ${this.miss}`)
  }
}

var my_argv = process.argv
var kapal = Number(my_argv[2])
var target = my_argv[3].split('-')
const bs = new Battleship(kapal,target)
bs.addkapal()
bs.shooter()
// console.log(bs)
