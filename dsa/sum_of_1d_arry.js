const nums= [1,2,3,4,1111];

// const ans = new Array(nums.length).fill(0);
// console.log(ans);


// for(let i=0; i<nums.length; i++){
//     for(let j=0; j<=i; j++){
//         ans[i]=ans[i]+nums[j];
       


//     }
// }
// console.log(ans);

// // time complexity O(n^2)

// batern method

const arr = new Array(nums.length);
arr[0]= nums[0];


for(let i=1; i<nums.length; i++){
    arr[i]=arr[i-1]+nums[i];

}
console.log(arr);


/// time complexity O(n)