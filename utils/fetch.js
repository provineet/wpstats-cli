const axios = require('axios').default;

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
	try {
		// const response = await axios.get(
		// 	'https://wordpress.org/themes/wp-json/themes/v1'
		// );
		response = 'Fetching...';
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}

module.exports = { getUser };
