import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const Link = styled(GatsbyLink)([], props => ({
  color: 'inherit',
  textDecoration: props.textDecoration || 'none'
}))

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export default ({ children, href, ...rest }) => {
  if (/^\./.test(href)) {
    return <Link to={href} {...rest}>{children}</Link>
  }
  return <Link as="a" href={href} {...rest}>{children}</Link>
}
