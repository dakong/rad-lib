// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import * as colors from '../../../styles/colors';
import Input from '../../../styles/Forms/Input';

import { Keyboard, Close, CaretDown, CaretUp } from '../Icons';

import Label from '../Label';

type Props = {
  onTextAreaClick: Function,
  clearValue: Function,
  placeholder?: string,
  value: string,
  isOpen: boolean,
  size: string,
  isValueSelected: boolean,
  focusColor: string,
  coloredLabel: boolean,
};

type State = {};

export default class SelectTextArea extends Component <Props, State> {

  handleTextAreaClick = () => {
    this.props.onTextAreaClick();
  };

  setLabelColor = (coloredLabel: boolean, focusColor: string, focused: boolean) => {
    if (coloredLabel) {
      if (focusColor === undefined || !focused) {
        return 'silver';
      } else {
        return focusColor;
      }
    }
    return undefined;
  }

  valueSelected = () => {
    return this.props.value !== '';
  }

  displayCaret = () => {
    if (this.props.isOpen) {
      return (<CaretUp size={this.props.size} />);
    } else {
      return (<CaretDown size={this.props.size} />);
    }
  }

  render() {
    const { value, placeholder, focusColor, isOpen, coloredLabel } = this.props;
    const showLabel = this.valueSelected() || isOpen;
    const inputPlaceholder = isOpen ? '' : placeholder;
    const textColor = this.setLabelColor(coloredLabel, focusColor, isOpen);

    return (
      <div>
        <Label
          size={this.props.size}
          textColor={textColor}
          visible={showLabel}
        >
          {placeholder}
        </Label>
        <TextArea>
          <InputField
            focusColor={this.props.focusColor}
            focused={this.props.isOpen}
            onClick={this.handleTextAreaClick}
            placeholder={inputPlaceholder}
            readOnly
            size={this.props.size}
            value={value}
          />
          { this.displayCaret() }
          { this.props.isValueSelected &&
            <Close
              onClick={()=>{this.props.clearValue();}}
              size={this.props.size}
            />
          }
        </TextArea>
      </div>
    );
  }
}

const InputField = Input.extend`
  background: ${ setFocused };
  outline: ${ setFocusedOutline };
  outline-offset: -2px;
`;

const TextArea = styled.div`
  width: 100%;
`;

TextArea.defaultProps = {
  size: 'medium'
};

InputField.default = {
  focused: false,
  focusColor: 'info',
};

function setFocused({ focused }) {
  return focused ? colors['extraDarkSnow'] : colors['snow'];
}

function setFocusedOutline({ focused, focusColor }) {
  return focused ? `solid 2px ${colors[focusColor]}` : `none`;
}
