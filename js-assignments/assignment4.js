// Assignment 4: Loop Control Structures

// 1. for loop: multiplication table
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop with break
console.log("");
console.log("-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    console.log(`Found: ${n}`);
    break;
  }
  n++;
}

// 3. do...while loop with continue (skips even numbers)
console.log("");
console.log("-- Odd numbers from 1 to 9 (do...while with continue) --");
let k = 0;
do {
  k++;
  if (k % 2 === 0) continue;
  console.log(k);
} while (k < 9);
