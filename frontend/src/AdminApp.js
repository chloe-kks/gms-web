import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Auth, Admin } from 'pages';
import HeaderContainer from 'containers/Base/HeaderContainer';

import storage from 'lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'modules/user';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/home/Main';
import Predicts from './components/predicts/Predicts';
import MemberApp from './containers/MemberApp';

class AdminApp extends Component {
/*    initializeUserInfo = async () => {

        const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니
다.
        if(!loggedInfo) return; // 로그인 정보가 없다면 여기서 멈춥니다.

        const { UserActions } = this.props;
        UserActions.setLoggedInfo(loggedInfo);
        try {
            await UserActions.checkStatus();
        } catch (e) {
            storage.remove('loggedInfo');
//            window.location.href = '/auth/login?expired';
        }
    }

    componentDidMount() {
        this.initializeUserInfo();
    }
*/
    render() {
        return (
			<BrowserRouter>
				<HeaderContainer/>
				<Route path="/admin/main" component={Main}/>
				<Route path="/admin/members" component={MemberApp}/>
				<Route path="/admin/predicts" component={Predicts}/>
			</BrowserRouter>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(AdminApp);
