const db = require('../db')


const db_hashtag = db.model('hashtag', {
	channelName: String
})

module.exports = db_hashtag
