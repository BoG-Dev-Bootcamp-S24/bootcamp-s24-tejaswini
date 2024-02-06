//spread operator for arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // Output: [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest2] = numbers;
console.log(one); // Output: 1
console.log(two); // Output: 2

//--------------------------------------------------------------------------------------------

//spread operator for objects

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow',
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//   //destructuring object
//   const {brand, model, ...rest} = myUpdatedVehicle;
//   console.log(myUpdatedVehicle);
//   console.log(brand, model, rest);