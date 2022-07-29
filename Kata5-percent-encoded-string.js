//Turn a string into a percent-encoded string by replacing all whitespace with %20.

const urlEncode = function(text) {
  let newText = ''; //The new text where whitespaces are gonna be replaced by %20.
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      newText += '%20'; //If the character is a whitespace, add %20 to the new text.
    } else {
      newText += text[i]; //If it's not, just add it to the new text.
    }
  }
  return newText;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("  This is  a test "));
