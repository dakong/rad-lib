import styled from 'styled-components';
import * as colors from '../../styles/colors';


const RowItem = styled.div`
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  user-select: none;
  flex: ${({ width }) => `0 0 ${ width }`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:last-child {
    border-bottom: none;
  }
`;

RowItem.defaultProps = {
  width: '100px',
};

export default RowItem;
