const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('./db')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



// app.get('/api/messages', require('./controllers/get_messages'))
// app.post('/api/messages', require('./controllers/post_message'))
//
// app.get('/api/channel', require('./controllers/get_channel'))
// app.post('/api/channel', require('./controllers/post_channel'))
//
// app.post('/api/signup', require('./controllers/signup'))
// app.post('/api/login', require('./controllers/login'))
// app.get('/api/users', require('./controllers/get_users'))



app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('./db')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/messages', require('./controllers/post_message'))

app.get('/api/channel', require('./controllers/get_channel'))
app.post('/api/channel', require('./controllers/post_channel'))

app.post('/api/signup', require('./controllers/signup'))
app.post('/api/login', require('./controllers/login'))
app.get('/api/users', require('./controllers/get_users'))



app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
