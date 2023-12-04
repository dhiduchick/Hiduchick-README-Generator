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

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

  ## Table of Contents
  * [Description] (#description)
  * [Installation](#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Test] (#test)
  * [Contributing] (#contributing)
  * [Questions] (#questions)
  * [Author] (#author)
  
  ## Description
  ${data.description}
  ${data.why}
  ${data.how}

  ##Installation 
  To install the project run the following steps.
  ${data.install}

  The live like to the appplication is ${data.url}

  ##Usage
  ${data.usage}

  ##License
  This projected is under the ${data.license} license.

  ##Test
  To execute test on this project follows these steps 
  ${data.test}

  ##Contributing
  These are the guidelines when it comes to contributing to this repo.
  ${data.contribute}

  ##Questions
  If you have any questions about this repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).

  ##Author
  This repo was created with love by ${data.author}
`;
}

module.exports = generateMarkdown;
