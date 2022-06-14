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


;

const timingArray = process.argv.slice(2);
let convertedTime = [];

const convertTime = function(timingArray) {
  for (const time of timingArray) {
    convertedTime.push(time * 1000);
  }
};

const timer = function(timingArray) {
  for (let num of timingArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
    time += timeIncrement;
  }
  // this adds a new line once spinnerText is completely printed
  setTimeout(() => {
    process.stdout.write('\n');
  }, spinnerText.length * timeIncrement);
};
