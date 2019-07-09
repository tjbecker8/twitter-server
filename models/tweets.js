const db = require('../db')
const mongoose = require('mongoose')


const db_tweet = db.model('tweet', {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'user is required']
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		type: String,
		required: [true, 'tweet body is required']
	}



})

module.exports = db_tweet
