let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);
console.log(arr[arr.length - 1]);

let add = 7;
let additional = 8;

arr.push(add);

let arrOfArr = [
  [2, 4, 6],
  ["Elliott", "Seth", "Drehle"],
  [true, false, false],
];

arrOfArr.push(["additional", "Stuff", "Here"]);
console.log(arrOfArr[3][2]);
