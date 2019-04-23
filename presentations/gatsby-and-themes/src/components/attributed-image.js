import React from 'react'
import styled from '@emotion/styled'

import Image from './image'

const AttributionContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: black;
  width: 100%;
`

const Attribution = styled.p`
  color: white;
  margin: 0;
  font-size: 22px;
  padding: 4px;
`

export default function AttributedImage({ src, cite, ...rest }) {
  return (
    <Image src={src} {...rest}>
      <AttributionContainer><Attribution>{cite}</Attribution></AttributionContainer>
    </Image>
  )
}