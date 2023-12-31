const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

app.post('/api/posts', (req, res) => {
    const post = req.body;
    const query = `INSERT INTO posts (title, content) VALUES ('${post.title}', '${post.content}')`;
    con.query(query, function (err, result) {
        if (err) throw err;
        res.status(201).send('Post created');
    });
});