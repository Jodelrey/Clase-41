let arr = [19, 21, 29, 46];
let arrB = [2, 6, 18, 19, 29, 46, 53, 21];
let op = arr.every(element => arrB.indexOf(element) > -1);
console.log(op);