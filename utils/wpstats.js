const { endpoint } = require('./endpoints');
const { input, flags } = require('./cli');
const { to } = require('await-to-js');
const handleError = require('cli-handle-error');
const { default: axios } = require('axios');
const ora = require('ora');
const { themes } = require('./data');
const boxen = require('boxen');

const { blue: b, green: g, bold, bgBlue, white } = require('chalk');

const spinner = ora(``);

// endpoint('query_themes', request)

const wpstats = async () => {
	// if (input.includes(`events`)) {
	// 	const [err, response] = await to(axios(endpoint('query_themes')));
	// 	handleError(`Error fetching the resource`, err);

	// 	console.log(response.data.events);
	// }

	if (input.includes(`themes`)) {
		request = {};

		let startMsg = ``;

		console.log(flags);

		if (flags.name) {
			startMsg = `Fetching Theme: ${bold(`${flags.name}...`)}`;
		} else {
			const total = flags.total || 20;
			startMsg = flags.hot
				? `${total} Popular Themes...`
				: `${total} Latest Themes...`;
		}

		spinner.start(`${b(themes.start(startMsg))}\n\n`);

		flags.name && (request.theme = flags.n);
		flags.search && (request.search = flags.s);
		flags.author && (request.author = flags.author);
		flags.browse && (request.browse = flags.browse);
		flags.tag && (request.tag = flags.tag);
		flags.total && (request.per_page = flags.total);

		const [err, response] = await to(
			axios(endpoint('query_themes', request))
		);
		handleError(`Error fetching the resource`, err);

		showThemes(response.data);
		// console.log(response.data);

		console.log(`\n\n`);
		spinner.succeed(`${g(themes.success(response.data.info.results))}`);

		// return response;
	}
};

const showThemes = data => {
	data.themes.forEach((theme, index) => {
		let out = `${bgBlue(white(` #${index + 1} `))}\n\n
${g(`Theme Name: ${theme.name}`)}
Version: ${theme.version}
Downloaded: ${theme.downloaded}
Active Installs: ${theme.active_installs}
Author: ${theme.author}
Homepage: ${theme.homepage}
Preview: ${theme.preview_url}`;
		console.log(boxen(out, { padding: 1, borderStyle: 'round' }));
	});
};

module.exports = wpstats;
