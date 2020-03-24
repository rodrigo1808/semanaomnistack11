const express = require('express');

const app = express();

app.get('/:id', (req, res) => {
    console.log(req.params);
    return res.json({ message: 'Hello World!'})
});

app.listen(3333);