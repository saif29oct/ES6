const array1 = [1, 2, 3, 4];
const reducer = (ac,value) => {
    console.log("ac",ac)
    console.log("value", value)
    const vl = ac-value
    return vl
}

console.log("log-1: ",array1.reduce(reducer))
console.log("----------------------------------------")
console.log("log-2: ",array1.reduce(reducer,0))
