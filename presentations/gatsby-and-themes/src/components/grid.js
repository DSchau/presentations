import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: '100%',
  gridColumnGap: 100,
  ...props.cols && {
    '@media only screen and (min-width: 768px)': {
      gridTemplateColumns: `repeat(${props.cols}, 1fr)`
    }
  }
}))


export default function Grid({ cols, children, ...rest }) {
  return (
    <Container cols={cols} {...rest}>
      {React.Children.map(children, (child, index) => <span key={index} style={{ fontSize: 48 }}>{child}</span>)}
    </Container>
  )
}
