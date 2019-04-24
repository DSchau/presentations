import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 1rem;

  ${props => css`
    background-color: ${props.background};
    color: ${props.color};
  `}
`

export default function Box({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
