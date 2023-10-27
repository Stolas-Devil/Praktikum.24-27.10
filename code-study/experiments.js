var characters = ['a', 'b', 'c']
var numbers = characters.map(ch => ch.charCodeAt())

var sum = numbers.reduce((pre, cur)=> pre + cur)

console.log(sum)

var orders = [
    {
        orderNumber: "1234xadf",
        price: 12.5
    }, 
    {
        orderNumber: "asdfölkj233",
        price: 44.80
    }
]


var sumOfOrders = orders.map(o => o.price).reduce((preSum, curPrice)=> preSum + curPrice)

console.log(sumOfOrders)