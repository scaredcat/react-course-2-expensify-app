
// OBJECT DESTRUCTURING
// --------------------

// const person = {
//   name: 'Kate',
//   age: 33,
//   location: {
//     city: 'Marshmallowvillia',
//     temp: 23
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { publisher: { name: publisherName = 'Self-Published' } = { publisherName: 'Self-Published' } } = book;
//
// console.log(publisherName);


// ARRAY DESTRUCTURING
// --------------------

// const address = ['1299 S Juniper Street', 'Philidalphia', 'Pennsylvania', '19147'];
// const [, city = 'New York', state] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);
