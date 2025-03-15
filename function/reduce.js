const  arr = [1,2,3,4,5,6,7,8,9];
let sum =0;

// tridistional approach 


/*for(let i = 0; i<arr.length; i++){
    sum = sum + arr[i];
    console.log(sum);
}*/

// using reduce method 

const result = arr.reduce((acc, curr)=> acc + curr);
console.log(result);


// maxium element in arry 
const arr1 = [10, 50, 25, 70, 40];

const maxVal = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, arr[0]); // Initial value is the first element of the array

console.log(maxVal); // Output: 70



    

