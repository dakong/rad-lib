// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';
import * as colors from '../../styles/colors';

import { selectTextAreaSize } from '../../styles/Forms/sizes';

const Keyboard = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['iconSize'],
})`
  position: absolute;
  right: 8px;
  &:before {
    line-height: ${({ size }) => selectTextAreaSize[size]['height']};
  }
  color: ${colors['silver']};
`;

const Close = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['closeIcon'],
})`
  position: absolute;
  right: ${({ size }) => selectTextAreaSize[size]['closeMargin']};
  &:before {
    line-height: ${({ size }) => selectTextAreaSize[size]['height']};
  }

  color: ${colors['danger']};
  cursor: pointer;

`;

Keyboard.defaultProps = {
  size: 'small'
};

Close.defaultProps = {
  size: 'small'
};

export {
  Keyboard,
  Close,
};
