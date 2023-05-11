// Import the required module
const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `# ${data.title}`
}

// Create a function that returns an array of license titles from the json file
function getLicenseTitles () {
  // Read the JSON file
  fs.readFile('./data/license-badges.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      return ''
    }

    // Parse the contents to an array of objects
    const licenses = JSON.parse(data)

    // inner function to return an array of license titles
    function getLicenseTitles () {
      const licenseTitles = licenses.map(license => license.licenseTitle)
      return licenseTitles
    }

    // call the inner function and return the license titles
    return getLicenseTitles()
  })
}

// Search for a license by its title and return the licenseBadge
function getLicenseDataFromTitle (licenseTitle) {
// Read the JSON file
  fs.readFile('./data/license-badges.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      return ''
    }

    // Parse the contents to an array of objects
    const licenses = JSON.parse(data)

    // inner function to search for a license by its title and return the license data object
    function findLicenseData (licenseTitle) {
      const license = licenses.find(license => license.licenseTitle === licenseTitle)
      return license
    }

    // call the inner function and return the license data
    return findLicenseData(licenseTitle)
  })
}

module.exports = { generateMarkdown, getLicenseTitles }
