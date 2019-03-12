import React from 'react';
import { Appear, CodePane, Heading, Image } from 'spectacle';
import Player from 'react-player';

import { GraphqlPlayground, QuoteSlide } from '../../components';

export const ProblemsItSolvesIntro = () => (
  <Heading size={2} caps fit textColor="primary">
    Problems it solves
  </Heading>
);

ProblemsItSolvesIntro.Props = {
  bgColor: 'secondary'
};

export const NoSqlDatabase = () => (
  <QuoteSlide
    quote={`Hahaha, GraphQL is totally "So, you decided to use a NoSQL DB and now you want reasonable queries back -- here's GraphQL!"`}
    image={require('./images/john-resig-optimized.jpeg')}
    author="John Resig"
    href="https://twitter.com/jeresig/status/854442725139206148"
  />
);

NoSqlDatabase.Props = {
  bgImage: require('./images/life-preserver-optimized.jpeg'),
  bgDarken: 0.5
};

export const DocumentationIsBetter = () => (
  <Heading size={2} textColor="white" caps>
    Documentation
  </Heading>
);

DocumentationIsBetter.Props = {
  bgImage: require('./images/documentation-optimized.jpeg'),
  bgDarken: 0.5
};

export const GraphiQL = () => (
  <Image src={require('./images/graphiql-optimized.png')} />
);

export const TwitterTimeline = () => (
  <Player
    url={require('./video/twitter.mp4')}
    playing
    loop
    width="100%"
    height="100%"
  />
);

export const TweetExample = () => <Image src={require('./images/tweet.png')} />;

export const RepliesExample = () => (
  <Image src={require('./images/timeline.png')} />
);

export const RESTCalls = () => (
  <div>
    {[
      'https://twitter.com/api/tweets',
      'https://twitter.com/api/tweets/1234',
      'https://twitter.com/api/tweets/1234/conversation'
    ].map((url, index) => {
      const Wrapper = index === 0 ? React.Fragment : Appear;
      return (
        <Wrapper key={url}>
          <CodePane
            lang="markup"
            source={url}
            textSize={32}
            style={{ margin: '2rem 0' }}
          />
        </Wrapper>
      );
    })}
  </div>
);

export const Waterfall = () => (
  <Heading size={2} fit caps>
    Waterfall
  </Heading>
);

Waterfall.Props = {
  bgImage: require('./images/waterfall-optimized.jpeg'),
  bgDarken: 0.5
};

export const GraphqlExample = () => (
  <GraphqlPlayground
    textSize={16}
    query={`
query TimelineForUser($user: String!) {
  timeline(user: $user) {
    id
    body
    likes
    retweets
    conversation(first: 20) {
      endIndex
      id
      body
      likes
      retweets
    }
  }
}
    `.trim()}
    variables={{ user: 'dschau' }}
    data={{
      data: {
        timeline: [
          {
            id: 1,
            body: 'something something',
            likes: 100,
            retweets: 50,
            conversation: [
              {
                id: 1234,
                body: 'You tell them YADDA YADDA',
                likes: 1,
                retweets: 1
              }
            ]
          }
        ]
      }
    }}
  />
);
