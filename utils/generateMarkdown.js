// Import the required module
const fs = require('fs')

// Path to the json file containing the license badge data
const licensesFilePath = './data/license-badges.json'

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  // If there is no license, return empty string, so no badge is displayed
  if (license === 'None' || license === undefined || license === null || license === '') {
    return ''
  }
  // get the license name and link from the json file
  const licenseData = getLicenseDataFromTitle(license)
  // If there is no license, return empty string, so no badge is displayed
  const licenseLink = licenseData.licenseLink
  if (licenseLink === undefined || licenseLink === null || licenseLink === '') {
    return ''
  }
  // return the license badge markdown
  const badgeMarkdown = `
  [![${license} License](${licenseData.licenseBadge})](${licenseLink})
  `
  return badgeMarkdown
}

// Function that returns the license section of README
function renderLicenseSection (license) {
  // If there is no license, return markdown stating that the repository is not licensed
  if (license === 'None' || license === undefined || license === null || license === '') {
    return 'This repository is not licensed.'
  }
  // get the license name and link from the json file
  const licenseData = getLicenseDataFromTitle(license)
  // If there is no license, return markdown stating that the repository is not licensed
  const licenseLink = licenseData.licenseLink
  if (licenseLink === undefined || licenseLink === null || licenseLink === '') {
    return 'This repository is not licensed.'
  }
  // return markdown stating that the repository is licensed under the chosen license
  return `This repository is licensed under the [${license}](${licenseLink}) license.`
}

// Function to generate markdown for README
function generateMarkdown (data) {
  // Create a template string for the README

  // special formatting for commands
  const bash = '```bash'
  const endBash = '```'

  const readmeTemplate = `# ${data.projectTitle.trim()}
${renderLicenseBadge(data.licenseType.trim())}
## Description
  
${data.projectDescription.trim()}

## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
To install the necessary dependencies, run the following command:
  
${bash}
${data.installCommand.trim()}
${endBash}
  
## Usage

${data.usage.trim()}
  
## License
  
${renderLicenseSection(data.licenseType.trim())}
  
## Contributing
  
${data.contributing.trim()}
  
## Tests
  
To run tests, run the following command:
  
${bash}
${data.testCommand.trim()}
${endBash}
  
## Questions
  
If you have any questions about the repository, open an issue or contact me directly at:
[${data.emailAddress}](mailto:${data.emailAddress}).
  
You can find more of my work at [GitHub](https://github.com/${encodeURI(data.gitHubUserName)}).
`
  // return the template string
  return readmeTemplate
}

// Create a function that returns an array of license titles from the json file
function getLicenseTitles () {
  // Read the JSON file
  // check that it exists
  if (!fs.existsSync(licensesFilePath)) {
    console.error('Error reading the file:', licensesFilePath, 'does not exist')
    return []
  }
  try {
    const data = fs.readFileSync(licensesFilePath, 'utf8')
    // Parse the contents to an array of objects
    const licenses = JSON.parse(data)
    // Create an array of license titles
    const licenseTitles = licenses.map(license => license.licenseTitle)
    // return the array of license titles
    return licenseTitles
  } catch (err) {
    console.error('Error reading the file:', err)
    return []
  }
}

// Search for a license by its title and return the licenseBadge
function getLicenseDataFromTitle (licenseTitle) {
  // Read the JSON file
  // check that it exists
  if (!fs.existsSync(licensesFilePath)) {
    console.error('Error reading the file:', licensesFilePath, 'does not exist')
    return []
  }
  try {
    const data = fs.readFileSync(licensesFilePath, 'utf8')
    // Parse the contents to an array of objects
    const licenses = JSON.parse(data)

    // inner function to search for a license by its title and return the license data object
    function findLicenseData (licenseTitle) {
      const license = licenses.find(license => license.licenseTitle === licenseTitle)
      return license
    }

    // call the inner function and return the license data
    return findLicenseData(licenseTitle)
  } catch (err) {
    console.error('Error reading the file:', err)
    return []
  }
}

module.exports = { generateMarkdown, getLicenseTitles }
