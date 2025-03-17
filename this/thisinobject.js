// this keyword in object's method points to object itself
// wher as this.propaty is ref to to property of object
const user = {
    name: "Nagendra",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user.greet();