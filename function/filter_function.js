const arr = [ 1,2,3,4,5,6,7,8,9,10,11,12];


const result = arr.filter(x => x%2 ==0);
console.log(result);

function even(x){

    return x%2 ==0;

}

const f = arr.map(even);//even is call back function 

console.log(f);

const q = arr.filter(w=> w >5);

console.log(q);
