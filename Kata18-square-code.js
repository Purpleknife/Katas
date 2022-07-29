//Create a function that will receive a message, and return the secret square code version of the message.

const squareCode = function(message) {
  let newMessage = '';
  const strippedMessage = message.replace(/\s+/g,''); //To remove all whitespaces from message.
  const lgth = strippedMessage.length;
  const lineLimit = Math.ceil(Math.sqrt(lgth)); //The square root of lgth.
  
  for (let i = 0; i < lineLimit; i++) { //Outer loop to go through the strippedMessage, 1 character at a time, with limitLine as a stopping condition.
    for (let j = i; j < lgth; j += lineLimit) { //Inner loop to grab 1 character and then jump by limitLine each time.
      newMessage += strippedMessage[j];
    }
    newMessage += ' ';
  }
  return newMessage;
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots
