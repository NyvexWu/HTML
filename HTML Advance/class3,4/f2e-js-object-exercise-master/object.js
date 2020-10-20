// describe an user
const user1 = {
    //assign elements
    //elementName: value
    name: "Kevin",
    age: 19,
    phone: "0912-345-678",
    isAdmin: false,
    address: {
        city: "San Diego",
        State: "CA",
        street: "East San Raphael Drive",
        number: "11365",
        postalCode: "92130"
    },
    print: function(){
        console.log("Hello my name is " + this.name + " and I'm " + this.age + " years old. My address is " + this.address.number + " " + this.address.street + " " + this.address.city + ", " + this.address.state + "" + this.address.state + " " + this.address.postalCode)
    }
};
console.log("user1:" , user1);
// console.log(typeof user1);
// console.log("street name:", user1.address.street);
// user1.print();
// to change up the variables inside the object
// you simply just set the objectName.variableName = whatever your want
// user1.name  = "Jack";
// to add a new element into the oject you can just simply create a object and the variable name and set whatever to it
// user1.email = "123@gmail.com";
// console.log("user1;" , user1);
// another way to add or change up the variable inside the object
// you can do user1["age"] = 20;
/* 
   in certain situation we will need to use this to store our variable inside the object
   if we want to set the variable name by using another variable
   for example,
        const variableName = "age";
        user1[variableName] = 11;
    *this way we allow us to use variable as a name
   A wrong example,
        const variableName = "age";
        user1.variableName = 11;
    *this way the program will return errors, since variable name is a string
      so what computer read is user1."age"  =11;
      so it doesnt work
*/
// to remove a element inside the object
// delete user1.name;
// const variableName = "age";
// user1[variableName] = 11;
// console.log("user1:", user1);
// delete user1.name;
// console.log("user1:", user1);
const h1 = document.getElementById("headline");
console.log(h1);
h1.addEventListener("mousedown", function(){
    h1.style.color = "red";
    h1.innerText = "hello";
})
h1.addEventListener("mouseup", function(){
    h1.style.color = "black";
    h1.innerText = "物件";
})