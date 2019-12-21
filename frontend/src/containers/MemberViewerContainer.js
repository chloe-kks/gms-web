import React, { Component } from 'react';
import MemberViewer from '../components/members/realunit/MemberViewer';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../modules/ui';
import * as memberActions from '../modules/member';

class MemberViewerContainer extends Component {

    handleChange = (e) => {
        const { UIActions } = this.props;
        const { name, value } = e.target;

        UIActions.changeViewerInput({
            name, value
        });
    }

    handleUpdate = () => {
        const { MemberActions, UIActions, member } = this.props;
        const { _id, userid, firstname, lastname, gender, stat } = member.toJS();
        MemberActions.updateMember({
            _id,
            member: { userid, firstname, lastname, gender, stat }
        });
        UIActions.closeViewer();
    }

    handleDelete = () => {
        const { MemberActions, UIActions, member } = this.props;
        const { _id } = member.toJS();
        MemberActions.deleteMember(_id);
        UIActions.closeViewer();
    }

    render() {
        const { visible, member, UIActions } = this.props;
        const { userid, firstname, lastname, gender, stat } = member.toJS();
        const { handleChange, handleUpdate, handleDelete } =this;

        return (
            <MemberViewer
                visible={visible}
                userid={userid}
                firstname={firstname}
				lastname={lastname}
				gender={gender}
				stat={stat}
                onChange={handleChange}
                onClose={UIActions.closeViewer}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
            />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.ui.getIn(['member', 'open']),
        member: state.ui.getIn(['member', 'info'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch),
        MemberActions: bindActionCreators(memberActions, dispatch)
    })
)(MemberViewerContainer);
