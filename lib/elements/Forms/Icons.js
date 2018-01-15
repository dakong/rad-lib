// @flow

import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import * as colors from '../../styles/colors';

import { selectTextAreaSize , inputHeight } from '../../styles/Forms/sizes';

const Keyboard = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['iconSize'],
})`
  position: absolute;
  right: 8px;
  &:before {
    line-height: ${({ size }) => inputHeight[size]['height']};
  }
  color: ${colors['silver']};
`;

const CaretDown = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['caretDownIcon'],
})`
  position: absolute;
  right: 12px;
  &:before {
    line-height: ${({ size }) => inputHeight[size]['height']};
  }
  color: ${colors['silver']};
`;

const CaretUp = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['caretUpIcon'],
})`
  position: absolute;
  right: 12px;
  &:before {
    line-height: ${({ size }) => inputHeight[size]['height']};
  }
  color: ${colors['silver']};
`;


const Close = styled.i.attrs({
  className: props => selectTextAreaSize[props.size]['closeIcon'],
})`
  position: absolute;
  right: ${({ size }) => selectTextAreaSize[size]['closeMargin']};
  &:before {
    line-height: ${({ size }) => inputHeight[size]['height']};
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
  CaretDown,
  CaretUp,
};
