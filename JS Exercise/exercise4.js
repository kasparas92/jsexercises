let vowel = prompt('Enter char: ', 'c');

let vowels = 'aeiouAEIOU';
let isVowel = 0;
for (let i = 0; i < vowels.length; i++) {
  if (vowels[i] == vowel) {
    console.log(vowel);
    isVowel = 1;
    break;
  }
}
if (!isVowel) {
  console.log(`letter ${vowel} is not vowel`);
}
