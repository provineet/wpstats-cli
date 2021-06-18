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
const wpstats = require('./utils/wpstats');
const {socials} = require("./utils/data");

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });

	input.includes(`help`) && cli.showHelp(0);

    flags.socials && console.log( socials );

	wpstats();

	debug && log(flags);
})();
