function reverseArray(list){
let	invers_list = []
for (let l = list.length -1; l >= 0; l--)    
{
    invers_list.push(list[l]);
}

return invers_list;
};

function reverseArrayINplace(n) //reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
{
    result = invers_list;

    return result;
};

let z = [1, 2, 3, 4];
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(arrayValue));
console.log(reverseArray(z));