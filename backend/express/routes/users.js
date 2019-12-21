var express = require('express');
var router = express.Router();
const Account = require('../models/account.js');

router.get('/', function(req, res) {
	Account.find({}, (err, accountt) => {
		console.log(req);
		res.json(accountt);
	})
});

router.get('/limit', function(req, res) {
	Account.find({}, (err, accountt) => {
		res.json(accountt);
	}).sort({_id:-1}).limit(50)
});

router.post('/create', (req, res) => {
    const userid = req.body.userid;
    const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const gender = req.body.gender;
	const stat = req.body.stat;

    const new_account = new Account();

	new_account.userid = userid;
    new_account.firstname = firstname;
    new_account.lastname = lastname;
	new_account.gender = gender;
	new_account.stat = stat;

    console.log(new_account);
    new_account.save(err => {
         if (err) {
             console.log(err);
             return res.redirect('error.html');
         }
         console.log("account create success");
         return res.json(new_account);
     });
});

router.put('/update', (req, res) => {
    const userid = req.body.userid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const stat = req.body.stat;
    const _id = req.body._id;
    Account.update({_id: req.body._id }, { $set: req.body }, function(err, output) {
        if(err) res.status(500).json({ error: 'db failure' });
        console.log(output);
        if(!output.n) return res.status(404).json({ error: 'account not found' });
        res.json({ message: 'account updated'} );
    })
});

router.put('/profile', (req, res) => {

	const data = req.body.data;
	console.log(data);
/*    const new_account = new Account();

    const userid = data.userid;
    const firstname = data.firstname;
    const lastname = data.lastname;
    const gender = data.gender;
	const dateofbirth = data.dateofbirth;
	const ageinyrs = data.ageinyrs;
	const weightinkgs = data.weightinkgs;
	const ssn = data.ssn;
	const phonenum: data.phonenum;
	const city: data.city
	const zip: data.zip;
	const region: data.region;
 */
    Account.updateOne({ userid: data.userid }, { $set: req.body.data }, function(err, output) {
        if(err) res.status(500).json({ error: 'db failure' });
        console.log(output);
        if(!output.n) return res.status(404).json({ error: 'account not found' });
        res.json({ message: 'account updated'} );
    })
});


router.post('/remove', (req, res) => {
    const _id = req.body._id;

    Account.findOneAndDelete({_id: req.body._id}, function(err, output){
        if(err) return res.status(500).json({ error: 'db failure' });
        res.status(204).end();
    })
});

router.get('/auth/exists/email', (req, res) => {
//	console.log(req.body);
	Account.find({ email: req.body.email }, (err, output) => {
		if(err) return res.status(409).json({ error: 'db failure'});	
		return res.json(output);
	});
});

router.get('/auth/exists/userid', (req, res) => {
    Account.find({ userid: req.body.userid }, (err, output) => {
        if(err) return res.status(409).json({ error: 'db failure'});
        return res.json(output);
    });
});

router.post('/auth/login/local', (req, res) => {
    Account.find({ email: req.body.email }, (err, output) => {
		if(err) return res.status(500).json({ error: 'db failure'});
//		console.log(output);
		return res.json(output);
	})
});

router.post('/auth/register/local', (req, res) => {

	const email = req.body.email;
	const userid = req.body.userid;
	const password = req.body.password;

    const new_account = new Account();

    new_account.userid = userid;
	new_account.email = email;
	new_account.password = password;

    new_account.save(err => {
		if (err) return res.status(409).json(new_account);
		
		return res.json(new_account);
	});
});



module.exports = router;
