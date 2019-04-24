import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;

  height: 100vh;
  width: 100vw;
`

export default function QuoteSlide({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}