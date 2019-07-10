const db_hashtag = require('../models/hashtag')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			db_hashtag.create(req.body).then((data) => {
				res.send(data)
			}).catch((err)=>{
				res.send(err)
			})
		} else {
			res.send('token required')
		}
	})
	// res.send('message created')
}
