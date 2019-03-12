import React, { Component } from 'react';

import { Deck } from 'spectacle';
import 'prismjs/components/prism-typescript';

import createTheme from 'spectacle/lib/themes/default';
import makeSlides from './slides';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#0A1C28',
    secondary: '#3FB4C6',
    tertiary: '#F35B05',
    quartenary: '#F1E4DB'
  },
  {
    primary: {
      googleFont: true,
      name: 'Bitter',
      styles: ['400', '700']
    },
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {makeSlides()}
      </Deck>
    );
  }
}
