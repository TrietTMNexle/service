const express = require("express");
const mysql = require("mysql");

const app = express();
const connection = mysql.createConnection({
    host: '27.0.12.101',
    user: 'opuser',
    password: 'opteamxyz!@#',
    database: 'onepiece'
});

connection.connect((err) => {
    err ? console.log("Err", err) : console.log("Connect success");
});

app.get('/api/info', (req, res) => {
    let sql = `select * from op_charlist where name like 'sengoku'`;
    connection.query(sql, (err, res) => {
        if(err) throw err;
        // res.json({new: res});
        console.log("Result", res);
    });
});

app.listen(6789, () => console.log("App listening on port 4000"));