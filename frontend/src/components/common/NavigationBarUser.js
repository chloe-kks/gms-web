import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginButtonUser from 'components/Base/Header/LoginButtonUser';

import './common.css';

class NavigationBarUser extends Component {
	render() {
		return (
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/user/main">
						<img style={{ width: 50, height: 50}} src={require('../../static/image/gms.png')}/>
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/user/main">Home</Nav.Link>
						<Nav.Link href="/user/predicts">Predicts</Nav.Link>
						<Nav.Link href="/user/profile">profile</Nav.Link>
					</Nav>
					<LoginButtonUser/>
				</Navbar>
		);
	}
}

export default NavigationBarUser;
