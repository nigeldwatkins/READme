// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer =require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");


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
        type: "input",
        name: "license",
        message: "Which license is applicable to this project?",
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
        name: "name",
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
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating a Professional README.md File. . .");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
