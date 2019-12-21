import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginButton from 'components/Base/Header/LoginButton';

import './common.css';

class NavigationBar extends Component {
	render() {
		return (
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/admin/main">
						<img style={{ width: 50, height: 50}} src={require('../../static/image/gms.png')}/>
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/admin/main">Home</Nav.Link>
						<Nav.Link href="/admin/predicts">Predicts</Nav.Link>
						<Nav.Link href="/admin/members">Members</Nav.Link>
					</Nav>
					<LoginButton/>
				</Navbar>
		);
	}
}

export default NavigationBar;
