export {};

function add(a: number, b: number): number {
  let total: number = a + b;
  return total;
}

function subtract(a: number, b: number): number {
  let total: number = a - b;
  return total;
}

function sum([a,b,c]: number[]): number {
    const sum = [a,b,c]
    let total = 0
    //const total =sum[0] + sum[1] + sum[2]
    for(let i = 0; i<sum.length; i++)
    total = total + sum[i]
    return total
} 

function multiply([a,b,c]: number[]): number {
    const multi = [a,b,c]
    let total = 1
    for(let i = 0; i<multi.length; i++)
    total = total * multi[i]
    return total
}

function power(a: number,b: number) : number {
    let total = a
    for (let i= 1; i< b; i++)
    total = total * a
    return total
}

 console.log(add(1, 2)); // Expected output: 3
 console.log(subtract(1, 2)); // Expected output: -1
 console.log(sum([1, 2, 3])); // Expected output: 6
 console.log(multiply([1, 2, 3])); // Expected output: 6
 console.log(power(2, 3)); // Expected output: 8
//done
