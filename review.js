//ternary operator syntax
//------------------------------condition ? valueIfTrue : valueIfFalse

let x = [1, 2, 3, 4];
let y = [true, true];

x.length > y.length ? console.log("x is larger") : console.log("y is larger");

//arrow function syntax
//-------------------------------funcName = (parameter,parameter) => {}

addInts = (num1, num2) => {
  return num1 + num2;
};

console.log(addInts(2, 3));
