// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === 'apache') {
//     return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
//   }
//   if (license === 'mit') {
//     return 'https://img.shields.io/badge/License-MIT-yellow.svg';
//   }
//   if (license === 'gpl') {
//     return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
//   }
//   if (license === 'lgpl') {
//     return 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
//   } else {
//     return ' ';
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'apache') {
//     return 'https://opensource.org/licenses/Apache-2.0';
//   }
//   if (license === 'mit') {
//     return 'https://opensource.org/licenses/MIT';
//   }
//   if (license === 'gpl') {
//     return 'https://www.gnu.org/licenses/gpl-3.0';
//   }
//   if (license === 'lgpl') {
//     return 'https://www.gnu.org/licenses/lgpl-3.0)';
//   } else {
//     return ' ';
//   }
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     const licenseBadge = renderLicenseBadge(license);
//     const licenseLink = renderLicenseLink(license);
//     return `## License
//    This project is licensed under the [${license}](${licenseLink}) license.
//    ![License](${licenseBadge})`;
//   } else {
//     return ' ';
//   }
// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, gitHub, email, name }) =>
  `# ${title}
  
  ## Description
 ${gitHub}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${email}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
what is your  name? ${name}
`;

module.exports = generateMarkdown;
