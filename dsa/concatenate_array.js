const arr=[1,2,3];

let j = arr.length;

// out put [1,2,3,1,2,3]

for(let i=0;i<j; i++){

    arr[j+i]=arr[i];

       
}
console.log(arr);

// complaxity of this code time complexity is O(n) space complexity is O(n)