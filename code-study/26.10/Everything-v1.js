//Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false; //Символ '!' у JavaScript є *НЕ логічним оператором *. Він використовується для зворотного логічного стану свого операнду. У коді, '!test(element)' повертає 'true', якщо 'test(element)' повертає 'false', і навпаки. Оператор 'if' перевіряє, чи результат 'test(element)' є 'false', і якщо це так, він повертає 'false'. Якщо жоден з елементів масиву не повертає 'false', то функція повертає 'true'.Сподіваюся, це допоможе!
    }return true;
    }

function every2(array, test) {
    return !array.some(element => !test(element));
}

console.log(every2([1, 3, 5], n => n < 10));    
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true