const db_user = require('../models/user')

module.exports = (req, res) => {
	db_user.find({}).select('name email').then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}
