let str1 = 'Hello Mainly Coding.';
let str2 = ' We are awesome.';

// charAt
console.log(str1.charAt(3));

// CharCodeAt
console.log(str1.charCodeAt(12));

// concat
console.log(str1.concat(str2));

// endsWith
console.log(str1.endsWith('Coding.'));

// startsWith
console.log(str1.startsWith('Hello'));
console.log(str1.startsWith('llo'));

// includes
console.log(str1.includes('Hello'));

// fromCharCode
console.log(String.fromCharCode(114));

// indexOf
console.log(str1.indexOf('o'));
console.log(str1.lastIndexOf('o'));
console.log(str1.indexOf('Mainly'));

// match
let str3 = 'test this test is a test';
console.log(str3.match(/test/g));
console.log(str3.match(/t/g));
console.log(str1.match(/test/g));

let x = str3.match(/t/g);
console.log(x.length);

// repeat
// console.log(str1.repeat(3));

// replace
console.log(str1.replace(/Mainly Coding/g, 'Learn Code!'));

// search
console.log(str1.search('Coding'));

// slice
console.log(str1.slice(2, 8));

// split
console.log(str1.split());
console.log(str1.split(' '));
console.log(str1.split('o'));
console.log(str1.split(''));

// Uppercase lowecase
console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleLowerCase());

// to remove unwanted space
let p = '     This is a Paragraph.       ';
console.log(p);
console.log(p.trim());
