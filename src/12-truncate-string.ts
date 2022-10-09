export {};


    
function truncateString (word: string, lenght:number){
const truncat: string = word.substring(0, lenght)
return truncat
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
//Done
