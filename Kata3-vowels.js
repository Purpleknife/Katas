//Counting the number of vowels (a, e, i, o, and u) that appear in a given string.

const numberOfVowels = function(data) {
  let vowels = []; //Creating an array where we're gonna push all the vowels found in the string 'data'.
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      vowels.push(data[i]); //If a character 'data[i]' matches with one of the vowels above, we'll push it to the vowels array.
    }
  }
  return vowels.length; //The length of the array vowels is the number of vowels pushed from 'data' to the array 'vowels'.
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("tomatoes"));
