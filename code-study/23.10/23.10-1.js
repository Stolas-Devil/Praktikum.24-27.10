'consol.log()' // for print results on Terminal

function factorial(n) { // make a function factorial
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    } // function actions
  }

console.log(factorial(8));// used a function 

console.log(2 * 12e8); // '*' multiplication, e = exponent e(n) = 10^(n)

console.log(314 / 100); // '/' division

console.log(144 % 12); // % symbol is used to represent the remainder operation.


console.log('This is the 1 line \nAnd this is 2') //"A newline character is written like "\n" 

if (1 + 3 == 2) console.log("It's true")
else console.log("It's fals"); // didnt hawe elif > heve else if 


let number = 0;
while (number <= 12) { //while as in Pyton
  console.log(number);
  number = number + 2;}

let result = 2;
for (let counter = 0; counter < 10; counter = counter + 1)// initialization(Starting condition); condition (max number of Steps); step;
{
  result = result * 2; // Code that is doing in iteration 
}
console.log(result);

// Break; comand to stoping code 