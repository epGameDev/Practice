//
//
//
//
//
// BigInt (n)

/* This is used to solve the limitations of numbers higher than 9007199254740991
or the -9007199254740991 value. Numbers in JS calculations start to break down and 
cause unstable reactions past these numbers. BigInt allows us to work with larger 
numbers. To use, add 'n' to end of numbers or BigInt(number); */

let maxNumber = Number.MAX_SAFE_INTEGER;
let minNumber = Number.MIN_SAFE_INTEGER;

console.log("MAX_SAFE_INTEGER", maxNumber);
console.log("MIN_SAFE_INTEGER", minNumber);
console.log("typeof:", typeof maxNumber);

// Adds 10 to go beyond the max usable number;
maxNumber += 10;
console.log("maxNumber + 10 =", maxNumber);

// Shows nothing happens after you try to go down a number.
maxNumber -= 1;
console.log("new maxNumber - 1 =", maxNumber);

// Converts and allows you to use or go higher than MAX_SAFE_INTEGER.
maxNumber = BigInt(maxNumber) + 2n;
console.log("maxNumber after convertion and adding 2:", maxNumber);

console.log("New typeof:", typeof maxNumber);

//
//
//
//
//
// Optional Chaining (?)

/* Optional chaining gets rid of a lot of conditional checks through 
if statments by checking along the way of an expression if something
exists. See below */

const ericsPokemon = {
   pikachu: {
      height: 8,
      weight: 25,
      species: "mouse pokemon",
      power: 23,
   },
   riachu: {
      height: 12,
      wheight: 32,
      species: "mouse pokemon",
      power: 0,
   },
};

let weightCheck = ericsPokemon?.pikachu?.weight;

// If missing property, value is undefined.
console.log(`Weight Check: ${weightCheck}lbs`);

//
//
//
//
//
// Nulling Coalescing Operator: (??)

/* This operator checks to see if the reference you are checking is null or
undefined and works like the || operator. This is so you can add an optional 
perameter if it is. */

let powerCheck = ericsPokemon?.riachu?.power || "no power availiable"; // 0 value is falsey
let powerCheck2 = ericsPokemon?.riachu?.power ?? "no power availiable"; // 0 value is 0

console.log("|| check:", powerCheck, ", ?? check:", powerCheck2);
