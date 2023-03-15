#!/usr/bin/node

const nums = parseInt(process.argv[2], 10);

if (isNaN(nums)) {
  console.log('Missing number of occurences');
} else {
  for (let i = nums; i > 0; i -= 1) {
    console.log('C is fun');
  }
}
