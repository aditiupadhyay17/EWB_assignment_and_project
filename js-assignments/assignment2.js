// Assignment 2: Operators, Expressions, and Input Handling
const billInput = prompt("Enter the bill amount:", "100");
const tipInput = prompt("Enter the tip percentage:", "15");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (Number.isNaN(subtotal) || Number.isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
  console.log("Invalid input. Please enter positive numbers only.");
} else {
  let calculatedTip = (subtotal * tipPercentage) / 100;
  let total = subtotal;
  total += calculatedTip;

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
