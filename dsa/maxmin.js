const arr = [0,5,8,5,6,7,2,55,75,25,84,55,66];
let max= arr[0];
let min = arr[0];


for(let i = 0; i<arr.length; i++){

    if(arr[i]>max){

        max = arr[i];
    }

    if(arr[i]<min){
        min = arr[i];
    }


}


console.log(max,min);