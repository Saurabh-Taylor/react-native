let arr = [6, 2, 7, 4, 5, 10, 8];
let largerNumber = arr[0];

for(let i = 0; i <= arr.length; i++){
    // arr[0] = 1 , 1 > 1 , store larger number = 1
    // arr[1] = 2 , 2 > 1  store larger number = 2
    // arr[2] = 7 , 7 > 2 store larger number = 7
    // arr[3] = 4 , 4 > 7 , false
    // arr[4] = 5 , 5 > 7, false
    
    if(arr[i] > largerNumber){
        largerNumber = arr[i]
    }
}
// console.log(largerNumber);

let shortNumber = arr[0]
for (let i = 0; i < arr.length; i++) {
    // arr[0] = 6, 6 < 2
    // arr[1] = 2, 2 < 2
    // arr[2] = 7, 7 < 2
    // arr[3] = 4, 4 < 2

    if(arr[i] < shortNumber){
        shortNumber = arr[i]
    }    
}
// console.log(shortNumber);

// let arr = [6, 2, 7, 4, 5, 10];
// last second largest
let largestNumber = arr[0]
let secondLargestNumber = arr[0];
for (let i = 0; i < arr.length; i++) {

    if(arr[i] > largestNumber){
        secondLargestNumber = largestNumber
        largestNumber = arr[i]
    } else if(arr[i] > secondLargestNumber){
        secondLargestNumber = arr[i]
    }
    
}
console.log(largestNumber);
console.log(secondLargestNumber);

