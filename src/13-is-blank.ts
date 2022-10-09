import { createFalse } from "typescript";

export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank(inp: string | null): boolean{

  return inp === null || inp.trim() === ""
}


console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
//Done
