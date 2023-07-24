const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "d3vXL86",
    database: "devxl_login",
    connectionLimit: 10, // Set the maximum number of connections in the pool
    authPlugins: {
        mysql_native_password: ['mysql_native_password'],
    },
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";

    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json("An error occurred");
        }

        if (data.length > 0) {
            // Matching record found, send success response
            return res.json("Login Successfully");
        } else {
            // No matching record found, send failure response
            return res.json("Invalid email or password");
        }
    });
});



app.listen(8081, () => {
    console.log("Listening...");
})