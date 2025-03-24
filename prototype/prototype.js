// EVERY js object has a special prooperty attached to it which is called prototype
// prototype chain 

// Parent object with properties and a method
const parent = {
    a: 10,
    b: 20,
    sum: function () {
        console.log(this.a + this.b);
    }
};

// Child object with its own properties and a method
const child = {
    c: 20,
    d: 30,
    multiply: function () {
        console.log(this.c * this.d);
    }
};

// Setting the parent object as the prototype of the child
child.__proto__ = parent;

// Calling the child's own method
child.multiply();  // Output: 600 (20 * 30)

// Calling the parent's method from the child
child.sum();  // Output: 30 (10 + 20 from parent)

// Accessing parent's properties from the child
console.log(child.a);  // Output: 10
console.log(child.b);  // Output: 20
