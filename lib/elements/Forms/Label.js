// @flow
import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { labelSize } from '../../styles/Forms/sizes';

function visibility({ visible }) {
  if (visible) {
    return 'visible';
  } else {
    return 'hidden';
  }
};

const Label = styled.label`
  color: ${({ textColor }) => colors[textColor]};
  margin-bottom: ${({ size }) => labelSize[size]['margin']};
  margin-top: ${({ size }) => labelSize[size]['margin']};
  display: inline-block;
  font-size: ${({ size }) => labelSize[size]['fontSize']};
  visibility: ${ visibility };
  overflow: hidden;
  white-space: nowrap;
  display:  block;
  text-overflow: ellipsis;
`;

Label.defaultProps = {
  size: 'small',
  visible: 'true',
  textColor: 'slate',
};

export default Label;
