// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.licenseId;
  let thisLicense = ''
  if(licenseType === 'MIT' ) {
    thisLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    thisLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    thisLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.licenseId = "N/A"
  }
  return thisLicense;
};

function generateMarkdown (data) {
  return `#{data.title}
  ## license
  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
  return `# ${data.title}

  # ${data.title}

## Description
//${data.description}
}
`
module.exports = generateMarkdown;
