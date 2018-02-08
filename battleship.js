// Your code here
const Ship = require ('./ship');
const userInput = process.argv;
const shipCount = userInput[2];
const shipLocation = userInput[3].split(";");
const ship = new Ship(shipCount,shipLocation);



// ship.randomize_ship();
// ship.map_ship();
// console.log(ship.mapShip);
// ship.map_shoot();
// console.log(ship.mapShoot);
// ship.map_war();
// console.log(ship.mapWar);
// ship.result();

ship.randomize_ship2();
ship.mapShip = ship.mapEmpty;
console.log("Map Ship Only");
console.log(ship.mapShip);
ship.map_shoot();
console.log("Map Shoot Only");
console.log(ship.mapShoot);
ship.map_war();
console.log("Map Final");
console.log(ship.mapWar);
ship.calculate_result();
ship.result();
