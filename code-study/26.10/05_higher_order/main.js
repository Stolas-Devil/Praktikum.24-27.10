const { Script } = require("vm");
const SCRIPTS = require("./code/scripts");

// load dependencies
require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }
  
  //console.log(filter(SCRIPTS, script => script.living));
  //console.log(SCRIPTS.filter(s => s.direction == "ttb"));
//  console.log(filter(SCRIPTS, script => script.name === "Adlam"));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
//console.log(Math.round(total / count));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(69));
