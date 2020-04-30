const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

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
            writeToFile("README.md", generateMarkdown({...response, ...data}));
            
        });
    }
    )};

init();
