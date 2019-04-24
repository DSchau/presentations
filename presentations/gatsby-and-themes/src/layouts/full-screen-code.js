import styled from '@emotion/styled';

const FullCode = styled.div({
  width: '100vw',
  height: '100vh',
  textAlign: 'left',
  backgroundColor: `white`,
  '& pre': {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '100vw',
    height: '100vh'
  }
});

export default FullCode;