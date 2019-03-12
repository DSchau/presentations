import React from 'react';
import { CodePane, Heading, Image, Link } from 'spectacle';

export const ClientSideIntro = () => (
  <Heading size={2} fit caps textColor="primary">
    Client Side Integration
  </Heading>
);

ClientSideIntro.Props = {
  bgColor: 'secondary'
};

export const ApolloClientIntegration = () => (
  <Image src={require('./images/apollo.svg')} />
);

ApolloClientIntegration.Props = {
  bgColor: '#220a82'
};

export const ApolloBoostExample = () => null;

ApolloBoostExample.Props = {
  bgColor: 'primary',
  code: require('./code/apollo-boost').default,
  lang: 'jsx',
  ranges: [
    { loc: [0, 25], title: 'Apollo Boost' },
    { loc: [4, 12] },
    { loc: [14, 22] }
  ]
};

export const GraphCoolClientIntegration = () => (
  <Image src={require('./images/graphcool.svg')} />
);

GraphCoolClientIntegration.Props = {
  bgColor: '#27AE60'
};

export const NoticingTheTrend = () => (
  <Heading size={2} fit caps>
    Noticing a trend here?
  </Heading>
);

export const VanillaFetch = () => (
  <CodePane
    lang="js"
    source={require('./code/vanilla').default}
    textSize={24}
  />
);

VanillaFetch.Props = {
  bgImage: require('./images/vanilla-optimized.jpeg'),
  bgDarken: 0.5
};

export const URQL = () => (
  <Link href="https://github.com/FormidableLabs/urql" target="_blank">
    <Heading size={2}>urql</Heading>
  </Link>
);

URQL.Props = {
  bgImage: require('./images/urql-optimized.jpeg'),
  bgDarken: 0.5
};
