import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import * as colors from '../../styles/colors';

const CaretDown = styled.i.attrs({
  className: 'fa fa-caret-down',
  'aria-hidden': 'true',
})`
  color: ${colors['silver']};
  padding-left: 8px;
`;

const CaretUp = styled.i.attrs({
  className: 'fa fa-caret-up',
  'aria-hidden': 'true',
})`
  color: ${colors['silver']};
  padding-left: 8px;
`;

export {
  CaretDown,
  CaretUp,
};
