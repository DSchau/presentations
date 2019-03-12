import React from 'react';
import styled from 'react-emotion';
import { Image } from 'spectacle';

import logo from './logo.svg';
import { SPIN } from '../../style';

const Container = styled(Image)(
  {
    animation: `${SPIN} 20s linear infinite`,
    display: 'block',
    maxWidth: '50% !important',
    maxHeight: '50% !important',
    margin: '2rem auto'
  },
  props => props
);

export function GraphqlLogo(props) {
  return <Container src={logo} {...props} />;
}
