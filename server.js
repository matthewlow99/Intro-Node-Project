const express = require('express')
const app = express()
const cors = require('cors')

app.use(
    cors({
        origin: ['null', '192.168.3.141', '127.0.0.1:3000'],
        methods: ['GET', 'POST']
    })
)
app.use(express.static(__dirname + '/views/public'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('home.ejs', {body: 'Home Page'});
})


const apiRouter = require('./api/apiRouter');
app.use('/api', apiRouter);



app.listen(3000)