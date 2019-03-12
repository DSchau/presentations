import React from 'react';
import { CodePane, Heading, Image, S as Span } from 'spectacle';

import { GraphqlLogo } from '../../components';

export const RestKillerRevisited = () => (
  <Heading size={2} caps fit>
    Is it a REST killer?
  </Heading>
);

export const NoRevisited = () => (
  <React.Fragment>
    <Heading size={1} caps fit textColor="primary">
      No
    </Heading>
    <Heading size={6}>&hellip; because it's a REST enhancer</Heading>
  </React.Fragment>
);

NoRevisited.Props = {
  bgColor: 'secondary'
};

export const IntegrationIntro = () => (
  <Heading size={2} caps fit textColor="primary">
    Integration
  </Heading>
);

IntegrationIntro.Props = {
  bgColor: 'secondary'
};

export const ExistingApi = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <Heading size={2} textColor="white">
      Layer in front of your existing REST APIs
    </Heading>
    <GraphqlLogo style={{ position: 'absolute' }} />
  </div>
);

export const BusinessLogic = () => (
  <Heading size={2} caps fit>
    Keep your business logic intact
  </Heading>
);

export const GradualAdoption = () => (
  <Heading size={2} caps fit>
    Adopt GraphQL <Span type="italic">Gradually</Span>
  </Heading>
);

export const ApolloIntegration = () => (
  <Image src={require('./images/apollo.svg')} />
);

ApolloIntegration.Props = {
  bgColor: '#220a82'
};

export const GraphCoolIntegration = () => (
  <Image src={require('./images/graphcool.svg')} />
);

GraphCoolIntegration.Props = {
  bgColor: '#27AE60'
};

export const RESTExamplesSnippets = () => (
  <div>
    {['/user', '/user/:id', '/graphql'].map(endpoint => (
      <CodePane
        lang="markup"
        source={endpoint}
        key={endpoint}
        textSize={48}
        style={{ margin: '2rem 0' }}
      />
    ))}
  </div>
);
