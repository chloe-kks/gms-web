const Router = require('koa-router');

const api = new Router();

api.get('/api', (ctx, next) => {
	ctx.body = 'GET '+ ctx.request.path;
});

module.exports = api;

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
//router.post('/create', (req.res) => {
//	console.log('dd');
//});

/*
module.exports = function(app, Account)
{
    // GET ALL AccountS
    app.get('/api/Accounts', function(req,res){
        Account.find(function(err, Accounts){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(Accounts);
        })
    });

    // GET SINGLE Account
    app.get('/api/Accounts/:Account_id', function(req, res){
        Account.findOne({_id: req.params.Account_id}, function(err, Account){
            if(err) return res.status(500).json({error: err});
            if(!Account) return res.status(404).json({error: 'Account not found'});
            res.json(Account);
        })
    });

    // GET Account BY User_ID
    app.get('/api/Accounts/user/:user_id', function(req, res){
        Account.find({user_id: req.params.user_id}, {_id: 0, first_name: 1, last_name: 1, gender: 1, phone: 1, date_of_birth: 1},  function(err, Accounts){
            if(err) return res.status(500).json({error: err});
            if(account.length === 0) return res.status(404).json({error: 'Account not found'});
            res.json(Accounts);
        })
    });

    // CREATE Account
    app.post('/api/Accounts', function(req, res){
        var Account = new Account();
        Account.first_name = req.body.first_name;
        Account.last_name = req.body.last_name;
        Account.user_id = req.body.user_id;
        Account.gender = req.body.gender;
		Account.phone = req.body.phone;
        Account.date_of_birth = new Date(req.body.data_of_birth);

        Account.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});

        });
    });

    // UPDATE THE Account
    app.put('/api/Accounts/:Account_id', function(req, res){
        Account.update({ _id: req.params.Account_id }, { $set: req.body }, function(err, output){
            if(err) res.status(500).json({ error: 'database failure' });
            console.log(output);
            if(!output.n) return res.status(404).json({ error: 'Account not found' });
            res.json( { message: 'Account updated' } );
        })
    /* [ ANOTHER WAY TO UPDATE THE Account ]
            Account.findById(req.params.Account_id, function(err, Account){
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!Account) return res.status(404).json({ error: 'Account not found' });

            if(req.body.title) Account.title = req.body.title;
            if(req.body.author) Account.author = req.body.author;
            if(req.body.published_date) Account.published_date = req.body.published_date;

            Account.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                res.json({message: 'Account updated'});
            });

        });
    /
    });

    // DELETE Account
    app.delete('/api/Accounts/:Account_id', function(req, res){
        Account.remove({ _id: req.params.Account_id }, function(err, output){
            if(err) return res.status(500).json({ error: "database failure" });

            /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
            if(!output.result.n) return res.status(404).json({ error: "Account not found" });
            res.json({ message: "Account deleted" });
            /

            res.status(204).end();
        })
    });
     
}
*/
