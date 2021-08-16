let student1 = {
  name: 'Ehsan',
  ID: 188801018,
  location: 'dhaka',
  address: {
    city: 'Dhaka',
    Place: 'Matikata',
  },
};

// to change the property
student1.name = 'Sajjad';
// to add new property
student1.hobey = 'Coding';

console.log(student1);
console.log(student1.name);
console.log(student1['ID']);
console.log(student1.address.city);
