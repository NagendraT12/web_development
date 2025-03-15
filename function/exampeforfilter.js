const arr = [
    { name: "Alice A", age: 25, marks: 85 },
    { name: "Bob B", age: 22, marks: 78 },
    { name: "Charlie C", age: 30, marks: 92 },
    { name: "David D", age: 28, marks: 88 },
    { name: "Emma E", age: 26, marks: 90 },
    { name: "Frank F", age: 24, marks: 76 },
    { name: "Grace G", age: 27, marks: 81 },
    { name: "Hannah H", age: 23, marks: 89 },
    { name: "Isaac I", age: 29, marks: 94 },
    { name: "Jack J", age: 21, marks: 72 }
];


const result = arr.filter(X=>X.marks>90);
console.log("THIS STUDENTS ARE GOOD ",result);