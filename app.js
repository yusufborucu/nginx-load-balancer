const express = require('express');
const app = express();
const server_name = process.env.server_name;

app.get('/', (req, res) => {
    res.send(`Hello ${server_name}`);
});

app.listen(3000);