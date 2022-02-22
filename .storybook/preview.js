import React from 'react';
import { GlobalStyle } from '../src/shared/global';

export const decorators = [
  // The decorator ensures the GlobalStyle renders no matter which story is selected.
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
};
