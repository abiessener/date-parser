var test1Result = dateConvertsCorrectly("Fri Jan 17 2017 22:10:08 GMT-0500 (CDT)", "2017-01-17");
var test2Result = dateConvertsCorrectly("Fri Dec 02 2017 02:10:08 GMT-0500 (CDT)", "2017-12-02");
var test3Result = dateConvertsCorrectly("2017-01-17", "2017-01-17");
var test4Result = dateConvertsCorrectly("Fri Jul 05 2017 22:10:08 GMT-0500 (CDT)", "2017-07-05");
var test5Result = dateConvertsCorrectly("2017-07-06T02:59:12.037Z", "2017-07-06");
var test6Result = dateConvertsCorrectly("2017-06-07", "2017-06-07");

console.log('test 1 passed:', test1Result);
console.log('test 2 passed:', test2Result);
console.log('test 3 passed:', test3Result);
console.log('test 4 passed:', test4Result);
console.log('test 5 passed:', test5Result);
console.log('test 6 passed:', test6Result);


function pgFormatDate(date) {


    if (date) {
      var parse = {
        Year: 0000,
        Month: 00,
        Day: 00,
      };

      switch(true) { // this is an ugly way to parse the month, but it makes more sense than cascading if-else statements
        case /Jan/i.test(date):
          parse.Month = "01"; break;
        case /-01-/.test(date):
          date = date.replace(/-01/, '') + ' '; // need to remove the month value from the input string and add a space so the day-parse regex works properly
          parse.Month = "01"; break;

        case /Feb/i.test(date):
          parse.Month = "02"; break;
        case /-02-/.test(date):
          date = date.replace(/-02/, '') + ' ';
          parse.Month = "02"; break;

        case /Mar/.test(date):
          parse.Month = "03"; break;
        case /-03-/.test(date):
          date = date.replace(/-03/, '') + ' ';
          parse.Month = "03"; break;

        case /Apr/.test(date):
          parse.Month = "04"; break;
        case /-04-/.test(date):
          date = date.replace(/-04/, '') + ' ';
          parse.Month = "04"; break;

        case /May/.test(date):
          parse.Month = "05"; break;
        case /-05-/.test(date):
          date = date.replace(/-05/, '') + ' ';
          parse.Month = "05"; break;

        case /Jun/.test(date):
          parse.Month = "06"; break;
        case /-06-/.test(date):
          date = date.replace(/-06/, '') + ' ';
          parse.Month = "06"; break;

        case /Jul/.test(date):
          parse.Month = "07"; break;
        case /-07-/.test(date):
          date = date.replace(/-07/, '') + ' ';
          parse.Month = "07"; break;

        case /Aug/.test(date):
          parse.Month = "08"; break;
        case /-08-/.test(date):
          date = date.replace(/-08/, '') + ' ';
          parse.Month = "08"; break;

        case /Sep/.test(date):
          parse.Month = "09"; break;
        case /-09-/.test(date):
          date = date.replace(/-09/, '') + ' ';
          parse.Month = "09"; break;

        case /Oct/.test(date):
          parse.Month = "10"; break;
        case /-10-/.test(date):
          date = date.replace(/-10/, '') + ' ';
          parse.Month = "10"; break;

        case /Nov/.test(date):
          parse.Month = "11"; break;
        case /-11-/.test(date):
          date = date.replace(/-11/, '') + ' ';
          parse.Month = "11"; break;

        case /Dec/.test(date):
          parse.Month = "12"; break;
        case /-12-/.test(date):
          date = date.replace(/-12/, '') + ' ';
          parse.Month = "12"; break;

        default: console.log("Month parse fail");
      }

      if (/\d{4}/.test(date)) { // set Year to the first set of four consecutive digits
        parse.Year = date.match(/\d{4}/)[0];
      } else {
        console.log("Year parse fail");
      }

      if (/\D\d{2}\D/.test(date)) { // set Date to the first set of exactly two consecutive digits
        parse.Day = date.match(/\D\d{2}\D/)[0].substring(1,3);
      } else {
        console.log("Day parse fail");
      }

      return [parse.Year, parse.Month, parse.Day].join("-");
    } else {
        return null;
    }
}

function dateConvertsCorrectly (input, expectedOutput) {
  //console.log("\nInput: " + input + "\nOutput: " + pgFormatDate(input) + "\n" + (pgFormatDate(input) === expectedOutput));
    return pgFormatDate(input) === expectedOutput;
}
