import React from 'react';
import { Heading, Image, Link } from 'spectacle';
import styled from 'react-emotion';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridRowGap: 8,
  gridColumnGap: 8
});

export const DemoHeading = () => (
  <Heading size={2} caps fit>
    Demo(s)
  </Heading>
);

DemoHeading.Props = {
  bgImage: 'https://media.giphy.com/media/LRVnPYqM8DLag/giphy.gif',
  bgDarken: 0.25
};

export const Demo = () => (
  <Grid>
    <Link target="_blank" href="https://github.com/DSchau/graphql-rest-demo">
      <Image src={require('./images/rest-endpoint-optimized.png')} />
    </Link>
    <Image src={require('./images/query-optimized.png')} />
    <Image src={require('./images/mutation-optimized.png')} />
    <Link target="_blank" href="https://speaker-signup.netlify.com">
      <Image src={require('./images/speaker-signup-optimized.png')} />
    </Link>
  </Grid>
);
