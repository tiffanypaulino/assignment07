/*eslint-env browser*/

//STEP 1
let number = prompt('Step 1 - Enter a negative or positive number');
console.log("Step 1: " + Math.abs(number));

//STEP 2
let decimal = prompt('Step 2 - Enter number with a decimal');
console.log("Step 2: " + Math.ceil(decimal));

//STEP 3
let point = prompt("Step 3 - Enter another number with a decimal");
console.log("Step 3: " + Math.floor(decimal));

//STEP 4
let num = prompt('Step 4 - Enter five numbers, separated by a comma');
let numSplit = num.split(",");
let numArray = Array.from(numSplit );
console.log(numArray);
console.log("Step 4 - " + "largest number: " + Math.max.apply(null, numArray) + " smallest number: " + Math.min.apply(null, numArray));

//STEP 5
let sqRoot = prompt('Step 5 - Enter a number');
console.log("Step 5: " + Math.sqrt(sqRoot));
