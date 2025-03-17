class user{
    constructor(name,age,marks,userid){
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.userid = userid;
        
    }
    greet(){
        console.log("hello",this.name);
    }

}
// using class we can create more numbers of object
const user1 = new user("Nagendra",23,90,1);
const user2 = new user("Ravi",23,80,2);
const user3 = new user("Akash",23,85,3);
const user4 = new user("Harry",23,90,4);
const user5 = new user("Sam",22,95,5);
const user6 = new user("John",24,70,6);
const user7 = new user("David",21,88,7);
const user8 = new user("Emma",23,92,8);
const user9 = new user("Sophia",22,75,9);
const user10 = new user("Liam",23,98,10);
user1.greet();
user2.greet();  
user3.greet();  
user4.greet();
 


console.log(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);