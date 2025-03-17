class costemers{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log("hello",this.name);
    }
}

const user1=new costemers("nagendra",23);
user1.greet();
const user2=new costemers("ravi",23);   
user2.greet();



class superuser extends costemers{
    constructor(name,age,viplevel){
        super(name,age);
        this.viplevel=viplevel;
}

    vip(level){
        this.viplevel =  level;
        console.log(this.viplevel);

    }

}


const vipuser1 = new superuser("nagendra",23);
vipuser1.vip("platinum");
vipuser1.greet();