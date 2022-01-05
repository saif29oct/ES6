/* 
    The destructuring assignment syntex is a JavaScript expression that makes 
    it possible to unpack values from arrays, or properties from objects, 
    into distinct variables. 
*/


[a, b, ...rest] = [10, 20, 30, 40, 50];  // From an Array
console.log(rest);


({a, b, ...rest} = {a: 10, b: 20, f:90, e:{c: 30, d: 40}});   //From an Object
console.log(rest)
console.log(rest.e);


const x = [3,67,89,0,23]
const [y, z] = x    // assign array elements as a variable
console.log(y,z)


[a, b] = [56,32] //assign multiple variables
console.log(a,b)


[a=5, b=5] = [1]    // Using Default variable
console.log(a,b)


let sa = 10;
let sb = 20;
// [sa, sb] = [10, 20]
[sa, sb] = [sb, sa]  // swapig variables
console.log(sa,sb)

// Parsing an array returned from a function
function f() {
    return [1, 2, 3];
  }
  let a, b;
  [a, , b] = f();
  console.log(a,b)

  // Object Destructuring
const user = {
    id: 42,
    isVerified: true
};
const {id, isVerified} = user;
console.log(id);


let a, b;  //A variable can be assigned its value with destructuring separate from its declaration.
({a, b} = {a: 1, b: 2});
/*  
    Note: The parentheses ( ... ) around the assignment statement are required 
    when using object literal destructuring assignment without a declaration.
*/


// Assigning to new variable name
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
console.log(foo); // 42
console.log(bar); // true

// Unpacking fields from objects passed as a function parameter
const user = {
    id: 42,
    fullname : {
        firstname: 'Saiful',
        lastname: 'Islam'
    }
}

function whois({id, fullname:{firstname, lastname}}){
    console.log(id, firstname, lastname)
}
whois(user);

function whois1({id, fullname:{firstname: name}}){
    console.log(id, name)
    console.log(`ID: ${id} Name: ${name}`);
}
whois1(user)


// Setting a function parameter's default value
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    /* 
        Note: In the function signature for drawChart above, the destructured 
        left-hand side is assigned to an empty object literal on the right-hand 
        side: {size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}. You could 
        have also written the function without the right-hand side assignment. 
        However, if you leave out the right-hand side assignment, the function 
        will look for at least one argument to be supplied when invoked, whereas 
        in its current form, you can call drawChart() without supplying any 
        parameters. The current design is useful if you want to be able to call 
        the function without supplying any parameters, the other can be useful 
        when you want to ensure an object is passed to the function.
    */
    console.log(size, coords, radius);
  }
  
  drawChart({
    coords: {x: 18, y: 30},
    radius: 30
  });

  