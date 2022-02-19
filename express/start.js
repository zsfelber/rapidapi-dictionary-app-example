const fs = require('fs');
const path = require('path');
const express = require('express');
const init = require('../functions/include/init');
const hub = require('./http/hub');
const app = express();
const port = process.port || 8888;
const appDir = path.resolve(__dirname, "..").normalize();

init.init();

app.use(express.static('public'));

app.get('/*', async (req, res, next) => {
    let result = await hub.forward(req.path, req.query);
    if (result) {
        res.send(result);
    } else {
        next();
    }
});

app.get('/data/*', async (req, res, next) => {
    let result;
    if (/\.(png|jpg|gif|svg|html)$/.test(req.path)) {

        let abs = path.join(appDir, req.path);

        console.log("data image: "+abs);

        if (fs.existsSync(abs)) {
            result = fs.readFileSync(abs);
        }
    }
    if (result) {
        res.send(result);
    } else {
        next();
    }
});


app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})
