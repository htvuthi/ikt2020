const express = require('express');
const db = require('./db_config')

const bodyParser = require('body-parser')
const app = express()
const PORT = 3005;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.send('HELLO!');
});

app.get('/entries', db.getEntries)
app.get('/entries/:id', db.getEntry)
app.post('/entries', db.createEntry)
app.put('/entries/:id', db.updateEntry)
app.delete('/entries/:id', db.deleteEntry)

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});

