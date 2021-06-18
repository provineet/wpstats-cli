const axios = require('axios').default;
const { to } = require('await-to-js');
const handleError = require('cli-handle-error');

// Want to use async/await? Add the `async` keyword to your outer function/method.
const fetchStats = async url => {
    const [err, response] = await to( axios.get(url) );
    handleError(`Error fetching the resource`, err);
    return response;
};

module.exports = fetchStats;
