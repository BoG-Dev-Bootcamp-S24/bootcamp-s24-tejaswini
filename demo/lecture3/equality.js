// == Operator Examples
console.log('0 == false:', 0 == false); // true, because 0 is "falsy"
console.log('"1" == 1:', "1" == 1); // true, because "1" is coerced to numeric 1
console.log('"true" == true:', "true" == true); // false, "true" is not coerced into a boolean
console.log('"false" == false:', 'false' == false); // false, "true" is not coerced into a boolean
console.log('null == undefined:', null == undefined); // true, they are considered equal

// === Operator Examples
console.log('0 === false:', 0 === false); // false, different types: number vs boolean
console.log('"1" === 1:', "1" === 1); // false, different types: string vs number
console.log('"true" === true:', "true" === true); // false, different types: string vs boolean
console.log('null === undefined:', null === undefined); // false, different types

// Illustration with Arrays and Objects
const arr1 = [];
const arr2 = [];
console.log('[] == []:', arr1 == arr2); // false, different references
console.log('[] === []:', arr1 === arr2); // false, different references

const obj1 = {};
const obj2 = {};
console.log('{} == {}:', obj1 == obj2); // false, different references
console.log('{} === {}:', obj1 === obj2); // false, different references

// However, comparing the same object or array with itself
console.log('arr1 == arr1:', arr1 == arr1); // true, same reference
console.log('obj1 === obj1:', obj1 === obj1); // true, same reference
