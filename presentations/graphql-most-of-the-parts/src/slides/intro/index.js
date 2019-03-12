import React from 'react';
import {
  Appear,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  S as Span
} from 'spectacle';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import preloader from 'spectacle/lib/utils/preloader';

import { GraphqlLogo } from '../../components';

const images = {
  intro: require('./assets/cover-optimized.jpeg'),
  me: require('./assets/me-optimized.png')
};

preloader(images);

export const Intro = () => (
  <div>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0
      }}
    >
      <Link
        href="https://www.meetup.com/nebraskajs/events/dxndfdyxhbcb/"
        target="_blank"
      >
        <Image
          src={require('./assets/nebraskajs.svg')}
          style={{ height: 30 }}
        />
      </Link>
    </div>
    <Heading
      size={1}
      textFont="Bitter"
      style={{
        display: 'inline-block',
        width: 'auto',
        backgroundColor: '#E10098',
        color: 'white',
        padding: '1rem 2rem',
        paddingBottom: '2.25rem'
      }}
    >
      GraphQL
    </Heading>
    <Heading
      size={3}
      textSize={18}
      textColor="white"
      style={{ fontWeight: 'normal' }}
    >
      <Link href="https://dustinschau.com" target="_blank" textColor="white">
        by <Span type="bold">Dustin Schau</Span>
      </Link>
    </Heading>
    <GraphqlLogo />
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://graphql.dustinschau.com"
        textColor="rgba(255, 255, 255, 0.7)"
        target="_blank"
        rel="noopener"
      >
        https://graphql.dustinschau.com
      </Link>
    </div>
  </div>
);

Intro.Props = {
  bgImage: images.intro,
  bgDarken: 0.5,
  notes: `
Hello! My name is Dustin Schau and I'll be talking to you today about... you guessed it, GraphQL!

This talk is titled in the meetup as GraphQL: The Good Parts, but that's just me being uncreative. In actuality, I'd title this talk GraphQL: Most of the Parts.

It's intended to be a gentle introduction to foundational concepts of GraphQL. In illustrating these concepts, we gain a greater understanding of what makes GraphQL great, and a greater appreciation for the value it can provide for an application. I go into some detail of the problems that GraphQL is trying to solve and how it solves them.

Finally, I'll end with a section on Integration into an existing backend. This is primarily focused on an existing RESTful backend, but can be substituted to any deta mechanism, e.g. MySQL, Mongo, or anywhere data is stored and can be updated/queried against.

All things go well, I'll end with a few demos and some live coding :raised-hands:
  `
};

export const AboutMe = () => (
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who's this guy?
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <WebsiteIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>
);

AboutMe.Props = {
  notes: `
My name is Dustin Schau, and I can't _not_ use the hilarious picture in the meetup. When I'm not looking angry as all hell, I am a frontend developer who likes to claim that I specialize in all things JavaScript. Lately, I've had more of a NodeJS focus, so that ties in well to this GraphQL talk.

I work for an awesome company called Object Partners, so come talk to me after if you'd like to chat about what I do, about JavaScript, or about whatever.
  `
};

export const FacebookDrivenDevelopment = () => (
  <Heading size={1} caps style={{ fontWeight: 400 }} textColor="white">
    <Span type="underline" style={{ fontWeight: 700 }}>
      F
    </Span>acebook{' '}
    <Span type="underline" style={{ fontWeight: 700 }}>
      D
    </Span>riven{' '}
    <Span type="underline" style={{ fontWeight: 700 }}>
      D
    </Span>evelopment
  </Heading>
);

FacebookDrivenDevelopment.Props = {
  bgImage: 'https://media.giphy.com/media/ijEiXYEo9DBxm/giphy.gif',
  bgDarken: 0.6
};

export const RestKiller = () => (
  <Heading size={2} caps fit>
    Is it a REST killer?
  </Heading>
);

export const No = () => (
  <React.Fragment>
    <Heading size={1} caps fit textColor="primary">
      No
    </Heading>
    <Appear>
      <Heading size={6}>&hellip; and chill</Heading>
    </Appear>
  </React.Fragment>
);

No.Props = {
  bgColor: 'secondary'
};

export const ButMaybe = () => (
  <Heading size={2} caps fit>
    But <Span type="italic">maybe</Span>
  </Heading>
);

ButMaybe.Props = {
  bgImage: 'https://media.giphy.com/media/DfdbTJZx6Yjra/giphy.gif',
  bgDarken: '0.5'
};
