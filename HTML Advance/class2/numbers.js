const num1 = 20,
      num2 = 10,
      num3 = "10";
//doing math calculations
// console.log("addition:",num1+ num2); //30
// console.log("adding number and string:",num1+num3); //2010
//change string variable into numbers variable
//console.log("adding number and string(changed to numbers):", num1+parseInt(num3));
//change any variable into float(numbers with decimals):parseFloat(variable);
// console.log("subtraction:",num1 - num2);
// console.log("multiplication:",num1*num2);
// console.log("division:",num1/num2);
//find remainder
//console.log("remainder:",10%3);
//when doing calculation that cannot be calculate the console will return NaN(Not a numeber);
//you can also use isNaN() function to find out if the calculation that your doing will return NaN or not
//when divide a number by 0 it will return infinity
//console.log(10/0);
//Arithmetic operators: +=, -=, *=, /=, %=
let card = 50;
//add money into the account
card += 100;
//using the money in the card
card -= 15;
console.log(`the money in the card: $${card} NTD`);