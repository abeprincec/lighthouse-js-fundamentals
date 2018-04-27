function getGetOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

var talkingCalendar = function(date) {
  // Your code here

  //var parts = date.split('/');

  var convertedDate = new Date(date);

  var convertedYear = convertedDate.toLocaleDateString('en-CA', {
    year: 'numeric',
  });

  var convertedMonth = convertedDate.toLocaleDateString('en-CA', {
    month: 'long',
  });

  var convertedDay = convertedDate.toLocaleDateString('en-CA', {
    day: 'numeric',
  });

  return (
    convertedMonth + ' ' + getGetOrdinal(convertedDay) + ', ' + +convertedYear
  );
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
