const Joi = require('joi');
const { Types: { ObjectId } } = require('mongoose');

const Account = require('../../models/account');

exports.create = async (ctx) => {
    const { 
        userid, 
        firstname, 
        lastname, 
        gender, 
        stat 
    } = ctx.request.body;

    const account = new Account({
        userid, 
        firstname,
        lastname,
        gender,
        stat
    });

    try {
        await account.save();
    } catch(e) {
        return ctx.throw(500, e);
    }

    ctx.body = account;
};

exports.list = async (ctx) => {

    let accounts;

    try {
		accounts = await Account.find().sort({_id:-1}).limit(300).exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = accounts;
};

exports.get = async (ctx) => {
    const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

    let account;

    try {
        account = await Account.findById(id).exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    if(!account) {
        // 존재하지 않으면
        ctx.status = 404;
        ctx.body = { message: 'user not found' };
        return;
    }

    ctx.body = account;
};

exports.remove = async (ctx) => {
    const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

    try {
        await Account.findByIdAndRemove(id).exec();
    } catch (e) {
        if(e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
    }

    ctx.status = 204; // No Content
};

exports.replace = async (ctx) => {
    const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

    if(!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }

    // 먼저, 검증 할 스키마를 준비해야합니다.
    const schema = Joi.object().keys({ // 객체의 field 를 검증합니다.
        // 뒤에 required() 를 붙여주면 필수 항목이라는 의미입니다
        userid: Joi.string().required(),
		firstname: Joi.string(),
		lastname: Joi.string(),
		gender: Joi.string(),
		stat: Joi.string()
    });

    // 그 다음엔, validate 를 통하여 검증을 합니다.
    const result = Joi.validate(ctx.request.body, schema); // 첫번째 파라미터는 검증할 객체이고, 두번째는 스키마입니다.

    // 스키마가 잘못됐다면
    if(result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    let account

    try {
        // 아이디로 찾아서 업데이트를 합니다.
        // 파라미터는 (아이디, 변경 할 값, 설정) 순 입니다.
        account = await Account.findByIdAndModify(id, ctx.request.body, {
            upsert: true, // 이 값을 넣어주면 데이터가 존재하지 않으면 새로 만들어줍니다
            new: true // 이 값을 넣어줘야 반환하는 값이 업데이트된 데이터입니다.
                      // 이 값이 없으면 ctx.body = book 했을때 업데이트 전의 데이터를 보여줍니다.
        });
    } catch (e) {
        return ctx.throw(500, e);
    }
    ctx.body = account;
}

exports.update = async (ctx) => {
    const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

    if(!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }

    let account;

    try {
        // 아이디로 찾아서 업데이트를 합니다.
        // 파라미터는 (아이디, 변경 할 값, 설정) 순 입니다.
        account = await Account.findByIdAndUpdate(id, ctx.request.body, {
            // upsert 의 기본값은 false 입니다.
            new: true // 이 값을 넣어줘야 반환하는 값이 업데이트된 데이터입니다. 이 값이 없으면 ctx.body = book 했을때 업데이트 전의 데이터를 보여줍니다.
        });
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = account;
};
