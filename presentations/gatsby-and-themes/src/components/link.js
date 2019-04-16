import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'

const Link = styled(GatsbyLink)(props => ({
  color: 'inherit',
  textDecoration: props.textDecoration || 'none'
}))

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

const External = Link.withComponent(`a`)

export default ({ children, href, ...rest }) => {
  if (/^\./.test(href)) {
    return <Link to={href} {...rest}>{children}</Link>
  }
  return <External href={href} {...rest}>{children}</External>
}
