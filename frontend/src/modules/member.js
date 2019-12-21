import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as WebAPI from '../lib/web-api';

const CREATE_MEMBER = 'member/CREATE_MEMBER';
const GET_INITIAL_MEMBER = 'member/GET_INITIAL_MEMBER';
const GET_RECENT_MEMBER = 'member/GET_RECENT_MEMBER';
const UPDATE_MEMBER = 'member/UPDATE_MEMBER';
const DELETE_MEMBER = 'member/DELETE_MEMBER';

export const createMember = createAction(CREATE_MEMBER, WebAPI.createMember)
export const getInitialMember = createAction(GET_INITIAL_MEMBER, WebAPI.getInitialMember);
export const getRecentMember = createAction(GET_RECENT_MEMBER, WebAPI.getRecentMember);
export const updateMember = createAction(UPDATE_MEMBER, WebAPI.updateMember, payload => payload);
export const deleteMember = createAction(DELETE_MEMBER, WebAPI.deleteMember, payload => payload);

const initialState = Map({
	data: List()
});

export default handleActions({
	...pender({
		type: GET_INITIAL_MEMBER,
		onSuccess: (state, action) => state.set('data', fromJS(action.payload.data))
	}),
	...pender({
		type: GET_RECENT_MEMBER,
		onSuccess: (state, action) => {
			const data = state.get('data');
			return state.set('data', fromJS(action.payload.data).concat(data))
		}
	}),
	...pender({
		type: UPDATE_MEMBER,
		onSuccess: (state, action) => {
			const { _id, member: { userid, firstname, lastname, gender, stat } } = action.meta;
			const index = state.get('data').findIndex(member => member.get('_id') === _id);
			return state.updateIn(['data', index], (member) => member.merge({
				userid,
				firstname,
				lastname,
				gender,
				stat
			}))
		}
	}),
	...pender({
		type: DELETE_MEMBER,
		onSuccess: (state, action) => {
			const _id = action.meta;
			const index = state.get('data').findIndex(member => member.get('_id') === _id);
			return state.deleteIn(['data', index]);
		}
	})
}, initialState);
