/* Create a function that will receive an input string and one or more casing options.
Return a new string that is formatted based on casing options */

//1- Camel casing function:
const camel = function(input) {
  let newInput = '';
  let strings = input.split(' '); // .split() divides input into substrings by using ' ' as a separator.
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      newInput += strings[i][0].toUpperCase()  + strings[i].slice(1).toLowerCase();
    } else {
      newInput += strings[i].toLowerCase();
    }
  }
  return newInput;
};

//2- Pascal casing function:
const pascal = function(input) {
  let newInput = '';
  let strings = input.split(' '); // .split() divides input into substrings by using ' ' as a separator.
  for (let i = 0; i < strings.length; i++) {
    newInput += strings[i][0].toUpperCase()  + strings[i].slice(1).toLowerCase();
  }
  return newInput;
};

//3- Snake casing function:
const snake = function(input) {
  return input.replace(/ /g, '_');
};

//4- Kebab casing function:
const kebab = function(input) {
  return input.replace(/ /g, '-');
};

//5- Title casing function:
const title = function(input) {
  let newInput = '';
  newInput += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      newInput += input[i] + input[i + 1].toUpperCase();
      i++;
    } else {
      newInput += input[i];
    }
  }
  return newInput;
};

//6- Vowel casing function:
const vowel = function(input) {
  let newInput = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      newInput += input[i].toUpperCase();
    } else {
      newInput += input[i];
    }
  }
  return newInput;
};

//7- Consonant casing function:
const consonant = function(input) {
  let newInput = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
      newInput += input[i].toUpperCase();
    } else {
      newInput += input[i];
    }
  }
  return newInput;
};

//8- Upper casing function:
const upper = function(input) {
  return input.toUpperCase();
};

//9- Lower casing function:
const lower = function(input) {
  return input.toLowerCase();
};


// Main function:
const makeCase = function(input, cases) {
  let newInput = '';
  if (typeof cases === 'string') { //If cases is a string:
    switch (cases) {
    case 'camel': newInput = camel(input); break;
    case 'pascal': newInput = pascal(input); break;
    case 'snake': newInput = snake(input); break;
    case 'kebab': newInput = kebab(input); break;
    case 'title': newInput = title(input); break;
    case 'vowel': newInput = vowel(input); break;
    case 'consonant': newInput = consonant(input); break;
    case 'upper': newInput = upper(input); break;
    case 'lower': newInput = lower(input); break;
    }
  } else { //If cases is an array:
    //Some casing styles need to be processed before others:
    
    let precedence = [];
    for (let style of cases) {
      if (style === 'camel' || style === 'pascal' || style === 'snake' || style === 'kebab' || style === 'title') {
        precedence[0] = style;
      } else if (style === 'vowel' || style === 'consonant') {
        precedence[1] = style;
      } else if (style === 'upper' || style === 'lower') {
        precedence[2] = style;
      }
    }
    newInput = input;
    for (let style of precedence) {
      switch (style) {
      case 'camel': newInput = camel(newInput); break;
      case 'pascal': newInput = pascal(newInput); break;
      case 'snake': newInput = snake(newInput); break;
      case 'kebab': newInput = kebab(newInput); break;
      case 'title': newInput = title(newInput); break;
      case 'vowel': newInput = vowel(newInput); break;
      case 'consonant': newInput = consonant(newInput); break;
      case 'upper': newInput = upper(newInput); break;
      case 'lower': newInput = lower(newInput); break;
      }
    }
  }
  return newInput;
};
  


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
