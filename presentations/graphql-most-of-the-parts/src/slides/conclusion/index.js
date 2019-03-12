import React from 'react';
import { Heading, Link, List, ListItem } from 'spectacle';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/fa/globe';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif'
};

export const Links = () => (
  <div>
    <Heading size={2} caps>
      Links
    </Heading>
    <List>
      {[
        ['REST Backend', 'https://github.com/DSchau/graphql-rest-demo'],
        [
          'GraphQL Layer',
          'https://github.com/DSchau/graphql-rest-implementation'
        ],
        ['Speaker Signup', 'https://github.com/DSchau/speaker-signup'],
        ['Speaker Signup', 'https://speaker-signup.netlify.com']
      ].map(([title, href]) => {
        const Icon = href.includes('github.com') ? GithubIcon : WebsiteIcon;
        return (
          <ListItem
            key={href}
            textAlign="left"
            style={{
              display: 'flex',
              alignItems: 'center',
              listStyleType: 'none',
              margin: '1rem 0'
            }}
          >
            <Icon color="white" style={{ marginRight: '1rem' }} />
            <Link href={href} target="_blank" textColor="white">
              {title}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>
);

export const FinTheEndThatsAllFolks = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    {[
      {
        href: 'https://twitter.com/schaudustin',
        Icon: TwitterIcon,
        text: '@schaudustin'
      },
      {
        href: 'https://github.com/dschau',
        Icon: GithubIcon,
        text: 'dschau'
      },
      {
        href: 'https://dustinschau.com',
        Icon: WebsiteIcon,
        text: 'website'
      }
    ].map(({ href, Icon, text }) => (
      <Link
        href={href}
        textColor="white"
        style={{ display: 'block' }}
        target="_blank"
        rel="noopener"
        key={text}
      >
        <Icon color="white" style={{ marginRight: 6 }} />
        {text}
      </Link>
    ))}
  </div>
);

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
One final thank you to the organizers and sponsors of this conference, and for giving me an opportunity to present at my first ever conference.

I'd like to also thank each of the attendees. Without you, each of us would be speaking to an empty room, and where's the fun in that!?
  
... and finally, I'd like to thank everyone who attended my NebraskaJS meetup, in particular [Matthew Steele](https://twitter.com/mattdsteele?lang=en), for invaluable advice and support with an earlier iteration of this talk. In addition, [Phil Plückthun](https://twitter.com/_philpl) for some great advice, as well.
  `
};
