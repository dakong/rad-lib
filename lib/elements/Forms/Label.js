import React, { Component } from 'react';
import styled from 'styled-components';

import * as colors from '../../styles/colors';
import { labelSize } from '../../styles/Forms/sizes';

const Label = styled.label`
  color: ${colors['slate']};
  margin-bottom: ${({ size }) => labelSize[size]['margin']};
  display: inline-block;
  font-size: ${({ size }) => labelSize[size]['fontSize']}
`
Label.defaultProps = {
  size: 'small',
}
export default Label;
