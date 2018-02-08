"use strict"

class BattleShip {
	constructor(size, target, shotCoordinate) {
		this.size = size;
		this.target = target;
		this.shotCoordinate = this.shotCoordinate;
		this.shipCoordinate = this.generateCoordinateShip(size, target);
		this.map = this.generateMap(size, target);
	}

	generateMap(size, target) {
		let arr = this.setAllMap('o', size);
		let coordinate = this.shipCoordinate;

		for (let i = 0; i < coordinate.length; i++) {
			arr[coordinate[i].x][coordinate[i].y] = 'x';
		}

		return arr;
	}

	generateCoordinateShip(size, target) {
		let coordinate = [],
			coordinate_x = [],
			coordinate_y = [],
			index = 0;

		while(target > 0) {
			let x = Math.floor(Math.random() * size);
			let y = Math.floor(Math.random() * size);

			if(coordinate_x.indexOf(x) > -1) continue;
			coordinate_x.push(x);
			coordinate_y.push(y);

			coordinate.push({
				x: coordinate_x[index],
				y: coordinate_y[index]
			});
			index++;
			target--;
		}

		return coordinate;
	}

	setAllMap(condition, num) {
	    let arr = [];
	    for (let i = 0; i < num; ++i) {
	    	let temp = [];
	    	for (let j = 0; j < num; j++) {
	    		temp.push(condition);
	    	}
	        arr.push(temp);
	    }

	    return arr;
	}
}

module.exports = BattleShip;