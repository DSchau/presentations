import React from 'react';
import styled from 'react-emotion';

const Container = styled('span')(
  {
    fontSize: 128
  },
  props => props
);

export function Emoji({ ariaLabel, children, className, ...rest }) {
  return (
    <Container
      aria-label={ariaLabel}
      role="img"
      className={className}
      {...rest}
    >
      {children}
    </Container>
  );
}
