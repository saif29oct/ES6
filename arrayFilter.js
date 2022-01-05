/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

const companies = [
    {name: "company 1", category: "category 23", start: 2000, end: 2020},
    {name: "company 2", category: "category 22", start: 2000, end: 2007},
    {name: "company 3", category: "category 23", start: 2000, end: 2010},
    {name: "company 4", category: "category 21", start: 2010, end: 2020},
    {name: "company 5", category: "category 22", start: 2000, end: 2021},
    {name: "company 6", category: "category 25", start: 2009, end: 2020},
    {name: "company 7", category: "category 23", start: 2008, end: 2020},
    {name: "company 8", category: "category 21", start: 2000, end: 2020},
    {name: "company 9", category: "category 22", start: 2007, end: 2015},
]

const ages = [12,32, 09,23,34,14,56,45,53,25,22,20,29];

/**
 * Problem: 18 years old or above ages boys are allowed to drink. So find the boys whose ages are above 18.
 */




/**
 * Using Foreach Loop
 * "foreach loop" and "for loop" doesn't return anything back. So for the filtered ages we need to declare an array where we can push the aspected age.
*/

let canDrink = [];
ages.forEach(age =>{
  if(age>18) {
      canDrink.push(age);
  }
})
console.log("Boys permitted for drink", canDrink)



/**
 * Using Filter method
 * Since "Filter()" returns a new array we don't declare any additional array
*/

let permittedAges = ages.filter(age => age > 18)

console.log("Permitted Ages: ", permittedAges);

/**
 * Find all prime numbers in an array
 */

 const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

 function isPrime(num) {
   for (let i = 2; Math.ceil(num/2) >= i; i++) {
     if (num % i == 0) {
       return false;
     }
   }
   return num > 1;
 }
 
 console.log(array.filter(isPrime));


/**
 * The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.
 */
 let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  
  console.log('Number of Invalid Entries = ', invalidEntries)