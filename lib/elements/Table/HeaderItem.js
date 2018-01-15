// @flow

import React from 'react';
import * as colors from '../../styles/colors';
import { CaretDown, CaretUp } from './Icons';

import Item from './RowItem';

type Props = {
  attribute: string,
  value: string,
  width: string,
  direction: number, // -1 for descending, 1 for ascending, 0 for nothing set
  onToggle: Function,
};

const TableHeader = (props: Props) => {

  const renderIcon = (direction: number, attribute: string) => {
    if (direction === -1) {
      return (<CaretDown value={attribute} />);
    } else if (direction === 1) {
      return (<CaretUp value={attribute} />);
    } else {
      return null;
    }
  };

  return (
    <HeaderItem
      onClick={(e)=> props.onToggle(e)}
      value={props.attribute}
      width={props.width}
    >
      {props.value}
      {renderIcon(props.direction, props.attribute)}
    </HeaderItem>
  );
};

const HeaderItem = Item.extend`
  font-size: 14px;
  color: ${colors['silver']};
  cursor: pointer;
`;


export default TableHeader;
