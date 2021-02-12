const inquirer = require("inquirer");
const employee = [];
const Manager = require('./lib/Manager');

inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:"What is the team manager's name?"
    },
    {
        type:"input",
        name: 'id',
        message: "What is the manager's Id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)

        employee.push(manager)
        console.log(employee);


    })



//menu option for engineer, intern, or finish

//prompts for engineer information

//menu option

//prompts for intern

//finish



