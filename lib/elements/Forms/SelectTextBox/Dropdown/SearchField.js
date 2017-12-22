// @flow
import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../../styles/colors';
import 'font-awesome/css/font-awesome.min.css';

type Props = {
  placeholder: string,
  onFieldChange: Function,
  focus: boolean,
  size: string,
}

const SearchField = ({ placeholder, onFieldChange, focus, size}: Props) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={(e)=>onFieldChange(e)}
        focus={focus}
        size={size}
      />
    <SearchIcon size={size} />
    </div>
  );
}

const inputSize = {
  small: {
    height: '30px',
    fontSize: '14px',
    iconSize: 'fa fa-search',
    padding: '4px 8px',
  },
  medium: {
    height: '35px',
    fontSize: '16px',
    iconSize: 'fa fa-search fa-lg',
    padding: '4px 8px',

  },
  large: {
    height: '45px',
    fontSize: '18px',
    iconSize: 'fa fa-search fa-lg',
    padding: '8px 16px',
  },
  fullWidth: {
    height: '55px',
    fontSize: '22px',
    iconSize: 'fa fa-search fa-2x',
    padding: '8px 16px',
  },
}

const SearchIcon = styled.i.attrs({
  className: props => inputSize[props.size]['iconSize'],
})`
  position: absolute;
  right: 16px;
  color: ${colors['silver']};
  &:before {
    line-height: ${({ size }) => inputSize[size]['height']};
  }
`;

SearchIcon.defaultProps = {
  size: 'small'
}

const Input = styled.input.attrs({
  type: 'text',
  autoFocus: true
})`
  background: ${colors['snow']};
  height: ${({ size }) => inputSize[size]['height']};
  width: 100%;
  padding: ${({ size }) => inputSize[size]['padding']};
  border-radius: 3px;
  font-size: ${({ size }) => inputSize[size]['fontSize']};
  border: solid 1px ${colors['smoke']};
  box-sizing: border-box;
  &:focus {
    outline: solid 2px ${colors['info']};
  }
`;

Input.defaultProps = {
  size: 'medium'
}

export default SearchField;
