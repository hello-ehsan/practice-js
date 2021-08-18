let country = ['bangladesh', 'china', 'afgan', 'saudi'];
console.log(country.length);

// add element at the last
country[country.length] = 'Kuwait';
console.log(country);

// array to string: way 1
let arrStr = String(country);
console.log(arrStr);

// array to string: way 2
arrStr = country.toString();
console.log(arrStr);

// array to string: way 3
arrStr = country.join();
console.log(arrStr);
arrStr = country.join(' ');
console.log(arrStr);
arrStr = country.join(' / ');
console.log(arrStr);

// array concating
let country1 = ['bangladesh', 'china', 'afgan'];
let country2 = ['saudi', 'turkey', 'pakistan'];
let concatCountry = country1.concat(country2);
console.log(concatCountry);

// sorting array
console.log(concatCountry.sort());

// reverse array
console.log(concatCountry.reverse());
