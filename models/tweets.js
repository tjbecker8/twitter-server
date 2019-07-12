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
	},
	hashtag: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'hashtag',
		required: [true, 'hashtag is required']
	},
	likes: {
		type: Number,
		default: 0,
	},



})

module.exports = db_tweet
