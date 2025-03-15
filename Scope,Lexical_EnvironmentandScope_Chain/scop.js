function foo(){
    var x =10;
    console.log(x);
    // console.log(y); we cant access y here
    function bar(){
        var y =20;
        // console.log(x); but we can access x here
        console.log(y);
    }
    bar();
}

foo();
