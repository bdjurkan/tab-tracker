// "start": "nodemon src/app.js --exec 'npm run lint && node'",
// "lint": "eslint **/*js"

const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const morgan     = require('morgan');

const app        = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    });
});

app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'), function() {
    console.log('App listening on port ' + app.get('port') + '!');
});
