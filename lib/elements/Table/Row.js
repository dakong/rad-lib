import styled from 'styled-components';
import * as colors from '../../styles/colors';

function showBorder({ displayBorder }) {
  if (displayBorder) {
    return `solid 1px ${colors['darkSmoke']}`;
  }
  return 'none';
}

const Row = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border-bottom: ${ showBorder };
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  &:last-child {
    border-bottom: none;
  }
`;

export default Row;
