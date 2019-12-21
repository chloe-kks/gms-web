import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return(
			<div>
				<div>Password : </div>
				<form>
					<input placeholder="password"></input>
				</form>
				<div>Address : </div>
					<input placeholder="291, Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea"></input>
				<div>Phone number: </div>
					<input placeholder="010-1111-1111"></input>
			</div>
		);
	}
}

export default Profile;
