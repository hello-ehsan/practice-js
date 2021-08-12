var person1 = 'Rahim';
var person2 = 'Karim';
var areBrothers = true;

// alternate way of &&
if ('Rahim' == person1) {
  if ('Karim' == person2) {
    if (true == areBrothers) {
      console.log('They are brothers');
    } else {
      console.log('they are not brothers');
    }
  }
}
