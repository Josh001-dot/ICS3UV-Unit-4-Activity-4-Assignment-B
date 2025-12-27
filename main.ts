/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-26
 * @fileoverview This program keeps track of car stats.
 */

// function to check if an oil change is needed
function oilChange(mileage: number, oilChangeKM: number): boolean {
  if (mileage - oilChangeKM >= 5000) {
    console.log("An oil change was done.");
    return true;
  } else {
    return false;
  }
}

// function to return car stats
function carStats(): string {
  return `
Car Make: ${carMake}
Car Model: ${carModel}
Car Color: ${carColor}
Odometer: ${odometer} km
Last Oil Change: ${oilChangeKM} km
`;
}

// function to wrap the car (change color)
function wrapCar(): string {
  const newColor = prompt("Enter a new color for your car:") || carColor;
  return newColor;
}

// function to drive the car
function drive(): number {
  const kmDriven = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  odometer += kmDriven;
  return kmDriven;
}

// function to fill up gas
function fillUp(): void {
  const cost = Number(prompt("Enter cost to fill up gas:") || "0");
  gasCost[fillUpCount] = cost;
  fillUpCount++;
}

// function to display gas costs and average
function displayCostToFillUp(): number {
  let total = 0;

  console.log("\nGas Fill-Up Costs:");
  for (let i = 0; i < fillUpCount; i++) {
    console.log(`Fill-up ${i + 1}: $${gasCost[i].toFixed(2)}`);
    total += gasCost[i];
  }

  const average = total / fillUpCount;
  console.log(`Average cost per fill-up: $${average.toFixed(2)}`);
  return average;
}

// ------------------------------
// constants and variables
let odometer: number = 65000;           // mileage of car
let oilChangeKM: number = 65000;        // last oil change
let carColor: string = "Black";         // car color
const carModel: string = "Civic";       // car model
const carMake: string = "Honda";        // car make
const gasCost: number[] = new Array(10); // gas costs
let fillUpCount: number = 0;

// ------------------------------
// program testing

console.log(carStats());

// drive the car
const driven = drive();
console.log(`You drove ${driven} km.`);

// check oil change
if (oilChange(odometer, oilChangeKM)) {
  oilChangeKM = odometer;
} else {
  console.log("Your car does not need an oil change.");
}

// fill up gas
fillUp();
fillUp();
displayCostToFillUp();

// wrap the car
carColor = wrapCar();
console.log(`Your car is now ${carColor}.`);

console.log(carStats());
console.log("\nDone.");
