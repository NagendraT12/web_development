// if
let age = 18;

if (age >= 18){
    console.log("You are adult");
}


//if-else 

if(age >= 22) {
    console.log("You can drink a beer");
}else {
    console.log("You can drink a fanta");
}

//else-if
// print grade of students , marks >90 -->'A', marks<=90 --->'B' 
//marks > 70 and marks <= 80 -->'C' and  below this ---> fail

let marks =96;

if(marks > 90){
    grads = 'A';
} else if (marks > 80 && marks <= 90){
    grads = 'B';
} else if (marks > 70 && marks <= 80){
    grads = 'C';
}else{
    grads = 'fail';
}


console.log("Your grade is ",grads);


