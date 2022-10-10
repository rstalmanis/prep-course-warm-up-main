export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */
 
function onePercentFee(price: number):number{
    const newPrice: number = price / 100 * 1 + price
    return newPrice
}
//const newPr: number = onePercentFee 
// // You are allowed to change this function
 function convertToUSD(newPrgt: number): string {
      const rate: number =  newPrgt * 0.97 
      return rate.toFixed(2)
  }
// // You are allowed to change this function
 function convertToBRL(newPrice: number):string {
     const rateBRL: number = newPrice * 5.12
     return rateBRL.toFixed(2)
 }

 const product = "You don't know JS";
 const price: number = 12.5;
 const priceInUSD = convertToUSD(onePercentFee(price));
 const priceInBRL = convertToBRL(onePercentFee(price));

 console.log("Product: " + product);
 console.log("Price: $" + priceInUSD);
 console.log("Price: R$" + priceInBRL);

// /* Expected output:

//     > Product: You don't know JS
//     > Price: $?
//     > Price: R$?

// */
//done
