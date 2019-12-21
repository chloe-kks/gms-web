import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'modules/base';
import { AuthWrapper } from 'components/Auth';
import { Route } from 'react-router-dom';
import { Login, Register, AdminLogin } from 'containers/Auth';

class Admin extends Component {
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }

    render() {
        return (
			<AuthWrapper>
				<Route path="/adauth/login" component={AdminLogin}/>
				<Route path="/adauth/register" component={Register}/>
			</AuthWrapper>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Admin);
