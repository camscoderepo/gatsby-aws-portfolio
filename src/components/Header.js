import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


import { FixedBar } from '../components';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.div`
    background-image: url(${myImage});
`


export const Header = () => {
    return (
      <HeaderWrapper>
        <Logo/>
        <Link to="/about">
          <p>About</p>
        </Link>
      </HeaderWrapper>
    );
  };
  