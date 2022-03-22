/**
 * The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 * The spread operator is often used in combination with destructuring.
 */


//  Example-1
 const numbersOne = [1, 2, 3];
 const numbersTwo = [4, 5, 6];
 const numbersCombined = [...numbersOne, ...numbersTwo];


//  Example-2
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

//  Example-3
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}