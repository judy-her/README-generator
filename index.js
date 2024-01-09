// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { writeFile } = require('fs').promises;

//used writeFileSync method
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    { name: 'title', type: 'input', message: 'What is your Project Title?' },
    {
      name: 'description',
      type: 'input',
      message:
        'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:- What was your motivation?-Why did you build this project?-What problem does it solve?-What did you learn?-What is your  name?',
    },
    {
      name: 'license',
      type: 'list',
      message: 'What is the license you are using?',
      choices: ['apache', 'mit', 'gpl', 'lgpl', 'none'],
    },
    {
      name: 'gitHub',
      type: 'input',
      message: 'What is your GitHub user name?',
    },
    { name: 'email', type: 'input', message: 'What is your email? ' },
    // {
    //   name: 'description',
    //   type: 'input',
    //   message:
    //     'Please Write a short descriptions of explaining the who, what, how of your project. Here are some  questions to guide you..1)What was your motivation? 2)Why did you build this project? 3)What problem does it solve? 4)What did you learn?',
    // },
  ]);
};
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
// const init = () => {
//   //call questions function here
//   //call writeToFile function here
//   const answers = await questions();
//   writeToFile(answers.fileName, answers.data);
// }

// Function call to initialize app

// console.log(questions);

//IMPORTANT
//this is following professors bonus

const init = () => {
  questions()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Readme succesfully written'))
    .catch((err) => console.log(err));
};

init();
