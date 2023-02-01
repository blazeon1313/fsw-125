// import the math.js file
const math = require('./math')

// showing results with console.log
console.log(math.add(5, 7)); // addition function
console.log(math.sub(10, 7)); // subtraction function
console.log(math.mult(3, 4)); // multiply function

// For division I used if else statements to show errors if 0 is used
console.log(math.div(0, 4)); // shows error message
console.log(math.div(9, 3)); // division function
console.log(math.div(5, 0)); // shows an error message
