const ages =[ 25,44,55,88,1,12,15,44];


const  adult = ages.every(x => x >=18);
console.log(adult);


///even one element is ok than tru 

const aged = ages.some(x => x > 18);
console.log(aged);