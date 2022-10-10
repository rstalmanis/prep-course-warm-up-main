export {};

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
 function calculateSalesTax(price: number): number {
 //   let rond: string = "" + price.toFixed(2)
 //   console.log(rond)
 //   let tax: number = ((price * 100) /100) / 100 * 21
 //   console.log(tax)
 //   let stringTax : number = Math.round((tax + Number.EPSILON) * 100) / 100
 //   console.log(stringTax)
 //   let sum: number = rond + tax
 //   console.log(Math.round(sum * 100) / 100)
    return 4.2
 //return tax 
}

//const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);
console.log(salesTax)
console.log(price + salesTax)
//console.log("Product: " + product);
console.log("Price: £" + price);
//console.log("Sales tax: £" + salesTax);
console.log("Total: £" + (price + salesTax));
//console.log(typeof price)    

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
