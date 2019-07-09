const db_hashtag = require('../models/hashtags')

module.exports = (req, res) => {
	db_hashtag.find({}).then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}
