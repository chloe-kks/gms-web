var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var { generateToken } = require('../token');

var accountSchema = new Schema({
	userid: String,
    firstname: String,
    lastname: String,
	gender: String,
    stat: String,
	email: String,
	password: String
}, { collection: 'account' });

accountSchema.methods.generateToken = function() {
    const payload = {
        _id: this._id,
        userid: this.userid
    };

    return generateToken(payload, 'account');
};

accountSchema.statics.findByUserid = function(userid) {
	return this.findOne({userid}).exec();
};

accountSchema.statics.findByEmail = function(email) {
	return this.findOne({email}).exec();
}

accountSchema.statics.findByEmailOrUserid = function({userid, email}) {
	return this.findOne({
		$or: [
			{ userid },
			{ email }
		]
	}).exec();
};

accountSchema.statics.localRegister = function({ userid, email, password }) {
    const account = new this({
		userid,
        email,
        password: password
    });

    return account.save();
};

accountSchema.methods.validatePassword = function(password) {
    return this.password === password;
};

module.exports = mongoose.model('account', accountSchema);
