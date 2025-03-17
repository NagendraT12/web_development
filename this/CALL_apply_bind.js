const user ={

    name:"Nagendra",    
    age:"23",
    marks:"90",
    saymarks: function(){

        console.log(this.marks);
}
}
user.saymarks();



const user2 ={

    name:"Ravi",    
    age:"23",
    marks:"90100",
}    
user.saymarks.call(user2);

