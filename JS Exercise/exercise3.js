print = function (roww, symbol, times) {
  let row = '';

  for (let i = 0; i < times; i++) {
    if (roww == 1 || roww == 5) {
      row += symbol;
    } else {
      if (i == 1) {
        row += ' ';
      } else {
        row += symbol;
      }
    }
  }
  return row;
};

answer = prompt('Enter number: ', '5');

for (let j = 1; j < 6; j++) {
  console.log(print(j, answer, 3));
}
