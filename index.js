const inquirer = require("inquirer");
const employee = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const managerAnswers = () => {
    return inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:"What is the manager's name?"
    },
    {
        type:"input",
        name: 'id',
        message: "What is the manager's Id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manger's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
    ])

    .then((managerAnswers) => {
        //push the data
        const manager = new Manager(managerAnswers.name, managerAnswers.email, managerAnswers.id, managerAnswers.officeNumber);
        employee.push(manager);
        console.log(employee)
        menuOptions();
        
    })
};

const menuOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What employee do you want to add next?',
            choices: ['Engineer', 'Intern', 'I am done! Build my team.']
        

        }
    ])
    .then((menuAnswer) => {
        if (menuAnswer.role === 'Engineer') {
            EngineerPrompts();
                    
        } else  if (menuAnswer.role === 'Intern') {
            InternPrompts();
        } else {
            console.log(employee)
            //render the site 
    }
    })
    
};

const EngineerPrompts = () => {
    return inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:"What is the engineer's name?"
    },
    {
        type:"input",
        name: 'id',
        message: "What is the engineer's Id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    }
    ])

    .then((engineerAnswers) => {
        //push the data
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.email, engineerAnswers.id, engineerAnswers.github);
        employee.push(engineer);
        console.log(engineer)
        menuOptions();
    })
};

const InternPrompts = () => {
    return inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:"What is the intern's name?"
    },
    {
        type:"input",
        name: 'id',
        message: "What is the intern's Id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    }
    ])

    .then((internAnswers) => {
        //push the data
        const intern = new Intern(internAnswers.name, internAnswers.email, internAnswers.id, internAnswers.school);
        employee.push(intern);
        console.log(intern)
        menuOptions();
    })
};


    



  



// const engineerInfo = () => {
//     return inquirer.prompt ([
//         {
//             type:'input',
//             name:'name',
//             message:"What is the engineer's name?"
//         },
//         {
//             type:"input",
//             name: 'id',
//             message: "What is the engineer's Id number?"
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the engineer's email address?"
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: "What is the engineer's GitHub username?"
//         },
//         {
//             type:'list',
//             name: 'role',
//             message: 'What teammate would you like to add next?',
//             choice: ['Intern', 'I am done! Build myteam.']
//         }
// ])
// }
managerAnswers();

//finish



