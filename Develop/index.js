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
        message: 'Please provide step-by-step installation unstructions for your project. (Required)',
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
        message: 'Please provide instruction on how to text the application.(Required)',
        validate: testInput => {
            if (testInput){
                return true;
            }else{
                console.log('Please provide test intrustions.');
                return false;
            }
        } 
    },

];

// Function to write README file
function writeToFile(fileName, data) {
    let contect =generateMarkdown(data);
    fs.writeFile(fileName, content, function (error){
        if (error){
            return console.log(error)
        }
        console.log('success')
    });
}

// Function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(data){
        const fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return fs.writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
