// @flow
import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import 'font-awesome/css/font-awesome.min.css';

import NavList from '../elements/Nav/NavList';

type Props = {
  children?: React.Node,
}

type State = {
  open: boolean,
}

export default class Navbar extends React.Component <Props, State> {
  state = {
    open: false,
  }

  onContextMenuClick = () => {
    this.setState ({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <NavbarComponent>
        <ContextMenuWrapper>
          <ContextMenu
            onClick={()=>this.onContextMenuClick()}
            selected={this.state.open}
          />
        </ContextMenuWrapper>
        <NavList expanded={this.state.open}>
          {this.props.children}
        </NavList>
      </NavbarComponent>
    );
  }
};



const NavbarComponent = styled.nav`
  z-index: 999999;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: ${colors['snow']};
`;

const ContextMenuWrapper = styled.div`
  display: block;
  height: 34px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }

`;
const ContextMenu = styled.i.attrs({
  className: 'fa fa-bars fa-lg',
  'aria-hidden': 'true',
})`
  padding: 8px 12px;
  border: solid 1px ${colors['slate']};
  color: ${colors['slate']};
  border-radius: 3px;
  float: right;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ?
      colors['extraDarkSnow'] :
      colors['snow']};
`;
