#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter your first number", 
  type: "number", 
  name: "first_number" 
  },
  {
    message: "Enter your second number",
    type: "number",
    name: "second_number",
  },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);
let {first_number, second_number, operator} = answer;
let result
switch (operator) {
    case "+":
        result = first_number + second_number;
        break;

    case "-":
        result = first_number - second_number;
        break;
    case "*":
        result = first_number * second_number;
        break;
    case "/":
        result = first_number / second_number;
        break;
        default:
            console.log("Invalid operator");
}
console.log(`${first_number} ${operator} ${second_number} = ${result}`);

