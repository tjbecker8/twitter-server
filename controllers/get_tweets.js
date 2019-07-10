const db_tweet = require('../models/tweets')

module.exports = (req, res) => {
// console.log(req.query);
	let q = {}
	if (req.query && req.query.channel) {
		q.channel = req.query.channel
	}
	db_tweet.find(q).populate({
		path: 'hashtag',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'email name image'
	}).sort('date').then((data) => {
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}
