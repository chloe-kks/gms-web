import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Sizer = styled.div`
    display: inline-block;
    width: 100%;
    padding: 5px;
`;

const Square = styled.div`
	height: 100px;
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
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
    overflow: hidden;
`;

const Userid = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Asd = styled.div`
	font-weight: 700;
	font-size: 1.1rem;
    color: ${oc.gray[7]};
`;

const Body = styled.div`
	display:flex;
	flex-direction: row;
    font-size: 1.1rem;
    font-weight: 300;
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

	render() {
		const { userid, firstname, lastname, gender, stat } = this.props.member.toJS();
        return (
            <Sizer>
                <Square>
                    <Contents>
                        <Userid>{firstname} {lastname}</Userid>
						<Row>
                        <Body><Asd>UserID:</Asd> {userid}</Body>
                        <Body><Asd>Gender:</Asd> {gender}</Body>
                        <Body><Asd>Status:</Asd> {stat}</Body>
						</Row>
                    </Contents>
                </Square>
            </Sizer>
        );
	}
}

export default Member;
