let numbers = prompt('Enter triangle sides', '9 8 7').split(' ');
console.log(numbers);
if (
  (numbers[0] == numbers[1] && numbers[2] != numbers[1]) ||
  (numbers[0] == numbers[2] && numbers[2] != numbers[1]) ||
  (numbers[1] == numbers[2] && numbers[0] != numbers[1])
) {
  console.log('Isosceles');
} else if ((numbers[0] == numbers[1]) == numbers[2]) {
  console.log('Equilateral');
} else {
  console.log('Scalene');
}
