const db = require('mysql')

var conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'

})

conn.connect(function(error){
    if(error) throw error;
    console.log('connected successfully')
})

module.exports = conn