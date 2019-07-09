const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
// console.log('req', req.body);
	// console.log('req.body before', req.body);

	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
		if (err) {
			res.status(300).send('error', err)
		} else {
			req.body.password = encrypted
			db_user.create(req.body).then((user) => {
				let token =jwt.sign(user.toObject(), process.env.SECRET) //thats your token
				res.status(200).json({
					message: 'you are logged in',
					token: token
				})
			}).catch((err)=>{
				res.send(err)
			})
		}
	})
}
