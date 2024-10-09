const fs = require('fs');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
var data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));


app.get('/', (req, res) => {
    res.render('farm', { data });
});

app.get("/subdata", (req, res) => {
    res.render('product.ejs',{data:data[req.query.index]});
})

app.listen(3000)