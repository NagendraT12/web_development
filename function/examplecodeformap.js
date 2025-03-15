const user =  [
    { name: "Nagendra", age: "23", marks: "90" },
    { name: "Ravi", age: "23", marks: "90" }
];

let y = user.map(x => x.name); // Corrected from `user.name` to `x.name`
let z = user.map(a => a.age);
console.log(y);
console.log(z);