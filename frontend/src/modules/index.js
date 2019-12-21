import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import member from './member';
import ui from './ui';
import base from './base';
import auth from './auth';
import user from './user';

export default combineReducers({
    member,
    ui,
	base,
	auth,
	user,
    pender: penderReducer
});
