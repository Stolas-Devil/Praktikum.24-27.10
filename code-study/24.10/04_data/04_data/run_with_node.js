// load dependencies
require("./code/load")("code/journal.js", "code/chapter/04_data.js");

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

//console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
//for (let entry of JOURNAL) {
//  console.log(`${entry.events.length} events.`);
//}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

//for (let event of journalEvents(JOURNAL)) {
//  let correlation = phi(tableFor(event, JOURNAL));
//  if (correlation > 0.1 || correlation < -0.1) {
//    console.log(event + ":", correlation);
//  }
//}

for (let entry of JOURNAL) { 
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1