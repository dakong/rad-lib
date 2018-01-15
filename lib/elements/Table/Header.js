import styled from 'styled-components';
import * as colors from '../../styles/colors';

import Row from './Row';


const TableHeader = Row.extend`
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

TableHeader.defaultProps = {
  width: '100px',
};

export default TableHeader;
