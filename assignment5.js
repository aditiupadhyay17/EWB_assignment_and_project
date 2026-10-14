// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Block scope demonstration
{
  let blockVar = "I exist only inside this block";
}
try {
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}

// Function scope demonstration
function functionScopeTest() {
  var functionVar = "I exist only inside this function";
  return functionVar;
}
functionScopeTest();
try {
  console.log(functionVar);
} catch (error) {
  console.log(`Function Scope Error: ${error.name}: ${error.message}`);
}
