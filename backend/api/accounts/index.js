const Router = require('koa-router');
const accounts = new Router();
const accountsCtrl = require('./accounts.controller');


//accounts.get('/list', (ctx, next) => {
//    ctx.body = 'GET ' + ctx.request.path;
//});

accounts.get('/list', accountsCtrl.list);
accounts.get('/:id', accountsCtrl.get);
accounts.post('/create', accountsCtrl.create);
accounts.delete('/remove/:id', accountsCtrl.remove);
accounts.put('/replace/:id', accountsCtrl.replace);
accounts.patch('/update/:id', accountsCtrl.update);

module.exports = accounts;

/*var express = require('express');
var router = express.Router();
const Account = require('../models/account.js');

router.get('/accounts', (req, res) => {
	Account.find({}, (err, account) => {
		return res.json(account);
	})
});

module.exports = router;
*/
