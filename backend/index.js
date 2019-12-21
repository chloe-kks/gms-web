require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const api = require('./api');

const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { jwtMiddleware } = require('./token');

app.use(cors({ withCredentials: true }));
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true });

/*
mongoose.connect(process.env.MONGO_URI, {
	useMongoClient: true
}).then(
	(response) => {
		console.log('Successfully connected to mongodb');
	}
).catch(e => {
	console.error(e);
});
*/
const port = process.env.PORT || 3001;

app.use(bodyParser());
app.use(jwtMiddleware);
router.use('/api', api.routes());


app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('server is listening to port ' + port);
});
