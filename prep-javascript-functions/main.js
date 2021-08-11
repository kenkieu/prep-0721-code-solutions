// Add Two
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(4, 4);
console.log(`addTwoNumbers exercise: ${sum}`); // 8

// Hours to Minutes
function convertHoursToMinutes(hours) {
  return hours * 60; // 600 hours
}

const hoursToMinutes = convertHoursToMinutes(2);
console.log(`convertHoursToMinutes exercise: ${hoursToMinutes}`); // 600

// Greeting
function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

const concatString = getGreeting('World!');
console.log(`getGreeting exercise: ${concatString}`); // Hello World!

// Add Multiply
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addMultiply = addAndMultiplyBy5(10, 5);
console.log(`addAndMultiplyBy5 exercise: ${addMultiply}`); // 75

// Multiply Divide
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log(`multiplyAndDivideBy5 exercise: ${multiplyDivide}`); // 70

// Subtract Two
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwo = subtractTwoNumbers(22, 7);
console.log(`subtractTwoNumbers exercise : ${subtractTwo}`); // 15

// Circle Circumference
function getCircleCircumference(radius) {
  return (radius * 2) * Math.PI;
}

const circleCircumference = getCircleCircumference(5);
console.log(`getCircleCircumference exercise: ${circleCircumference}`); // 31.41592653589793

// Full name
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const fullName = (getFullName('Ken', 'Kieu'));
console.log(`getFullName exercise: ${fullName}`); // Ken Kieu

// Cube
function cube(number) {
  return number ** 3;
}

const cubedNumber = cube(5);
console.log(`cube exercise: ${cubedNumber}`); // 125
