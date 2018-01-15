import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
}

const GridRow = (props: Props) => {
  return (
    <Row>{props.children}</Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  @media (max-width: 400px) {
    display: block;
  }
`;

export default GridRow;
