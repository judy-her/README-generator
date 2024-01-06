// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let apache;
  if (license === apache) {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg'";
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let apache;
  if (license === apache) {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  return ' ';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `## License
   This project is licensed under the [${license}](${licenseLink}) license.
   ![License](${licenseBadge})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
