const obj = {
    x: 10,
    z: function () {  // Regular function inside obj
        console.log(this);  // (1) Logs the `obj` object
        
        const y = () => {   // Arrow function
            console.log(this);  // (2) Arrow function doesn't have `this`, so it inherits from `z`
        }
        
        y();  // Call the arrow function
    }
};

obj.z();  // Call the function `z`
