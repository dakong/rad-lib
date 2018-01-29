// @flow
import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../../styles/colors';

type Props = {
  children?: React.Node,
}

export default (props: Props) => {
  return (<NavItem> {props.children} </NavItem>);
};

const NavItem = styled.li`
  list-style-type: none;
  display: inline;
  padding-left: 16px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 600px) {
    padding-left: 0;
    display: block;
    padding-top: .425rem;
    padding-bottom: .425rem;
  }
`;
