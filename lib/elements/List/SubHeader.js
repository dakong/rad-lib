import styled from 'styled-components';
import * as colors from '../../styles/colors';

const SubHeader = styled.h1`
  font-size: 18px;
  margin: 16px;
  color: ${({ fontColor })  => colors[fontColor]};
`;

SubHeader.defaultProps = {
  fontColor: 'slate',
};

export default SubHeader;
