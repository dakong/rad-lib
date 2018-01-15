import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
  style?: Object,
}

const Container = (props: Props) => {
  return (
    <ContainerStyle style={props.style}>{props.children}</ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  padding: 8px 16px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
