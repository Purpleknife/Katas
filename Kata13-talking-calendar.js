//Create a function that takes in a date string with the format YYYY/MM/DD,
//and returns a new human readable date that looks like December 2nd, 2017.

//Convert the month:
const convertMonth = function(month) {
  
  switch (month) {
  case '01': month = 'January'; break;
  case '02': month = 'February'; break;
  case '03': month = 'March'; break;
  case '04': month = 'April'; break;
  case '05': month = 'May'; break;
  case '06': month = 'June'; break;
  case '07': month = 'July'; break;
  case '08': month = 'August'; break;
  case '09': month = 'September'; break;
  case '10': month = 'October'; break;
  case '11': month = 'November'; break;
  case '12': month = 'December'; break;
  }

  return month;
};

//Convert the day:
const convertDay = function(day) {
  switch (day) {
  case '01': day = '1st'; break;
  case '02': day = '2nd'; break;
  case '03': day = '3rd'; break;
  case '04': day = '4th'; break;
  case '05': day = '5th'; break;
  case '06': day = '6th'; break;
  case '07': day = '7th'; break;
  case '08': day = '8th'; break;
  case '09': day = '9th'; break;
  case '22': day += 'nd'; break;
  case '23': day += 'rd'; break;
  case '21': case '31': day += 'st'; break;
  default: day += 'th'; break;
  }

  return day;
};

//Convert the date:
const talkingCalendar = function(date) {
  const newDate = date.split('/');
  const month = newDate[1];
  const day = newDate[2];
  const year = newDate[0];

  return convertMonth(month) + ' ' + convertDay(day) + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2007/01/11"));
