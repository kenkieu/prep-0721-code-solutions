function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(4, 4);
console.log('addTwoNumbers exercise:', sum); // 8

function convertHoursToMinutes(hours) {
  return hours * 60; // 600 hours
}

const hoursToMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', hoursToMinutes); // 600

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

const concatString = getGreeting('World!');
console.log('getGreeting exercise: ' + concatString); // Hello World!

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addMultiply = addAndMultiplyBy5(10, 5);
console.log(`addAndMultipluBy5 exercise: ${addMultiply}`);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log(`multiplyAndDivideBy5 exercise: ${multiplyDivide}`);
