import React, { Component } from 'react';
import WriteMember from './WriteMember';

import * as memberActions from '../modules/member';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MemberListContainer from './MemberListContainer';
import MemberViewerContainer from './MemberViewerContainer';

class MemberApp extends Component {

    componentDidMount() {
        const { MemberActions } = this.props;
        MemberActions.getInitialMember();
    }

    render() {
        return (
			<div>
				<WriteMember/>
				<MemberListContainer/>
				<MemberViewerContainer/>
			</div>
				
        );
    }
}

export default connect(
	(state) => ({}),
	(dispatch) => ({
		MemberActions: bindActionCreators(memberActions, dispatch)
	})
)(MemberApp);
