import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function LogoutButton({ logout, history }) {
	const handleClick = () => {
		logout();
		history.push('/');
	}
	return (
		 <Button onClick={handleClick} variant="outline-info" inline>Sign Out</Button>
	);
}

export default withRouter(LogoutButton);
