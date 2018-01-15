// @flow

import * as gradients from '../styles/gradients';
import RoundButton from './RoundButton';

const RoundButtonGradient = RoundButton.extend`
  background: ${({ bgColor }) => gradients[bgColor]};
  &:hover {
    background: ${({ bgColor }) => gradients[bgColor]};
  }
`;

RoundButtonGradient.defaultProps = {
  bgColor: 'ibizaSunset',
  fontColor: 'white',
  size: 'medium',
};

export default RoundButtonGradient;
