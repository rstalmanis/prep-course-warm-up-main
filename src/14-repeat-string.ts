export {};

const repeatString = (first: string, second: number) => {
    let repeatStr: string = ""
    while (second > 0){
        repeatStr += first
        second --
    }  
return repeatStr
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
//Done