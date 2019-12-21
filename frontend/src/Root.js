import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/common/NavigationBar';
import App from './App';
import Main from './components/home/Main';
//import Members from './components/members/Members';
import Predicts from './components/predicts/Predicts';
//import Profile from './components/profile/Profile';
import ProfileTest from './components/profile/ProfileTest';
import MemberApp from './containers/MemberApp';
import Login from './components/common/Login';

class Root extends Component {
    render() {
        return (
			<BrowserRouter>
				{/*<NavigationBar/>*/}
				<Route path="/" component={App}/>
			</BrowserRouter>
        );
    }
}

export default Root;
