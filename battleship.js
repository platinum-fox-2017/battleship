class BattleShip{
    constructor(ship){
        this.ship = this.create_ship(ship)
        this.board = this.print_board()
    }
    print_board(){
        let board = []
        for (let i =0; i<10; i++){
            board.push([])
            for(let j=0; j<10; j++){
                board[i].push('| ')
            }
        }
        for (let k=0; k<this.ship.length; k++){
            board[this.ship[k].x][this.ship[k].y]=this.ship[k].name
        }
       return board.join('\n')
    }
    create_ship(ship){
        let arrShip=[]
        for(let i=0; i<ship; i++){
            let objShip={
                name : '|K',
                x : Math.floor(Math.random()*9),
                y : Math.floor(Math.random()*9) 
            }
             arrShip.push(objShip)   
        }
        return arrShip
    }
}


let ship = process.argv[2]
let battle = new BattleShip(Number(ship))
console.log(battle.print_board())

