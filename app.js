const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan')

//Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Other Config
app.use(cors());
app.use(helmet());
app.use(morgan());

//Routers
app.use(require('./routes/auth.todo'));
app.use('/todo' , require('./routes/todo.router'));

module.exports = app;