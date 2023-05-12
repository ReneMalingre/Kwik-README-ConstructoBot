// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const readmeConstructor = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
let questions = []
function constructQuestions (licenses) {
  const licenseChoices = [...licenses, 'None']
  console.log(licenseChoices)
  questions = [
    {
      type: 'input',
      name: 'gitHubUserName',
      message: 'What is your GitHub Username?',
      validate: nonBlankValidator
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'What is your email address?',
      validate: emailValidator
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is your project's name?",
      validate: nonBlankValidator
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please write a short description of your project:',
      validate: nonBlankValidator
    },
    {
      type: 'list',
      name: 'licenseType',
      message: 'What kind of license should your project have?',
      choices: licenseChoices,
      validate: ''
    },
    {
      type: 'input',
      name: 'installCommand',
      message: 'What command should be run to install dependencies?',
      validate: nonBlankValidator
    },
    {
      type: 'input',
      name: 'testCommand',
      message: 'What command should be run to run tests?',
      validate: nonBlankValidator
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
      validate: nonBlankValidator
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
      validate: nonBlankValidator
    }
  ]
}

function nonBlankValidator (value) {
  if (value.trim().length > 0) {
    return true
  } else {
    return 'Please enter a non-blank value.'
  }
}

function emailValidator (value) {
  // Email regular expression from the HTML5 specification
  // https://html5-tutorial.net/form-validation/validating-email/
  const emailRegexPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (emailRegexPattern.test(value.trim())) {
    return true
  } else {
    return 'Please enter a valid email address.'
  }
}

async function askQuestions () {
  let answers = {}
  for (const question of questions) {
    const answer = await inquirer.prompt([question])
    answers = { ...answers, ...answer }
  }
  return answers
}

// TODO: Create a function to write README file
function writeToFile (data) {
  // generate markdown
  const markDown = readmeConstructor.generateMarkdown(data)
  // write to file
  const fileName = './readme-file/README.md'
  fs.writeFileSync(fileName, markDown, (err) => {
    err ? console.error(err) : console.log('The README.md has been saved in the readme-file folder.')
  })
}

// TODO: Create a function to initialize app
async function init () {
  // Call the function that returns an array of license titles from the json file
  const licenses = readmeConstructor.getLicenseTitles()
  console.log(licenses)
  constructQuestions(licenses)
  const answers = await askQuestions().catch((error) => {
    console.error('Error asking questions:', error)
  })
  writeToFile(answers)
}

// Function call to initialize app
init()
