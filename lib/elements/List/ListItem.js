import React from 'react';
import styled from 'styled-components';
import * as colors from '../../styles/colors';
import Avatar from '../Avatar';

type Props = {
  primaryText ?: string,
  leftAvatar ?: string,
  onClick ?: Function,
  displayBorder ?: boolean,
}

function shouldDisplayAvatar(leftAvatar) {
  return leftAvatar !== undefined ? true : false;
}

const ListItem = (props: Props) => {
  const displayAvatar = shouldDisplayAvatar(props.leftAvatar);
  return (
    <ItemWrapper
      displayBorder={props.displayBorder}
      onClick={props.onClick}
    >
      { displayAvatar &&
        <AvatarWrapper>
          <Avatar
            alt="Avatar"
            img={props.leftAvatar}
            shape="circle"
            size="medium"
          />
        </AvatarWrapper>
      }
      <Item
        hasAvatar={displayAvatar}
      >
        {props.primaryText}
      </Item>
    </ItemWrapper>
  );
};

function calculatePadding({ hasAvatar }) {
  if (hasAvatar) {
    return '16px 16px 16px 72px';
  }
  return '16px';
}

function showBorder({ displayBorder }) {
  if (displayBorder) {
    return `solid 1px ${colors['darkSmoke']}`;
  }
  return 'none';
}

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
`;

const Item = styled.div`
  width: 100%;
  padding: ${ calculatePadding };
  box-sizing: border-box;
  font-size: 16px;
  user-select: none;
`;

const ItemWrapper = styled.div`
  position: relative;
  cursor: pointer;

  border-bottom: ${ showBorder };

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${colors['darkSmoke']};
  }
`;

ItemWrapper.defaultProps = {
  displayBorder: false,
};


export default ListItem;
