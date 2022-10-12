export {};

function onlyTheAces(arr: string[]) {
  let newArray: string[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) {
        newArray.push(arr[i]);
        newArray.push(arr[j]);
      }
  }
  return newArray;
}
console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
// done
