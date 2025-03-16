const user= {
    nagendra:{
        hight:"6ft",
        weight:"80kg",
        age:"23"
    },
    ravi:{    
        hight:"6ft",
        weight:"80kg",
        age:"23"
    },
    alluserhight :function(){
        for(let key in user){
            if(user[key].hight !== undefined){
                console.log(user[key].hight);
            }
        }
    }

}

user["nagendra"]["hight"] = "7ft";// using square bracket
user.nagendra.hight = "6feet";//   using dot    
user.ravi.age= "34";
console.log("new age",user.ravi.age,user.ravi.hight);
user.nagendra.hobbies = ["cricket"];// adding element or propertyin object
console.log(user.nagendra.hobbies);

user.agess = function(){                           //adding function    
    console.log("hiiiiiiiiiiiiiiiii");
}



user.alluserhight();

user.agess();
