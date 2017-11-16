//
//  Object destructuring
//


// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philly',
//     temp: 92
//   }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}`);
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//
//  Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];
const [itemName, , medium, large] = item;
console.log(`A medium ${itemName} costs ${medium}`);
