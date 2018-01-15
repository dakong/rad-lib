// @flow
import styled from 'styled-components';
import { darken } from 'polished';
import * as colors from '../styles/colors';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    'padding': '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    'padding': '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    'padding': '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    'padding': '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    'padding': '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    'padding': '0 8px',
  },
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}

function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

function setHoverBg({ bgColor, hoverBg }) {
  if (hoverBg !== false && hoverBg !== undefined) {
    return colors[hoverBg];
  }
  else if (colors[bgColor][0] === '#' && colors[bgColor].length === 7) {
    return darken(0.1, colors[bgColor]);
  }
  return colors[bgColor];
}
function setHoverFontColor({ hoverText, fontColor }) {
  if (hoverText !== false) {
    return colors[hoverText];
  } else {
    return colors[fontColor];
  }
}

function setBorderColor({ borderColor }) {
  if (borderColor === false || borderColor === undefined) {
    return 'none';
  } else {
    return `solid 1px ${colors[borderColor]}`;
  }
}

const Button = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  border: ${ setBorderColor };
  border-radius: 3px;
  color: ${({ fontColor })  => colors[fontColor]};
  cursor: pointer;
  display: ${ setDisplay };
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  transition: all 300ms ease;
  width: ${ setWidth };
  &:hover {
    background: ${ setHoverBg };
    color: ${ setHoverFontColor };
  }
`;

Button.defaultProps = {
  borderColor: false,
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
  hoverBg: false,
  hoverText: false,
};

export default Button;
