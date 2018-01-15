import React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';

type Props = {
  size ?: string,
  alt ?: string,
  img ?: string,
  border ?: string,
  style ?: Object,
  shape ?: string,
};

const Avatar = (props: Props) => {
  return (
    <ImageWrapper
      border={props.border}
      shape={props.shape}
      size={props.size}
      style={props.style}
    >
      <Image
        alt={props.alt}
        src={props.img}
      />
    </ImageWrapper>
  );
};

const avatarSize = {
  "small" : {
    width: '24px',
  },
  "medium" : {
    width: '32px',
  },
  "large" : {
    width: '48px',
  },
};

function avatarShape({ shape, size }) {
  switch (shape) {
    case 'round':
      return '8px';

    case 'square':
      return '0px';

    case 'circle':
      return avatarSize[size]['width'];

    default:
      return '4px';
  }
}

function borderColor({ border }) {
  if (border === undefined) {
    return 'none';
  }
  return `solid 1px ${colors[border]}`;
}

const Image = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

const ImageWrapper = styled.div`
  width: ${({ size }) => avatarSize[size]['width']};
  height: ${({ size }) => avatarSize[size]['width']};
  border-radius: ${ avatarShape };
  border: ${ borderColor };
  overflow: hidden;
  display: inline-block;
  margin: 4px;
`;

Image.defaultProps = {
  shape: 'round',
};

ImageWrapper.defaultProps = {
  size: 'small',
};

export default Avatar;
