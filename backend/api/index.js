const Router = require('koa-router');

const api = new Router();
const auth = require('./auth');
const accounts = require('./accounts');

api.use('/accounts', accounts.routes());
api.use('/auth', auth.routes());

module.exports = api ;
