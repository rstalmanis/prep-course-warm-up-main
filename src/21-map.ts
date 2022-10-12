export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str:string[]) { 
    return str.map( i => tidyUpString(i).charAt(0).toUpperCase() + tidyUpString(i).slice(1))
} 


const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
const mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
//done
