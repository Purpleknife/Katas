//Convert an url encoded string to a JS object.

const urlDecode = function(text) {
  let output = {};
  let newText = text.replace(/[=&]/g, ' ').split(' '); //Replace = and & with ' ' and then split the string to divide it into substrings by using ' ' as a separator.

  //Loop through newText and add the key value pairs to output.
  for (let i = 0; i < newText.length; i++) {
    output[newText[i]] = newText[i + 1].replace(/%20/g,' '); //Replace %20 with a whitespace.
    i++;
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
