const db_message = require('../models/message')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			console.log('decoded', decoded);
			req.body.author = decoded._id
			db_tweet.create(req.body).then((data) => {
				// res.send(data)
				// console.log('data', data);
				db_tweet.findById(data._id).populate('author').then((found_message) => {
					res.send(found_message)
				})
			}).catch((err)=>{
				res.send(err)
			})
		}
	})
}
