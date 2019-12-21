import React, { Component } from 'react';
import { HeaderUser } from 'components/Base/Header';
import LoginButtonUser from 'components/Base/Header/LoginButtonUser';
import { connect } from 'react-redux';
import * as userActions from 'modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';


class HeaderContainerUser extends Component {

    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }

    render() {
		const { visible, user } = this.props;
		if(!visible) return null;
        return (
            <HeaderUser>
                { user.get('logged') 
                    ? (<div>
                        {user.getIn(['loggedInfo', 'userid'])} <div onClick={this.handleLogout}>Logout</div>
                    </div> )
                    : <LoginButtonUser/> 
                }
			</HeaderUser>
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
)(HeaderContainerUser);
