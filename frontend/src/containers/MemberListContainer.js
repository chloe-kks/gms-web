import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemberList from '../components/memberList';
import { bindActionCreators } from 'redux';
import * as uiActions from '../modules/ui';

class MemberListContainer extends Component {
	render() {
		const { members, UIActions } = this.props;
		return (
			<MemberList
				members={members}
				onOpen={UIActions.openViewer}
			/>
		);
	}
}

export default connect(
	(state) => ({
		members: state.member.get('data')
	}),
	(dispatch) => ({
		UIActions: bindActionCreators(uiActions, dispatch)
	})
)(MemberListContainer);


