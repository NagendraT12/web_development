var x =10;
//let y = 200;
{
    var x = 100;
    let y = 20;
    const z =30;
    console.log(x);//shadowing
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);// we cant acces bcz y is let and let is block scope inside { }we can access only inside 