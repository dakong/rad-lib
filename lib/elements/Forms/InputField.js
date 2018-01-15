// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../styles/Forms/Input';
import Label from './Label';

type Props = {
  placeholder ?: string,
  size ?: string,
  inputChange?: Function,
  focusColor?: string,
  fullWidth?: boolean,
  inputFieldStyle?: Object,
  disabled?: boolean,
  showLabel?: boolean,
  floatingLabelStyle?: Object,
};

type State = {
  userInput: string,
  focused: boolean,
};

export default class InputField extends Component <Props, State> {
  static defaultProps = {
    showLabel: true,
  }
  state = {
    userInput: '',
    focused: false,
  };

  checkUserInput = (value: string) => {
    return value !== '' && value !== null && value !== undefined;
  }

  handleUserInput = (e: Object) => {
    this.setState({
      userInput: e.target.value,
    });

    if (this.props.inputChange !== undefined) {
      this.props.inputChange(e);
    }
  }

  handleFocus = () => {
    this.setState({
      focused: true,
    });
  }

  handleBlur = () => {
    this.setState({
      focused: false,
    });
  }

  setLabelColor = (focusColor: ?string) => {
    if (focusColor === undefined || !this.state.focused) {
      return 'silver';
    } else {
      return focusColor;
    }
  }

  showLabel = () => {
    return this.state.userInput !== '' || this.state.focused;
  }

  render() {
    const {
      placeholder,
      focusColor,
      size,
      fullWidth,
      disabled,
      floatingLabelStyle,
      inputFieldStyle,
      showLabel
    } = this.props;

    const focused = this.state.focused;
    const inputPlaceholder = focused ? '' : placeholder;
    const displayLabel = (this.showLabel() && showLabel);
    const labelColor = this.setLabelColor(focusColor);

    return (
      <InputWrapper
        fullWidth={fullWidth}
        size={size}
      >
        <Label
          size={size}
          style={floatingLabelStyle}
          textColor={labelColor}
          visible={displayLabel}
        >
          { placeholder }
        </Label>
        <Input
          disabled={disabled}
          focusColor={focusColor}
          onBlur={this.handleBlur}
          onChange={(e)=>{ this.handleUserInput(e);}}
          onFocus={this.handleFocus}
          placeholder={inputPlaceholder}
          size={size}
          style={inputFieldStyle}
        />
      </InputWrapper>
    );
  }
};

const InputWrapper = styled.div`
  margin-bottom: 4px;
  margin-top: 4px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '256px'};
`;

InputWrapper.defaultProps = {
  fullWidth: false,
};
