import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const FOCUS_INPUT = 'ui/write/FOCUS_INPUT';
const BLUR_INPUT = 'ui/write/BLUR_INPUT';
const CHANGE_INPUT = 'ui/write/CHANGE_INPUT';
const RESET_INPUT = 'ui/write/RESET_INPUT';

const OPEN_VIEWER = 'OPEN_VIEWER';
const CLOSE_VIEWER = 'CLOSE_VIEWER';
const CHANGE_VIEWER_INPUT = 'CHANGE_VIEWER_INPUT';

export const focusInput = createAction(FOCUS_INPUT);
export const blurInput = createAction(BLUR_INPUT);
export const changeInput = createAction(CHANGE_INPUT); // { name, value }
export const resetInput = createAction(RESET_INPUT);

export const openViewer = createAction(OPEN_VIEWER);
export const closeViewer = createAction(CLOSE_VIEWER);
export const changeViewerInput = createAction(CHANGE_VIEWER_INPUT);

const initialState = Map({
	write: Map({
		focused: false,
		userid: '',
		firstname: '',
		lastname: '',
		gender: '',
		stat: ''
	}),
	member: Map({
		open: false,
		info: Map({
			_id: null,
			userid: null,
			firstname: null,
			lastname: null,
			gender: null,
			stat: null
		})
	})
});

export default handleActions({
	[FOCUS_INPUT]: (state) => state.setIn(['write', 'focused'], true),
	[BLUR_INPUT]: (state) => state.setIn(['write', 'focused'], false),
	[CHANGE_INPUT]: (state, action) => {
		const { name,value } = action.payload;
		return state.setIn(['write', name], value);
	},
	[RESET_INPUT]: (state) => state.set('write', initialState.get('write')),
	[OPEN_VIEWER]: (state, action) => state.setIn(['member', 'open'], true).setIn(['member', 'info'], action.payload),
	[CLOSE_VIEWER]: (state, action) => state.setIn(['member', 'open'], false),
	[CHANGE_VIEWER_INPUT]: (state, action) => {
		const { name, value } = action.payload;
		return state.setIn(['member', 'info', name], value)
	}

}, initialState);
