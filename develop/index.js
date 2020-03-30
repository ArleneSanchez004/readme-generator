var inquirer = require("inquirer");
var fs = require("fs");

const questions = [
    inquirer.prompt([
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
        },

    ])//.then
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
