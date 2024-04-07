#! /usr/bin/env node

import inquirer from "inquirer"

const answer= await inquirer.prompt([

    {message: "enter your first number", type: "number", name:"firsNumber"},
    {message: "enteryour second number", type: "number", name:"SecondNumber"},
    {message: "select operator",
        type:"list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"]
    }
])

if(answer.operator === "addition"){
    console.log(answer.firsNumber + answer.SecondNumber)
}

else if(answer.operator === "substraction"){
    console.log(answer.firsNumber - answer.SecondNumber)
}
else if(answer.operator === "multiplication"){
    console.log(answer.firsNumber * answer.SecondNumber)
}
else if(answer.operator === "division"){
    console.log(answer.firsNumber / answer.SecondNumber)
}
else{
    console.log("select a valid operation")
}

console.log("Thanks for using this calculator hopefully you find it useful")