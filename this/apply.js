const user1 = {
    name: "Nagendra",
    age: 23,
    marks: 90,
    userid: 1,
  

}

const user2 = {
    name: "Ravi",
    age: 23,
    marks: 80,
    userid: 2,
  
}

let printname = function(color){    ///now this function is outside of an object now we can acces it using call foer both thy object
    console.log(this.name,color); 
}

//printname.call(user1,"oreng");
//printname.call(user2,"red");

printname.apply(user1,["oreng"]);
printname.apply(user2,["red"]);// same as an call but we writ parmiters in side an array


const  print = printname.bind(user1);// here bined keep an copy of function return and wan ever we want this will give us 
console.log(print);
print();