//use console.log or alert to make sure your program is working
console.log("program started");
//gather the information from the form, input box, and result
const form = document.getElementById("introForm");
const input = document.getElementById("nameInput");
const result = document.getElementById("result");
console.log("form: ",form);
console.log("name: ", input);
console.log("result: ", result);
//track the time when the form is sent
form.addEventListener("submit", function(e){
    //prevent form from resetting
    e.preventDefault();
    console.log("form sent");
    //get input variable
    const name  = input.value;
    //make a string
    const output = `Hello! my name is ${name}.`; 
    console.log("output: ", output);
    //output the string onto result tag
    result.innerText =output; 
    result.style.color = "red"; 
});
