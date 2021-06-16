const createUrlQuery = require('create-url-query');

const base = {
	themes: 'api.wordpress.org/themes/info/1.1/',
	plugins: 'https://api.wordpress.org/plugins/info/1.2/',
	events: 'https://api.wordpress.org/events/1.0'
};

const themesUrl = (action = 'query_themes', request = null) => {
	params = {
		action, // query_themes, theme_information, hot_tags (for popular themes), feature_list (returns a list of valid theme tags)
		request: {
			search: '', // textual search string
			tag: '',
			theme: '', // slug of a specific theme
			author: '',
			page: '',
			per_page: '',
			browse: 'new', // popular, featured, updated, new
			fields: [], // array of theme information to be returned
			...request
		}
	};
	return `${base.themes}/${createUrlQuery(params)}`;
};

// const themesUrl = $args => {};

const plugins = $args => {};

const events = $args => {};

module.exports = { themesUrl };
