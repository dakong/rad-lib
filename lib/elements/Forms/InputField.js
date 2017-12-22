import React from 'react';
import styled from 'styled-components';

import * as colors from '../../styles/colors';

const Input = styled.input`
  background: ${colors['snow']};
  height: 25px;
  width: 250px;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 16px;
  border: solid 1px ${colors['smoke']};
  &:focus {
    outline: solid 2px ${colors['info']};
  }
`;

const InputField = ({placeholder}) => {
  return (<Input placeholder={placeholder} type="text"/>);
};


export default InputField;
