//function countBs(n){
//    let text =(n)
//    let length = n.length;
//    return length
//}
//console.log(countBs("BBC"));

function countChar(string , ch) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            count += 1;
        }
    }
    return count;
}
function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlk", "k"))