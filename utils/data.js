const chalk = require('chalk');

const themes = {
    start: (type) => `Fetching ${type}`,
    success: (totalNumber) => `Successfuly Fetched ${totalNumber} Themes.`,
    fail: `Failed Fetching Themes`
}

const socials = `
${chalk.bgHex('#E85133').white( chalk.bold(`   Github:`))} ${chalk.dim(` https://github.com/provineet [@provineet]`)}
${chalk.bgHex('#1F9CEA').white( chalk.bold(`  Twitter:`))} ${chalk.dim(` https://twitter.com/mrvineetverma [@mrvineetverma]`)}
${chalk.bgHex('#52107D').white( chalk.bold(`     Blog:`))} ${chalk.dim(` https://blogohblog.com`)}
`;

module.exports = {themes, socials}