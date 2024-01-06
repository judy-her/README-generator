// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//questions were from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
// TODO: Create an array of questions for user input
const questions = () =>
  inquirer.prompt([
    { title: 'title', type: 'input', message: 'What is your Project Title?' },
    { name: 'name', type: 'input', message: 'What is your GitHub user name?' },
    { email: 'email', type: 'input', message: 'What is your email? ' },
    {
      description: 'description',
      type: 'input',
      message:
        'Please Write a short descriptions of explaining the who, what, how of your project. Here are some  questions to guide you..1)What was your motivation? 2)Why did you build this project? 3)What problem does it solve? 4)What did you learn?',
    },
  ]);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File Created Sucessfully');
//     }
//   });
// }

// // TODO: Create a function to initialize app
// async function init() {
//   //call questions function here
//   //call writeToFile function here
//   const answers = await questions();
//   writeToFile(answers.fileName, answers.data);
// }

// // Function call to initialize app
// init();

console.log(questions);
