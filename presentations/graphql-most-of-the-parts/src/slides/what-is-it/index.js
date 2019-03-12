import React from 'react';
import { CodePane, Heading, S as Span } from 'spectacle';
import styled from 'react-emotion';
import { css } from 'emotion';

import { Emoji, GraphqlPlayground } from '../../components';
import { APPEAR } from '../../style';

const LibrariesContainer = styled('div')`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  > * {
    animation: ${APPEAR} 500ms ease-in-out;
    animation-fill-mode: both;
    margin: 2rem 0 !important;
  }

  ${new Array(12).fill(undefined).map(
    (_, index) => css`
      > *:nth-child(${index + 1}) {
        animation-delay: ${(index + 1) * 500}ms;
      }`
  )};
`;
export const WhatIsIt = () => (
  <Heading size={2} caps textColor="primary">
    What it is
  </Heading>
);

WhatIsIt.Props = {
  bgColor: 'secondary'
};

export const AQueryLanguage = () => (
  <Heading size={2} caps>
    A query language
  </Heading>
);

export const ExampleDataSet = () => (
  <CodePane
    lang="typescript"
    source={`
interface User {
  name: string;
  age: number;
  title: string;
  department: string;
}
  `.trim()}
    textSize={24}
  />
);

export const Example = () => (
  <GraphqlPlayground
    query={require('./code/query').default}
    data={require('./code/result').default}
    variables={require('./code/variables').default}
  />
);

export const ExampleTwo = () => (
  <GraphqlPlayground
    query={require('./code/query').default}
    data={require('./code/result').default}
    variables={require('./code/variables').default}
    transformer={({ query, data, ...rest }) => ({
      query: query
        .replace(/age\s+/, '')
        .replace(/title\s+/, '')
        .replace('name', 'username: name')
        .replace(/\s{4}\}/, '  }'),
      data: {
        data: {
          user: {
            username: data.data.user.name
          }
        }
      },
      ...rest
    })}
  />
);

export const RestComparison = () => (
  <CodePane
    lang="markup"
    source={`/users/123456?fields=name,age,title`}
    textSize={32}
  />
);

export const NotThatBad = () => (
  <Heading size={2} caps fit>
    This is&hellip; actually not that bad
  </Heading>
);

export const ButWait = () => null;

ButWait.Props = {
  bgImage: 'https://media.giphy.com/media/9V1F9o1pBjsxFzHzBr/giphy.gif'
};

export const StructuredData = () => (
  <GraphqlPlayground
    query={require('./code/query').default}
    data={require('./code/result').default}
    variables={require('./code/variables').default}
    transformer={({ query, data, ...rest }) => ({
      query: query.replace(
        /\s{2}\}/,
        `    manager {
      age
      name
      title
    }`
      ),
      data: {
        data: {
          user: {
            ...data.data.user,
            manager: {
              name: 'Tim Tomothy',
              title: 'The Boss Man',
              age: 100
            }
          }
        }
      },
      ...rest
    })}
  />
);

export const Hmm = () => null;

Hmm.Props = {
  bgImage: 'https://media.giphy.com/media/a5viI92PAF89q/giphy.gif'
};

export const TheCUD = () => (
  <Heading
    size={1}
    caps
    fit
    style={{ fontWeight: 'normal' }}
    textColor="primary"
  >
    {[['C', true], ['R', false], ['U', true], ['D', true]].map(
      ([letter, bold]) => (
        <Span type={bold ? 'underline' : 'normal'} key={letter}>
          {letter}
        </Span>
      )
    )}
  </Heading>
);

TheCUD.Props = {
  bgColor: 'secondary'
};

export const Mutations = () => (
  <Heading size={2} fit caps>
    Mutations
  </Heading>
);

Mutations.Props = {
  bgImage: require('./images/x-men-optimized.jpeg'),
  bgDarken: 0.5
};

export const SampleMutation = () => (
  <GraphqlPlayground
    query={`
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
  `.trim()}
    data={{
      data: {
        createReview: {
          stars: 5,
          commentary: 'This is a great movie!'
        }
      }
    }}
    variables={{
      ep: 'JEDI',
      review: {
        stars: 5,
        commentary: 'This is a great movie!'
      }
    }}
  />
);

export const ATypeSystem = () => (
  <Heading size={2} caps>
    A type system
  </Heading>
);

export const Types = () => (
  <CodePane
    lang="graphql"
    source={`
type User {
  id: ID!
  name: String!
  age: Int!
  title: String!
  manager: User
}
  `.trim()}
    textSize={32}
  />
);

export const ASchemaTitle = () => (
  <Heading size={2} caps>
    A schema
  </Heading>
);

export const ASchema = () => (
  <CodePane
    lang="graphql"
    source={`
type User {
  id: Int!
  name: String!
  age: Int!
  title: String!
  manager: User
}

type Query {
  users(limit: Int!): [User]!
}

schema {
  query: Query
}
    `.trim()}
    textSize={24}
  />
);

export const ResolversTitle = () => (
  <Heading size={2} caps>
    A means to resolve data
  </Heading>
);

export const ResolversExample = () => (
  <CodePane
    lang="js"
    source={`
const resolvers = {
  Query: {
    users(root, args) {
      const params = qs.stringify(args);
      return fetch(\`\${API_URL}/users?\${params}\`)
        .then(response => response.json().users);
    }
  },
  User: {
    manager(user, args, context) {
      return fetch(\`\${API_URL}/\${user.id}/manager\`)
        .then(response => response.json());
    }
  }
};
    `.trim()}
    textSize={24}
  />
);

export const ResolversInDepth = () => null;

ResolversInDepth.Props = {
  bgColor: 'primary',
  code: `
const resolvers = {
  Query: {
    users(root, args, context) {
      const params = qs.stringify(args);
      return fetch(\`\${API_URL}/users?\${params}\`)
        .then(response => response.json().users);
    }
  },
  User: {
    manager(user, args, context) {
      return fetch(\`\${API_URL}/\${user.id}/manager\`)
        .then(response => response.json());
    }
  }
};
  `.trim(),
  lang: 'js',
  ranges: [
    { loc: [0, 20], title: 'Resolvers in depth' },
    { loc: [1, 3] },
    { loc: [8, 10] }
  ]
};

export const WiringItAllUp = () => (
  <Heading size={2} caps>
    Wiring it all up
  </Heading>
);

export const SchemaWorking = () => (
  <CodePane
    lang="js"
    source={`
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = \`\`; // previous types/queries/schema

const resolvers = {}; // previous resolvers

export const SCHEMA = makeExecutableSchema({
  typeDefs,
  resolvers
});
    `.trim()}
    textSize={24}
  />
);

/* eslint-disable */
export const RaisedHands = () => (
  <Emoji ariaLabel="Raising hands" fontSize={256}>
    🙌
  </Emoji>
);
/* eslint-enable */

export const BackendAgnostic = () => (
  <Heading size={2} caps fit textColor="primary">
    Backend agnostic
  </Heading>
);

BackendAgnostic.Props = {
  bgColor: 'secondary'
};

export const ServerLibraries = class extends React.Component {
  render() {
    return (
      <LibrariesContainer>
        {[
          '.NET',
          'Clojure',
          'Elixir',
          'Erlang',
          'Go',
          'Groovy',
          'Java',
          'Node',
          'PHP',
          'Python',
          'Ruby',
          'Scala'
        ]
          .sort()
          .map((lang, index) => (
            <Heading size={4} key={lang} textColor="secondary">
              {lang}
            </Heading>
          ))}
      </LibrariesContainer>
    );
  }
};
