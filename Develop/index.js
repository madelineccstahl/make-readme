// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
var questions = [
  {
    question: "What was the motivation for your project?",
    inputOne: ""
  },
  {
    question: "Why did you build this project?",
    inputTwo: ""
  },
  {
    question: "What can your project accomplish?",
    inputThree: ""
  },
  {
    question: "What did you learn from building this project?",
    inputFour: ""
  },
  {
    question: "Installation steps?",
    inputFive: ""
  },
  {
    question: "Usage examples and instruction?",
    inputSix: ""
  },
  {
    question: "Credits?",
    inputSeven: ""
  }
];

//define object w/in array
const pickLicense = {
  type: 'checkbox',
  name: 'license',
  choices: ["MIT", "GPLv3", "GPL"],
  message: 'Pick your license, please.'
}

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}
// return fs.writeFile()

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
  ])

  .then(data => {
    console.log(data.username);
    //where write to file function would go
    writeToFile('README', markDown(data));
  })
}

// Function call to initialize app
init();

//want to save file



