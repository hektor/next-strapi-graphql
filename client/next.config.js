require('dotenv').config()

module.exports = {
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
		GCAL_ID: process.env.GCAL_ID,
		GCAL_API_KEY: process.env.GCAL_API_KEY
	}
}
