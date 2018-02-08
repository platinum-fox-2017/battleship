"use strict"

class BattleShip {
	constructor(size, target, shotCoordinate) {
		this.size = size;
		this.target = target;
		this.shotCoordinate = shotCoordinate;
		this.shipCoordinate = this.generateCoordinateShip(size, target);
	}

	map() {
		let arr = this.setAllMap(' ', this.size),
			shipCoordinate = this.shipCoordinate,
			shotCoordinate = this.shotCoordinate,
			hitCoordinate = [];

		for (let i = 0; i < shipCoordinate.length; i++) {
			arr[shipCoordinate[i].x][shipCoordinate[i].y] = 'x';
			for (let j = 0; j < shotCoordinate.length; j++) {
				if (shipCoordinate[i].x == shotCoordinate[j].x && shipCoordinate[i].y == shotCoordinate[j].y) {
					hitCoordinate.push({
						x: shotCoordinate[j].x,
						y: shotCoordinate[j].y
					});
				} else {
					arr[shotCoordinate[j].x][shotCoordinate[j].y] = '/';
				}
			}
		}

		for (var i = 0; i < hitCoordinate.length; i++) {
			arr[hitCoordinate[i].x][hitCoordinate[i].y] = '*';
		}

		console.log(arr);
		console.log(`Anda berhasi mengenai ${hitCoordinate.length} kapal, dan meleset ${shotCoordinate.length - hitCoordinate.length} tembakan`);
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