import { NumberLiteralType } from "typescript";

export {};

function addNumbers(a:number, b:number, c:number) :number {
    let total = a + b + c;
    return total
}

const result = addNumbers(1, 3, 4);
console.log(result); // Expected output: 8
