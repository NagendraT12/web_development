const arry = [1,2,3,4,5,6,7,8,9,10];

const target = 77;
const l = arry.length;



function linersearch(arr,target){for(let i=0; i<l; i++){
    if(arry[i]== target){
        console.log(i);
        break;
        
    }
}  return "not found";
}

const result = linersearch(arry,target);
console.log(result);    