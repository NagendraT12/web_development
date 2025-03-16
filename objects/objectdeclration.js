const users = {
    user1: { name: "Nagendra", age: 23, marks: 90, userid: 1 },
    user2: { name: "Ravi", age: 23, marks: 80, userid: 2 },
    user3: { name: "Akash", age: 23, marks: 85, userid: 3 },
    user4: { name: "Harry", age: 23, marks: 90, userid: 4 },
    user5: { name: "Sam", age: 22, marks: 95, userid: 5 },
    user6: { name: "John", age: 24, marks: 70, userid: 6 },
    user7: { name: "David", age: 21, marks: 88, userid: 7 },
    user8: { name: "Emma", age: 23, marks: 92, userid: 8 },
    user9: { name: "Sophia", age: 22, marks: 75, userid: 9 },
    user10: { name: "Liam", age: 23, marks: 98, userid: 10 },

    get90marksstudents: function () {  
        for (let key in this) {
            if (this[key].marks !== undefined) {  
                if (this[key].marks >= 90) {
                    console.log(this[key].name, this[key].userid, "is a good student and will go to the next class.");
                } else {
                    console.log(this[key].name, this[key].userid, "is not a good student and will not go to the next class.");
                }
            }
        }
    },

    superuser: function(){
        for(let key in this){
            if (this[key].userid !== undefined) {  
                if (this[key].userid <= 2) {
                    console.log(this[key].name, this[key].userid, "user is a super user");
                } else {
                    console.log(this[key].name, this[key].userid, "user is not a super user");
                }
            }
        }
    },

    agecheck : function(){
        for(let key in this){
            if(this[key].age !== undefined){
                if(this[key].age >= 18){
                    console.log(this[key].name, this[key].age, "is an adult");
                }else{
                    console.log(this[key].name, this[key].age, "is not an adult");
                }
            }
        }
    },

    namesofallstudents: function(){
        console.log("List of all students:");
        for(let key in this){
            if(typeof this[key] === "object" && this[key].name !== undefined){
                console.log(this[key].name);           
            }
        }
    }
};

// ✅ Call the functions
users.get90marksstudents();
users.superuser();
users.agecheck();
//users.namesofallstudents();



function allnames(namesss){
    console.log(users[namesss]);
    
}

allnames("names");