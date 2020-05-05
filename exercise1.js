let arr = [];
let numbers = prompt('Enter Number: ', '12 11 13 14').split(' ');

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    arr.push(numbers[i]);
  }
}
console.log(arr);
