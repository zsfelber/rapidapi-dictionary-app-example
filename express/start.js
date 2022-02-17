const express = require('express');
const init = require('../functions/include/init');
const hub = require('./http/hub');
const app = express();
const port = process.port || 8888;

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

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})
