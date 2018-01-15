import styled from 'styled-components';
import { inputHeight } from '../../styles/Forms/sizes';
import * as colors from '../../styles/colors';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder
})`
  background: ${colors['snow']};
  height: ${({ size }) => inputHeight[size]['height']};
  width: 100%;
  padding: ${({ size }) => inputHeight[size]['padding']};
  border-radius: 3px;
  font-size: ${({ size }) => inputHeight[size]['fontSize']};
  border: solid 1px ${colors['smoke']};
  box-sizing: border-box;
  color: ${colors['steel']};
  &:focus {
    ${({ focusColor }) => `outline: solid 2px ${colors[focusColor]}`};
  }
`;

Input.defaultProps = {
  size: 'small',
  placeholder: 'Placeholder',
  focusColor: 'info',
  height: 'medium',
};

export default Input;
