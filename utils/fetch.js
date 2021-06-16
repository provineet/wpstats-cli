const axios = require('axios').default;
const { to } = require('await-to-js');
const handleError = require('cli-handle-error');
const { endpoint } = require('./endpoints');
const { input, flags } = require('./cli');

// Want to use async/await? Add the `async` keyword to your outer function/method.
const fetchIt = async url => {
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		console.error(error);
	}
};

const fetchStats = async () => {
	if (input.includes(`themes`)) {
		request = {};

		`n` in flags && (request.theme = flags.n);
		`s` in flags && (request.search = flags.s);
		`a` in flags && (request.author = flags.a);
		`b` in flags && (request.browse = flags.b);

		console.log(endpoint('query_themes', request));

		const [err, response] = await to(
			fetchIt(endpoint('query_themes', request))
		);

		handleError(`Failed while building on step #1`, err);
		return response;
	}
};

module.exports = { fetchStats };
