import { createTrue } from "typescript";

export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num: any): boolean {
  //let isNumber: boolean = true;
  //let isInteger: boolean = true
  //let isNotEqual: boolean = true
  //let total: boolean = true
  if (typeof num === "number" && num % 1 === 0 && !excludedNums.includes(num) ) {
    return true
  //  isNumber = true;
  //  isInteger = true
  } else {
    return false
  //  isInteger = false;
  }
  //if(excludedNums.includes(num)){
  //  isNotEqual = false
  //}else{
  //  isNotEqual = true
  //}
  //if (isNumber === isInteger === isNotEqual){
  //  total = true
  //}else{
  //  total = false
  //}
    //return total
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
//done