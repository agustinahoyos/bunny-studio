const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const express = require('express');
const port = 3002;
const app = express();
const cors = require('cors');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});