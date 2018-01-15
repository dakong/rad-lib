// @flow
import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../../styles/colors';


type Props = {
  onSelection: Function,
  primary: string,
  secondary: string,
  id: string,
  size: string,
  hoverStyle?: string,
}

export default (props : Props) => {
  return (
    <Item
      hoverStyle={props.hoverStyle}
      onClick={() => props.onSelection(props.id, props.primary)}
      size={props.size}
    >
      <Label size={props.size}>{props.primary}</Label>
      { props.secondary && <Label>{props.secondary}</Label> }
    </Item>
  );
};

const itemSize = {
  small: {
    height: '30px',
    fontSize: '14px',
    padding: '4px 8px',
  },
  medium: {
    height: '35px',
    fontSize: '16px',
    padding: '4px 8px',

  },
  large: {
    height: '45px',
    fontSize: '18px',
    padding: '6px 10px',
  },
  fullWidth: {
    height: '55px',
    fontSize: '18px',
    padding: '8px 16px',
  },
};

const Item = styled.div`
  background-color: ${colors['snow']};
  padding: ${({ size }) => itemSize[size]['padding']};
  border-bottom: solid 1px ${colors['smoke']};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ hoverStyle }) => colors[hoverStyle]};
    color: ${colors['snow']};
  }

`;

const Label = styled.p`
  margin: 4px 0;
  text-align: left;
  font-size: ${({ size }) => itemSize[size]['fontSize']};
`;

Label.defaultProps = {
  size: 'small',
};

Item.defaultProps = {
  size: 'small',
  hoverStyle: 'info',
};
