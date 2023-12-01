// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
      return ' ';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='No License') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:

    ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

//Function to return message if the user does not want contributors 
function renderContributingSection(confirmContributers, data) {
  if(!confirmContributers) {
    return 'Thank you for you interest in my project but I will not be accepting any comtributions at the moment';
  } else {
    return `${data}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
