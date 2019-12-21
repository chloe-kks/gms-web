import React, { Component } from 'react';
import { InputPlaceholder, WhiteBox } from '../components/members/realunit/WriteMember';
import { InputSet, SaveButton } from '../components/members/realunit/Shared';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../modules/ui';
import * as memberActions from '../modules/member';

import enhanceWithClickOutside from 'react-click-outside';

class WriteMember extends Component {

	handleFocus = () => {
		const { focused, UIActions } = this.props;
		
		if(!focused) {
			UIActions.focusInput();
		}
	}

	handleClickOutside() {
		const { UIActions, focused, userid, firstname, lastname, gender, stat } = this.props;
		
		if(focused) {
			if(userid !== '' || firstname !== '' || lastname !== '' || gender !== '' || stat !== '') return;
			UIActions.blurInput();
		}
	}

	handleChange = (e) => {
		const { UIActions } = this.props;
		const { name, value } = e.target;

		UIActions.changeInput({name, value});
	}

	handleCreate = async () => {
        const { userid, firstname, lastname, gender, stat, MemberActions, UIActions } = this.props;
        try {
                await MemberActions.createMember({
                    userid, firstname, lastname, gender, stat
                });
                UIActions.resetInput();
                window.location = "/admin/members";
        } catch(e) {
            console.log(e);
        }
		
	}

    render() {
		const { handleFocus, handleChange, handleCreate } = this;
		const { focused, userid, firstname, lastname, gender, stat } = this.props;

        return (
			focused ? (
	            <WhiteBox>
    	            <InputSet onChange={handleChange} userid={userid} firstname={firstname} lastname={lastname} gender={gender} stat={stat}/>
					<SaveButton onClick={handleCreate}/>
            	</WhiteBox>
			) : (
				<WhiteBox onClick={handleFocus}>
					<InputPlaceholder/>
				</WhiteBox>
			)
        );
    }
}

export default connect(
    (state) => ({
        focused: state.ui.getIn(['write', 'focused']),
        userid: state.ui.getIn(['write', 'userid']),
        firstname: state.ui.getIn(['write', 'firstname']),
		lastname: state.ui.getIn(['write', 'lastname']),
		gender: state.ui.getIn(['write', 'gender']),
		stat: state.ui.getIn(['write', 'stat'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch),
		MemberActions: bindActionCreators(memberActions, dispatch)
    })
)(enhanceWithClickOutside(WriteMember));
