const express = require('express');
const router = express.Router();
const db = require('../database/dbconnect')

router.use(express.urlencoded({extended: true}))


router.get('/', (req, res) => {
    res.render('home.ejs', {body: 'Welcome to User Select'});
})

router.post('/create', (req, res) => {
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password

    var sql = `INSERT INTO users (name, username, password) VALUES ('${name}', '${username}', '${password}')`
    db.query(sql, function(err, result){
        if (err) throw err;
        res.send('SUCCESS')
    })
})


router.get('/db', (req, res) => {
    res.render('home.ejs', {body: 'DB CONNECTED'});
})

router.get('/:id', (req, res) => {
    var id = req.params.id;
    var key = id * 99;
    var obj = [{
        name: 'Matthew',
        id: id,
        key: key
    }, 
    {
        name: 'Morbius',
        id: id,
        key: key+1
    }
    ];
    res.send('id');
    // res.render('home.ejs', {body: `${obj.name}`});
})



module.exports = router;

