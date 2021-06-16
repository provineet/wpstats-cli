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

const { fetchStats } = require('./utils/fetch');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });

	input.includes(`help`) && cli.showHelp(0);

	response = await fetchStats();

	console.log(response.data);

	debug && log(flags);
})();
