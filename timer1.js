// create an array of numbers from the console input
let timingArray = process.argv.slice(2).map(Number);

// convert numbers in array to milliseconds
let convertedTime = [];
const convertTime = function(times) {
  for (const time of times) {
    if ((time > 0) && (!Number.isNaN(time))) {
      convertedTime.push(time * 1000);
    }
  }
};
convertTime(timingArray);

// perform a system sound at each time
const timer = function(convertedTimes) {
  for (let time of convertedTimes) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
  }
};
timer(convertedTime);
