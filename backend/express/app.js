//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var loginRouter = require('./routes/auth');
var nemoRouter = require('./routes/nemo');
//var createError = require('http-errors');
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose    = require('mongoose');
var cors = require('cors');
var router = express.Router();
var session = require('express-session')
var jwt = require('jsonwebtoken');

const { jwtMiddleware } = require('./token');
const API_PORT = 3001;
app.use(cors());

// CONNECT TO MONGODB SERVER
const dbRoute = "mongodb://localhost:27017/test";

mongoose.connect(dbRoute, { useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

// DEFINE MODEL
var Account = require('./models/account');
var Nemo = require('./models/nemo');

// [CONFIGURE APP TO USE bodyParser]
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(jwtMiddleware);

//app.use('/api', indexRouter);

app.use('/api/accounts', usersRouter);
app.use('/api/nemo', nemoRouter);

module.exports = app;

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

app.use(express.static('public'));
