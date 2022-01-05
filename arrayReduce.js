/**
 * The reduce() method executes a user-supplied “reducer” callback function on each 
 * element of the array, in order, passing in the return value from the calculation 
 * on the preceding element. The final result of running the reducer across all 
 * elements of the array is a single value.
 */


// Example 1
const array1 = [1, 2, 3, 4];
const reducer = (ac,value) => {
    const vl = ac+value
    return vl
}

console.log("log-1: ",array1.reduce(reducer))
console.log("----------------------------------------")
console.log("log-2: ",array1.reduce(reducer,0))


//Example 2
// Using foreach
let totalPrice = 0;
items.forEach( item => totalPrice+= item.price )
console.log(totalPrice);

const items = [
    { product: "potato", price: 20 },
    { product: "potato", price: 20 },
    { product: "potato", price: 20 },
    { product: "potato", price: 20 },
    { product: "potato", price: 20 }
];

const reducer = (total, item) =>  total + item.price;

console.log(items.reduce(reducer, 0));


// Example 3
