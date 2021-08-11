const person = {
  firstName: 'Ken',
  lastName: 'Kieu',
  hobby: 'Consumer Tech'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is ${fullName}`);

person.job = 'Student';

console.log(`The person's current job is: ${person.job}.`);

person.previousJob = 'Client Services Coordinator';

console.log(`The person's previous job is: ${person.previousJob}.`);

console.log(person);
