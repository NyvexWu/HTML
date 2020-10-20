// if you call this in main, not in any object the chrome default this will show up
// console.log("this outside of the object that you creates", this);

// const user1 = {
//     name: "kevin",
//     age: 30,
//     // Other than the normal variables, function can also be an object
//     intro: function(greeting){
//         // when calling the variable inside the object you need to use *this.variableName to get the variable from this object
//         // this prefix infers that the variable is in this object
//         if(greeting == null || greeting == "")
//         {
//             greeting = "Hello"
//         }
//         console.log(`${greeting} my name is ${this.name}. I'm ${this.age} years old`);
//     }
// };

function user(inputName, inputAge){
    this.name = inputName;
    this.age = inputAge;
    this.intro = function(){
        console.log(`Hello! My name is ${this.name}; I'm ${this.age} years old.`);
    }
    this.haveBirthday = function(){
        this.age += 1;
        console.log(`After the birthday, ${this.name} is now ${this.age} years old`);
    }
}

const user2 = new user("Kevin", 19);
//console.log("user2:", user2);

const user3 = new user("Will", 18);
//console.log("user3:", user3);

user2.intro();
user2.haveBirthday();
user3.intro();
user3.haveBirthday();
// user1.intro("wassup!");
// user1.intro();