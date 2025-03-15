function foo() {
    var x = 56;
    
    function bar() {
        var y = 30;
        console.log(a); 
        console.log(b);// Trying to access 'a'
        console.log(c);
    }

    bar();
}

var a = 23;
let b = 23;
const c = 23;
foo();
