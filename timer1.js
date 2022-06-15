/* eslint-disable prettier/prettier */
// user enters comand line arguement to say when beeps will happen
// create array using process.argv
// convert time in seconds to milliseconds
// loop though array
// ignore edge cases
// use setTimeout to space out the beeps
// add new line at end of function

// edge cases:
// no numbers => no  beep
// negative number => ignore/skip
// not a number => ignore/skip

let timingArray = process.argv.slice(2).map(Number);
console.log("timingArray:", timingArray);

let convertedTime = [];
const convertTime = function(times) {
  for (const time of times) {
    if ((time > 0) && (!Number.isNaN(time))) {
      convertedTime.push(time * 1000);
    }
  }
};
convertTime(timingArray);
console.log("convertedTime:", convertedTime);

const timer = function(convertedTimes) {
  for (let time of convertedTimes) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
  }
};
timer(convertedTime);
