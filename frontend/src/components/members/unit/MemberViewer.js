import React from 'react';
import { InputSet, SaveButton } from './Shared';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

import { FaTrash } from 'react-icons/fa';

const Dimmed = styled.div`
	background: ${oc.gray[3]};
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	position: fixed;
	z-index: 10;
	opacity: 0.5;
`;

const Viewer = styled.div`
	background: white;
	position: fixed;
	height: auto;
	z-index: 15;

	padding: 10px;
	top:50%;
	left:50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const TrashButton = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	color: ${oc.gray[6]};
	$:hover {
		color: ${oc.gray[7]};
	}

	&:active{
		color: ${oc.gray[8]};
	}
	font-size: 10px;
`;

const MemberViewer = ({visible, userid, firstname, lastname, gender, stat, onChange, onUpdate, onDelete, onClose}) => {

	if(!visible) return null;
	
	return (
		<div>
			<Dimmed onClick={onClose}/>
			<Viewer>
				<InputSet userid={userid} firstname={firstname} lastname={lastname} gender={gender} stat={stat} onChange={onChange}/>
				<SaveButton onClick={onUpdate}/>
				<TrashButton onClick={onDelete}>
					<FaTrash/>
				</TrashButton>
			</Viewer>
		</div>
	);
};

MemberViewer.propTypes = {
	visible: PropTypes.bool,
	userid: PropTypes.string,
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	gender: PropTypes.string,
	stat: PropTypes.string,
	onChange: PropTypes.func,
	onUpdate: PropTypes.func,
	onDelete: PropTypes.func
}

export default MemberViewer;
