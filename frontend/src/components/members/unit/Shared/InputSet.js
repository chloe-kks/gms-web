import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';


const StyledTextArea = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-weight: 300;
    font-size: 1.1rem;
    margin-top: 1rem;
    resize: none;
`;

class InputSet extends Component {

	static propTypes = {
		onChange: PropTypes.func,
		userid: PropTypes.string,
		firstname: PropTypes.string,
		lastname: PropTypes.string,
		gender: PropTypes.string,
		stat: PropTypes.string,
	}

	render() {
		const { onChange, userid, firstname, lastname, gender, stat } = this.props;
		return (
			<div>
				<StyledTextArea name="firstname" onChange={onChange} placeholder="First Name" value={firstname}/>
				<StyledTextArea name="lastname" onChange={onChange} placeholder="Last Name"value={lastname}/>
                <StyledTextArea name="userid" onChange={onChange} placeholder="User Id" value={userid}/>
				<StyledTextArea name="gender" onChange={onChange} placeholder="Gender" value={gender}/>
				<StyledTextArea name="stat" onChange={onChange} placeholder="Running/Stop" value={stat}/>
			</div>
		);
	}
}

export default InputSet;


