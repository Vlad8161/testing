const express = require('express');
const app = express();
const fs = require("fs");

app.post('/callback', function (req, res) {
    let androidId = req.query.android_id;
    let partner = req.query.partner;
    let banner = req.query.banner;
    console.log('android_id = ' + androidId + ' partner = ' + partner + ' banner = ' + banner);
    res.end()
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});
