import React from 'react';
import { Notes, SlideSet, Slide } from 'spectacle';
import CodeSlide from '@dschau/spectacle-code-slide';
import marked from 'marked';
import dasherize from 'lodash.kebabcase';

import * as Intro from './intro';
import * as WhatIsIt from './what-is-it';
import * as ProblemsItSolves from './problems-it-solves';
import * as Integration from './integration';
import * as ClientIntegration from './client-integration';
import * as Demo from './demo';
import * as Conclusion from './conclusion';

export default function makeSlides() {
  return [
    Intro,
    WhatIsIt,
    ProblemsItSolves,
    Integration,
    ClientIntegration,
    Demo,
    Conclusion
  ].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const id = dasherize(key);
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return (
              <CodeSlide id={id} key={iteratorKey} ranges={ranges} {...props} />
            );
          }
          return (
            <Slide key={iteratorKey} {...Content.Props || Content.props}>
              <Notes>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked((Props.notes || '').trim())
                  }}
                />
              </Notes>
              {typeof Content === 'function' ? <Content /> : Content}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
