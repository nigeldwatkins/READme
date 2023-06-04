// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer =require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose and functionality of this project?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license is applicable to this project?",
        choices: ["none", "MIT", "ISC", "zLib", "ofl-1.1", "ncsa"],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What dependencies was used for this project?",
    },
    {
        type: "input",
        name: "technologies",
        message: "What languages or technologies used for this project?",
    },
    {
        type: "input",
        name: "author",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "full name",
        message: "Provide your full name",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address",
    },
    {
        type: "input",
        name: "contributors",
        message: "List any contributors for this project",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of test if any were used.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
