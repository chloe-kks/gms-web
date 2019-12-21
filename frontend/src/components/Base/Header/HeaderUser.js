import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from 'lib/styleUtils';
import NavigationBarUser from 'components/common/NavigationBarUser';

const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100%;
	margin-bottom: 20px;
    ${shadow(1)}
`;

const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const HeaderUser = ({children}) => {
    return (
        <Positioner>
{/*            <WhiteBackground>
                <HeaderContents>
                    <Logo></Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>*/}
			<NavigationBarUser>{children}</NavigationBarUser>
        </Positioner>
    );
};

export default HeaderUser;
