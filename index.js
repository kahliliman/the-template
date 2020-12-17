import express from "express"

const app = express()
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.listen(3000, (req, res) => console.log(`Listening on :${process.env.APP_URL}`))
