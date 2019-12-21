import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Sizer = styled.div`
    display: inline-block;
    width: 25%;
    padding: 5px;
`;

const Square = styled.div`
    height:8rem;
    position: relative;
    background: white;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;

const Contents = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    white-space: pre-wrap;
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 1.2rem;
`;

const Body = styled.div`
    font-size: 1.1rem;
    color: ${oc.gray[7]};
`;

class Member extends Component {
	static propTypes = {
		member: ImmutablePropTypes.mapContains({
			_id: PropTypes.string.isRequired,
			userid: PropTypes.string,	
			firstname: PropTypes.string,
			lastname: PropTypes.string,
			gender: PropTypes.string,
			stat: PropTypes.string
		}),
		onOpen: PropTypes.func
	}

	handleClick = () => {
		const { member, onOpen } = this.props;
		onOpen(member);
	}

	render() {
		const { userid, firstname, lastname, gender, stat } = this.props.member.toJS();
		const { handleClick } = this;

        return (
            <Sizer>
                <Square onClick={handleClick}>
                    <Contents>
                        <Title>{firstname} {lastname}</Title>
                        <Body>{userid}</Body>
                        <Body>{gender}</Body>
                        <Body>{stat}</Body>
                    </Contents>
                </Square>
            </Sizer>
        );
	}
}

export default Member;
