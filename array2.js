// shalow copy and deep copy
var original = ['a', 'b', 'c', 'd'];
console.log('original - ', original);

var copy1 = original;

var copy2 = [...original];

var copy3 = original.slice();
var copy4 = original.slice(1, 3);
console.log(copy4);

copy1[4] = 'p';
copy2[4] = 'q';
copy3[4] = 'r';
copy4[2] = 's';
// console.log('copy1 - ', copy1);
// console.log('copy2 - ', copy2);
console.log('original - ', original);
console.log('copy4 - ', copy4);

copy5 = original.slice(-3, -1);
console.log(copy5);

// slice vs splice
var arr1 = [1, 2, 3, 4, 5];

var arrslice = arr1.slice(1, 3);
console.log(arr1, arrslice);

var arrsplice = arr1.splice(1, 3);
console.log(arr1, arrsplice);
