"use strict"

const BattleShip = require('./battleship')

var input_argv = process.argv;

var coordinateShot = [];
for (var i = 0; i < input_argv[4].split(';').length; i++) {
	let x = input_argv[4].split(';')[i].split(',')[0];
	let y = input_argv[4].split(';')[i].split(',')[1];
	coordinateShot.push({
		x: Number(x),
		y: Number(y)
	});
}

var battleShip = new BattleShip(input_argv[2], input_argv[3], coordinateShot);
battleShip.map();