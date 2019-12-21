import React, { Component } from 'react';
import { Header, LoginButton } from 'components/Base/Header';
//import LoginButton from 'components/Base/Header/LoginButton';
import { connect } from 'react-redux';
import * as userActions from 'modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';


class HeaderContainer extends Component {

    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/admin/main'; // 홈페이지로 새로고침
    }

    render() {
		const { visible, user } = this.props;
		if(!visible) return null;

        return (
            <Header>
                { user.get('logged') 
                    ? (<div>
                        {user.getIn(['loggedInfo', 'userid'])} <div onClick={this.handleLogout}>Logout</div>
                    </div> )
                    : <LoginButton/> 
                }
			</Header>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
		user: state.user
    }),
    (dispatch) => ({
		UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);
