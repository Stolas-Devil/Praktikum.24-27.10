
function renge(f_num, l_num, step){ // f_num - first number , l_num - last namber
let list = []

if (f_num < l_num || step === undefined) {step = 1}
else step = -1;

if (step > 0) {
    for (let num = f_num; num <= l_num; num += step) list.push(num);
  } else { // if step < 0 
    for (let num = f_num; num >= l_num; num += step) list.push(num);
  }
  return list;
};

function sum(numbers){
    result = numbers.reduce((a, b) => a + b, 0)
    return result;};
    //.reduse ((accumulatol, currentVAlue) => {accumulatol + currentVAlue}, 0) 
    // "}, 0 )" - 0 the first accumulatol value  
console.log(renge(20, 1,)) 