const db_hashtag = require('../models/hashtag')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log('req',req.headers);
	let token = req.headers.authorization.split(' ')[1]
	console.log('token',token);
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			console.log('decoded', decoded);
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
