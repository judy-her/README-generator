// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { writeFile } = require('fs').promises;

//used writeFileSync method
const questions = () => {
  return inquirer.prompt([
    { name: 'title', type: 'input', message: 'What is your Project Title?' },
    {
      name: 'description',
      type: 'input',
      message:
        'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:- What was your motivation?-Why did you build this project?-What problem does it solve?',
    },
    {
      name: 'usage',
      type: 'input',
      message:
        'Usage: How should your application work? Provide instructions for use:  ',
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
    {
      name: 'installation',
      type: 'input',
      message: 'How should you install?',
      default: '```npm i```',
    },
    {
      name: 'test',
      type: 'input',
      message: 'How should you test?',
      default: '```npm test```',
    },
    { name: 'name', type: 'input', message: 'What is your name? ' },
    { name: 'email', type: 'input', message: 'What is your email? ' },
  ]);
};

//write file and include a catch for an error
const init = () => {
  questions()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Readme succesfully written'))
    .catch((err) => console.log(err));
};

init();
