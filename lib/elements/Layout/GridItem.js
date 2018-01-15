import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
  col?: number,
}

const GridItem = (props: Props) => {
  if (props.col < 1 || props.col > 8) {
    console.log('throw error');
  }

  return (
    <Item col={props.col}>{props.children}</Item>
  );
};

const columnStyle = {
  1: {
    'width': '12.5%',
  },
  2: {
    'width': '25%',
  },
  3: {
    'width': '37.5%',
  },
  4: {
    'width': '50%',
  },
  5: {
    'width': '62.5%',
  },
  6: {
    'width': '75%',
  },
  7: {
    'width': '87.5%',
  },
  8: {
    'width': '100%',
  },
};

const Item = styled.div`
  width: ${({ col }) => columnStyle[col]['width']};
  box-sizing: border-box;
  padding: 4px 8px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

Item.defaultProps = {
  col: 2,
};

export default GridItem;
