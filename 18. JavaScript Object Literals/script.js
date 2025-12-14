// Object Methods

// Declaring Object
const user = {};

// Adding value
user.firstname = 'Hong Hanh';
user['lastname'] = 'Chu';
user['city'] = 'Munich';

console.log(user);

// Looking up values
console.log(user.firstname);

// Deleting values
delete user.firstname;

console.log(user);

// Updating values
user.lastname = 'Mueller';
console.log(user);

