// user enters comand line arguement to say when beeps will happen
// create array using process.argv
// loop though array
// ignore edge cases
// use setTimeout to space out the beeps
// add new line at end of function

// edge cases:
// no numbers => no  beep
// negative number => ignore/skip
// not a number => ignore/skip


process.stdout.write('\x07');

const args = process.argv.slice(2);
