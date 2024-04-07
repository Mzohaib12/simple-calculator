#! /usr/bin/env node

import inquirer from "inquirer"

const answer= await inquirer.prompt([

    {message: "enter first number", type: "number", name:"firsNumber"},
    {message: "enter second number", type: "number", name:"SecondNumber"},
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