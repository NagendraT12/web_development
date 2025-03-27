const arr =[1,2,3,4,5,6,7,8,9,10];

const target = 7;


function binarysearch(arr,target){
    let start =0;
    let end = arr.length-1;

    while(start<=end){
        let mid = start +Math.floor((end-start)/2);
        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid]< target){
            start = mid+1;
        }else
        {
            end = mid-1;
        }

}
return -1;
}


const result= binarysearch(arr,target);

console.log(result);    

(result == -1)? console.log("not found"):console.log("found");


console.log(arr[result]);


// time complexity O(logn)  
/// space complexity O(1)   