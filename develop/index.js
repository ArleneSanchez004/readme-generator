const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

//get user input
const questions = [
        {
            name: "name",
            type: "input",
            message: "Enter your name."
        },
        {
            name: "gitName",
            type: "input",
            message: "Enter your GitHub username."
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email."
        }
    ];
    
    // axios
    //     .getUser("https://api.github.com/users/${gitName}/repos?perpage=100")
    //     .then(function(response){
    //         console.log(response.data);
    //     });

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

function init() {
    inquirer.prompt(questions).then(response => {
        api
        .getUser(response.gitName)
        .then(({ data })=>{
            writeToFile("README.MD", generateMarkdown({...response, ...data}));
            
        });
    }
    )};

init();
