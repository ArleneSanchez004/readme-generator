const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

//get user input
const questions = [
        {
            name: "gitName",
            type: "input",
            message: "Enter your GitHub username."
        },
        {
            name: "title",
            type: "input",
            message: "Enter your project title."
        },
        {
            name: "description",
            type: "input",
            message: "Write a description of your project."
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email."
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
          },
          {
            name: "installation",
            type: "input",
            message: "What command installs the dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            name: "usage",
            type: "input",
            message: "What should the user know about using this repo?"
        },
        {
            name: "contributing",
            type: "input",
            message: "What should the user know about contributing to this repo?"
        }
    ];
    
    // axios
    //     .getUser("https://api.github.com/users/${gitName}/repos?perpage=100")
    //     .then(function(response){
    //         console.log(response.data);
    //     });

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
    inquirer.prompt(questions).then(response => {
        console.log("start");
        api
        .getUser(response.gitName)
        .then(({ data })=>{
            console.log(data);
            
            writeToFile("README.MD", generateMarkdown({...response, ...data}));
            
        });
    }
    )};

init();
