// constructer-- it does not return and start with capital
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk=function(){
//     console.log(`hi! my name is ${this.name}`);
// }

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hi! my name is ${this.name}`);
//     }
// }

// let p1=new Person("ayush",19);
// let p2=new Person("akash",18);

// inheritance

class School{
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    eight(){
        console.log("i am student of class 8th");
    }
}
class Rahul extends School{
    constructor(name,location){
        super(name,location);
    }
    seven(){
        console.log("i am student of class 7th");
    }
}
class Mohit extends School{
    constructor(name,location){
        super(name,location);
        
    }
    six(){
      console.log("i am student of class 6th");
    }
    
}
