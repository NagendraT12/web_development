const target = 78;

const arr =[1,4,8,55,44,44,8,78];

let l = arr.length;

const result = linersearch(arr,target);


function linersearch(arr,target){
    for(let i=0; i<l; i++){
        if(arr[i]== target){
        return i;
        break;

        }
    }return "not found";
}

console.log(result);

/// time complexity O(n) for avrage caseand worst case O(n)
// o(1) for best case

// space complexity O(1)    
  

