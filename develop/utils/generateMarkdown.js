//takes repo name and adds it to the github/username url
function generateProjectUrl(github, title) {
  const repoName = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${repoName}`;
}

//if there is no license, return nothing. other renders a nice looking badge with license
function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${data.license}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

Thank you for checking out the repo, questions can be directed to: [${data.github}](${data.url}) at ${data.email}.

`;
}

module.exports = generateMarkdown;
