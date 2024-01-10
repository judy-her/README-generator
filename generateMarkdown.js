// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  }
  if (license === 'mit') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  }
  if (license === 'gpl') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  }
  if (license === 'lgpl') {
    return 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
  } else {
    return ' ';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === 'mit') {
    return 'https://opensource.org/licenses/MIT';
  }
  if (license === 'gpl') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license === 'lgpl') {
    return 'https://www.gnu.org/licenses/lgpl-3.0)';
  } else {
    return ' ';
  }
}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
let licenseBadge;
let licenseLink;
function renderLicenseSection(license) {
  if (license) {
    licenseBadge = renderLicenseBadge(license);
    licenseLink = renderLicenseLink(license);
    return `## License
   This project is licensed under the [${license}](${licenseLink}) license.
   ![License](${licenseBadge})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  description,
  gitHub,
  email,
  name,
  license,
  installation,
  usage,
  test,
}) => {
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  return `# ${title}
  ![License](${licenseBadge})
  
## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To Install necessary dependencies, make sure to run the following command:
${installation}


## Usage
${usage}

Don't forget to add a screenshot by creating  assets/images and use the following syntax: 
    ![alt text](assets/images/screenshot.png)
    
${licenseSection}

## Contributing

If you would like to contribute, you can find this repo at [${gitHub}](https://github.com/${gitHub})

## Tests

To run tests, run the following command:
${test}

## Questions

For questions about the repo, feel free to email me ${name} at ${email}

`;
};
module.exports = generateMarkdown;
