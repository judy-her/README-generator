// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () =>
  inquirer.prompt([{ name: 'name', type: 'input', message: '' }]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File Created Sucessfully');
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  //call questions function here
  //call writeToFile function here
  const answers = await questions();
  writeToFile(answers.fileName, answers.data);
}

// Function call to initialize app
init();
