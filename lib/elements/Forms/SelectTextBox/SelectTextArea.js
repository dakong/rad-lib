// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import * as colors from '../../../styles/colors';
import { selectTextAreaSize } from '../../../styles/Forms/sizes';
import {Keyboard, Close } from '../Icons';

import Label from '../Label';

type Props = {
  onTextAreaClick: Function,
  clearValue: Function,
  placeholder?: string,
  value: string,
  isOpen: boolean,
  size: string,
  isValueSelected: boolean,
  label?: string,
};

type State = {};

export default class SelectTextArea extends Component <Props, State> {

  handleTextAreaClick = () => {
    this.props.onTextAreaClick();
  };

  render() {
    const { value, placeholder, label } = this.props;
    let text, state;

    if (value) {
      text = value;
      state="selected";
    } else {
      text = placeholder;
      state="placeholder";
    }

    return (
      <div>
        <Label size={this.props.size}>
          {label}
        </Label>
        <TextArea
          state={state}
          focused={this.props.isOpen}
          onClick={()=>{this.handleTextAreaClick()}}
          size={this.props.size}>
          {text}
          <Keyboard size={this.props.size}/>
          { this.props.isValueSelected &&
            <Close
              onClick={()=>{this.props.clearValue()}}
              size={this.props.size}
            />
          }
        </TextArea>
      </div>
    );
  }
}

const stateStyle = {
  placeholder: colors['silver'],
  selected: colors['steel'],
};

const TextArea = styled.div`
  background: ${setFocused};
  height: ${({ size }) => selectTextAreaSize[size]['height']};
  padding: ${({ size }) => selectTextAreaSize[size]['padding']};
  border-radius: 3px;
  font-size: ${({ size }) => selectTextAreaSize[size]['fontSize']};
  border: solid 1px ${colors['smoke']};
  line-height: ${({ size }) => selectTextAreaSize[size]['height']};
  text-align: left;
  color: ${ setState };
  user-select: none;
`;

TextArea.defaultProps = {
  size: 'small'
};

function setFocused({ focused }) {
  return focused ? colors['extraDarkSnow'] : colors['snow'];
}

function setState({ state }) {
  return stateStyle[state];
}
