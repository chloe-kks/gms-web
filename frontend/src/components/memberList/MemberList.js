import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Member from './Member';

const Wrapper = styled.div`
    display: block;
    margin-top: 0.5rem;
    font-size: 0px; /* inline-block 위아래 사이에 생기는 여백을 제거합니다 */
`;

const MemberList = ({members, onOpen}) => {
	const memberList = members.map(
		member => (
			<Member
				key={member.get('_id')}
				member={member}
				onOpen={onOpen}
			/>
		)
	);
	return (
		<Wrapper>
			{memberList}
		</Wrapper>
	);
};

MemberList.propTypes = {
	members: ImmutablePropTypes.listOf(
		ImmutablePropTypes.mapContains({
            _id: PropTypes.string.isRequired,
            userid: PropTypes.string,
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            gender: PropTypes.string,
            stat: PropTypes.string
		})
	),
	onOpen: PropTypes.func
}

export default MemberList;


