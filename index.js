// Include packages and modules needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const readmeConstructor = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
// with an array of license choices loaded from a JSON file passed in
// validator functions are passed in to validate the user input
let questions = []
function constructQuestions (licenses) {
  const licenseChoices = [...licenses, 'None']
  questions = [
    {
      type: 'input',
      name: 'gitHubUserName',
      message: 'What is your GitHub Username?',
      validate: disallowBlanksValidator
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
      validate: disallowBlanksValidator
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please write a short description of your project:',
      validate: disallowBlanksValidator
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
      validate: disallowBlanksValidator
    },
    {
      type: 'input',
      name: 'testCommand',
      message: 'What command should be run to run tests?',
      validate: disallowBlanksValidator
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
      validate: disallowBlanksValidator
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
      validate: disallowBlanksValidator
    }
  ]
}

function disallowBlanksValidator (value) {
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

// output colored text to the console
const outputGreenText = (text) => console.log(`\x1b[1m\x1b[32m${text}\x1b[0m\n`)
const outputYellowText = (text) => console.log(`\n\x1b[33m${text}\x1b[0m\n`)

// ask the questions and return the answers
// command line input
async function askQuestions () {
  let answers = {}
  for (const question of questions) {
    const answer = await inquirer.prompt([question])
    answers = { ...answers, ...answer }
  }
  return answers
}

// Write README file to file system
function writeToFile (data) {
  // generate markdown from answer data
  const markDown = readmeConstructor.generateMarkdown(data)
  // write README.md to file
  const fileName = './readme-file/README.md'
  try {
    fs.writeFileSync(fileName, markDown)
    outputYellowText('Your new README.md file has been saved in the readme-file folder.')
  } catch (err) {
    console.error(err)
  }
}

// initialize the app
async function init () {
  outputGreenText('Welcome to Kwik-README-ConstructoBot. Please answer the questions to generate your professional README.md file.')
  // Call the function that returns an array of license titles from the json file
  // to pass into the constructQuestions function
  const licenses = readmeConstructor.getLicenseTitles()
  // Call the function that constructs the questions array for the inquirer prompt
  constructQuestions(licenses)
  // Call the function that asks the questions and returns the answers
  const answers = await askQuestions().catch((error) => {
    console.error('Error asking questions:', error)
  })
  // Call the function that writes the README file to the file system
  writeToFile(answers)
  outputGreenText('Kwik-README-ConstructoBot has finished.')
}

// Function call to initialize app
init()
