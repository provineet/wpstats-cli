const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	name: {
		type: `string`,
		alias: `n`,
		desc: `Theme slug to get info about`
	},
	search: {
		type: `string`,
		alias: `s`,
		desc: `Search string to filter through the themes`
	},
	author: {
		type: `string`,
		alias: `a`,
		desc: `Get all themes from this author`
	},
	browse: {
		type: `string`,
		alias: `b`,
		desc: `Browser themes options: new | updated | featured |popular `
	},
	tag: {
		type: `string`,
		alias: `t`,
		desc: `Browser themes for a given tag or category.`
	},
	total: {
		type: `string`,
		alias: `tn`,
		desc: `Total number of themes to query`
	}
};

const commands = {
	help: { desc: `Print help info` },
	themes: { desc: `To query WordPress.org themes` }
};

const helpText = meowHelp({
	name: `wpstats`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
