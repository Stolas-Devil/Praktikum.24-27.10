function isEven(n) {
    //if (n < 0) console.log("??");
    if (typeof(n) === "undefined") console.log("??")
    else if (n % 2 === 0) return true;
    else return false;
  };
  
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-11));
  