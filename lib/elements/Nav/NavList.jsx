// @flow
import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../../styles/colors';

type Props = {
  children?: React.Node,
  expanded: boolean,
}

export default (props: Props) => {
  return (
    <NavbarCollapse>
      <List expanded={props.expanded}>
        {props.children}
      </List>
    </NavbarCollapse>
  );
};

function onNavbarToggle({ expanded }) {
  if (expanded) {
    return 'block';
  }
  return 'none';
}

const NavbarCollapse = styled.div`
  transition: height .15s ease-in;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  line-height: 34px;
  float: right;
  transition: height .15s ease-in;

  @media (max-width: 600px) {
    display: ${onNavbarToggle};
    float: none;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
`;
