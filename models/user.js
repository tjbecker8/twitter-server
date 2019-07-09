const db = require('../db')
const mongoose = require('mongoose')


const db_user = db.model('user', {
	email: {
		type: String,
		required: [true, 'Email is required']
	},
	name: {
		type: String,
		required: [true, 'User name is required']
	},
	password: {
		type: String,
		required: [true, 'Message body is required']
	},
	profilePicture: {
		type: String,
		required: [true, 'profile picture url is required']
	},
	about: {
		type: String,
	},
	location: {
		type: String,
	}


})

module.exports = db_user
