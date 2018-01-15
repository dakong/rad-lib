// @flow
import Button from './Button';

const buttonSizes = {
  small: {
    'border-radius': '15px',
    'padding': '0 16px',
  },
  medium: {
    'border-radius': '20px',
    'padding': '0 24px',
  },
  large: {
    'border-radius': '25px',
    'padding': '0 32px',
  },
  wide: {
    'border-radius': '20px',
    'padding': '0 36px',
  },
  extraWide: {
    'border-radius': '20px',
    'padding': '0 72px',
  },
  fullWidth: {
    'border-radius': '20px',
    'padding': '0 8px',
  },
};

const RoundButton = Button.extend`
  border-radius: ${({ size }) => buttonSizes[size]['border-radius']};
  padding: ${({ size }) => buttonSizes[size]['padding']};
`;

RoundButton.defaultProps = {
  borderColor: false,
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
};

export default RoundButton;
