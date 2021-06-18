const { endpoint } = require('./endpoints');
const { input, flags } = require('./cli');
const { to } = require('await-to-js');
const handleError = require('cli-handle-error');
const { default: axios } = require('axios');
const ora = require('ora');
const {themes} = require('./data');
const {bold} = require('chalk');

const {blue: b, green: g} = require('chalk');

const spinner = ora(``);

// endpoint('query_themes', request)

const wpstats = async () => {

if (input.includes(`themes`)) {
		request = {};

        let startMsg = ``;

        if( flags.n ){
            startMsg = `Fetching Theme: ${bold(`${flags.n}...`)}`;
        }else{
            const total = flags.t || 20;
            startMsg = flags.hot ? `${total} Popular Themes...` : `${total} Latest Themes...`;
        }


        spinner.start(`${b(themes.start(startMsg))}\n\n`);

		flags.n && (request.theme = flags.n);
		flags.s && (request.search = flags.s);
		flags.a && (request.author = flags.a);
		flags.b && (request.browse = flags.b);
        flags.h && (request.tag = flags.h);
        flags.t && (request.per_page = flags.t);

        const [err, response] = await to( axios(endpoint('query_themes', request)) );
        handleError(`Error fetching the resource`, err);

        showThemes(response.data);

        console.log(`\n\n`);
        spinner.succeed(`${g(themes.success(response.data.info.results))}`);

		return response;
	}

}

const showThemes = data => {
    console.log(data)
    data.themes.forEach((theme, index) => {
        console.log(`Theme Name: ${theme.name}\n`);
        console.log(`Version: ${theme.version}\n`);
        console.log(`Downloaded: ${theme.downloaded}\n`);
        console.log(`Active Installs: ${theme.active_installs}\n`);
        console.log(`Author: ${theme.author}\n`);
        console.log(`Homepage: ${theme.homepage}\n`);
        console.log(`Preview: ${theme.preview_url}\n`);
    });
}

module.exports = wpstats;