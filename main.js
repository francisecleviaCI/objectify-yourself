const myCodeImmersivesObj = {
  objectify: 'me'
};

// Set the value of property `objectify` to be "yourself".
francis.objectify = 'yourself'

// Add the new property `isAnExcellentObject` and set it to `true`.
francis.isAnExcellentObject = true;

// Add the property `term` and set it to 1.
francis.term = 1;

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
francis.term = francis.term + 1;

// Now add a new property called `currentScore` and set it to 3.
francis.currentscore = 3;

// Now add a new property called `cumulativeScore` and set it to 50.
francis.cumulativeScore = 50;

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
francis.cumulativeScore = 53;

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`. ******
francis.{'I am exactly this cool'} = 'soooooo cool'

// Now make a new EMPTY object that represents yourself.
let francis = {};

// Add a `firstName` property and set it to a string.
let francis = {
    firstName: 'Francis',

};

// Add a `lastName` property and set it to a string.
let francis = {
  firstName: 'Francis',
  lastName: 'Eclevia',
};

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
let francis = {
  firstName: 'Francis',
  lastName: 'Eclevia',
  fullName: firstName + ' ' + lastName,
};

// Add an `age` property and set it to a number.
let francis = {
  firstName: 'Francis',
  lastName: 'Eclevia',
  fullName: firstName + ' ' + lastName,
  age: 38,
};

// Add an address property and set it to an empty array.
let francis = {
  firstName: 'Francis',
  lastName: 'Eclevia',
  fullName: firstName + ' ' + lastName,
  age: 38,
  address: [],
};

// Now push three strings into that array.
francis.address.push('195', '16th Street', 'Brooklyn');
// console.log(francis.adress); 

// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `codeImmersivesObject` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of numbers. The important thing here is: this should all be done within the brackets of the object, not below the place where the object is declared.

const iLoveObjects4Ever = {
  objectify: 'me',
  doILoveNYC: true,
  monthsLivingHere: 2,
  birthday: [2, 18, 82],
};

// As a stretch goal, pre-populate the object with at least one property using bracket notation as well. 


// As a further stretch goal, add a function that takes in a key name as a string and changes the corresponding value in the object you just made to be the string 'overwritten DYNAMICALLY'. Now call it with the name of one of the keys in your object and see if it works!
