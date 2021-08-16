let data = 10;
// num to string
let dataCon = String(10);

console.log(dataCon);
console.log(typeof dataCon);
console.log(dataCon.length);

// another way of num to string
let x = 20;
let xCon = x.toString();
console.log(xCon);
console.log(typeof xCon);

// Date to string
let todaysDate = new Date();
console.log(todaysDate);
// converting way 1
console.log(todaysDate.toString());
// converting way 2
let dateNow = String(new Date());
console.log(dateNow);

// boolean converting
let bool = true;
// let boolCon = bool.toString();
let boolCon = String(bool);
console.log(boolCon);
console.log(typeof boolCon);

// boolean to number
console.log(Number(bool));

// array to string
let str = [1, 2, 3, 4];
str1 = String(str);
// or
str1 = String([3, 4, 5, 6]);
console.log(str1);
console.log(typeof str1);

// array string to number
let newStr = ['1', '2', '3'];

let newStrCon = Number(newStr);
// or
// newStrCon = Number(['1', '2', '3']);
console.log(newStrCon);
console.log(typeof newStrCon);

// number
x = 30.635612;
console.log(parseInt('1234'));
console.log(parseInt('12.34'));
console.log(parseFloat('12.34'));

console.log(x.toFixed());
console.log(x.toFixed(3));
