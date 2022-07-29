//Calculate the total amount of change for the cashier to give back.
//Include all types of change.

const calculateChange = function(total, cash) {
  const money = [
    { name: 'twentyDollars', value: 2000 },
    { name: 'tenDollars', value: 1000 },
    { name: 'fiveDollars', value: 500 },
    { name: 'twoDollars', value: 200 },
    { name: 'oneDollar', value: 100 },
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
    { name: 'nickel', value: 5 },
    { name: 'penny', value: 1 },
  ];
  
  let change = {};
  let difference = cash - total;

  //Loop through the array money and calculate each time the new difference.
  for (let i = 0; i < money.length; i++) {
    change[money[i].name] = Math.floor(difference / money[i].value);
    difference -= money[i].value * change[money[i].name];
  }

  //Delete the types of change that are 0. They shouldn't be included in the results.
  for (let key in change) {
    if (change[key] === 0) {
      delete change[key];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
