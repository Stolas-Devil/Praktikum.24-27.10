let result = 0
for (let counter = 0; counter < 100; counter += 1){
    result = result + 1; 
    if (result % 3 == 0) {
        console.log("Fizz");
    }
    else if (result % 5 == 0) {
        console.log("Buzz")
    }
    else console.log(result);
}