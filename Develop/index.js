//Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


//Array of questions for user input 
//(title, github username, description, installation instructions, usage information, contribution guidelines, test instructions,license, email)
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log('Please enter your title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput){
                return true;
            }else{
                console.log('Please enter your username.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput){
                return true;
            }else{
                console.log('Please enter your email address.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project and what problem will it solve? (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            }else{
                console.log('Please enter your projects description.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?(Required)',
        validate: whyInput => {
            if (whyInput){
                return true;
            }else{
                console.log('Please enter why you created this project.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this? (Required)',
        validate: howInput => {
            if (howInput){
                return true;
            }else{
                console.log('Please enter how someone will use your project.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: installInput => {
            if (installInput){
                return true;
            }else{
                console.log('Please provide your installation instructions.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage. (Required)',
        validate:  usageInput => {
            if (usageInput){
                return true;
            }else{
                console.log('Please provide usage instructions.');
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for this project?',
        choices: ['GPL',
         'APACHE',
         'MIT',
         'No License']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message:'Would you like to allow other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contrubute',
        message: 'Please provide contribution guidelines.(Required)',
        when: ({confirmContributers}) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributeInput=> {
            if (contributeInput){
                return true;
            }else{
                console.log('Please provide contribution guidelines.');
                return false;
            }
        } 
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instruction on how to test the application.(Required)',
        validate: testInput => {
            if (testInput){
                return true;
            }else{
                console.log('Please provide test intrustions.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?(Required)',
        validate: authorInput => {
            if (authorInput){
                return true;
            }else{
                console.log('Please provide your name.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'URL',
        message: 'Please provide the URL of the live site(Required)',
        validate: urlInput => {
            if (urlInput){
                return true;
            }else{
                console.log('Please provide URL.');
                return false;
            }
        } 
    }

];

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})