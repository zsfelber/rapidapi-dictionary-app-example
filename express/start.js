const express = require('express');
const hub = require('./http/hub');
const app = express();
const port = process.port || 8888;

app.use(express.static('public'));

app.get('/*', (req, res, next) => {
    let result = hub.forward(req.url, req.query);
    if (result) {
        res.send(result);
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})
