const arr = [
    { name: "Alice A", age: 25, marks: 85 },
    { name: "Bob B", age: 22, marks: 58 },
    { name: "Charlie C", age: 30, marks: 92 },
    { name: "David D", age: 28, marks: 5 },
    { name: "Emma E", age: 26, marks: 9 },
    { name: "Frank F", age: 24, marks: 76 },
    { name: "Grace G", age: 27, marks: 8 },
    { name: "Hannah H", age: 23, marks: 9 },
    { name: "Isaac I", age: 29, marks: 94 },
    { name: "Jack J", age: 21, marks: 2 }
];


const updatedmarks = arr.map(x => {

    if(x.marks<60){
        x.marks += 20;

    }
    return x;
});
console.log(updatedmarks);

const grethan60n =  updatedmarks.filter(x=>x.marks>60);
console.log(grethan60n);

const last = grethan60n.reduce(function(acc, curr){

    acc=acc+curr.marks;
    return acc;
},0) 
console.log(last);



