import styled from 'styled-components';
import * as colors from '../../styles/colors';

function showBorder({ displayBorder }) {
  if (displayBorder) {
    return `solid 1px ${colors['darkSmoke']}`;
  }
  return 'none';
}

const List = styled.div`
  max-width: ${({ maxWidth }) => maxWidth + 'px'};
  min-width: ${({ minWidth }) => minWidth + 'px'};
  width: 100%;
  border: ${ showBorder };
  display: block;
  overflow: auto;
`;

List.defaultProps = {
  maxWidth: 368,
  minWidth: 320,
  displayBorder: false,
};

export default List;
