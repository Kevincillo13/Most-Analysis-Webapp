// constants
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(__dirname)
    res.send('hola')
});

app.get('/dashboard', (req, res) => {
    res.send('dashboard')
});

// middleware
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log('Server running on port', port);
});