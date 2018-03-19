const express = require('express');
const app = express();
const mysql = require('mysql');
const server = require('http').Server(app);
app.listen("3000");

app.get('/', function(req, res) {
    qerying().then(function(resp){
        console.log(resp);
        res.send(JSON.stringify(resp));
    });
    // req.end()
});

function qerying() {
    const con = connectNow();
    const promise = new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) {
                connectNow.end();
                console.log("connection error ending");
                throw err;
            }
            connectNow().query("Select * from table1", function (err, results) {
                connectNow().end();
                if (err) {
                    console.log("There is an error");
                    console.log(err);
                    throw new err;
                } else {
                    resolve(results);
                }
            })
        });

    })
    return promise;

}

function connectNow() {
    const con = mysql.createConnection({
        host: "DESKTOP-J1KA7D1",
        port: 3306,
        user: "james",
        password: "b501347b",
        database: "db1"
    });
    console.log("connecting");
    console.log(con);
    return con;
}