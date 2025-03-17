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

printname.call(user1,"oreng");
printname.call(user2,"red");