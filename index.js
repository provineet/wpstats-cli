#!/usr/bin/env node

/**
 * wpstats
 * Get information about WordPress.org
 *
 * @author vineetverma <www.blogohblog.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const fetch = require('./utils/fetch');
const url = require('./utils/endpoints');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	fetch.getUser();

	url.themesUrl('query_themes', { browse: 'updated' });

	debug && log(flags);
})();
