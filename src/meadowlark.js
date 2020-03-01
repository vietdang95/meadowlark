const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500-server error');
})

app.listen(port, () => {
    console.log(`Starting in http::localhost:${port}`);
})