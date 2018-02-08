// Your code here
class Battleship{
	constructor(totalShip,coordinatBom){
		this.totalShip = totalShip
		this.ship = this.posisi_ship()
		this.coordinatBom = coordinatBom
		this.board = this.print_board()

	}

	print_board(){
		let array = []
		for(let i =0;i<6;i++){
			array.push([])
			for(let j =0;j<6;j++){
				array[i].push(' ')
			}
		}
		for(let k =0;k<this.ship.length;k++){
			array[this.ship[k].x][this.ship[k].y]=this.ship[k].name
		}
		return array
	}

	posisi_ship(){
		let arrayShip = []
		for(let i =0;i<this.totalShip;i++){
			let objShip = {
				name : 'K',
				x : Math.ceil(Math.random()*5),
				y : Math.ceil(Math.random()*5)
			}
			arrayShip.push(objShip)
		}
		return arrayShip
	}


}

let totalShip = process.argv[2]
let koordinat = process.argv[3]

let koordinatObj = [4,5]
let newBattle = new Battleship(3,koordinatObj)
console.log(newBattle.print_board())

