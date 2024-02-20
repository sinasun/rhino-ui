import type { Preview } from "@storybook/react";
import rhinoUITheme from "./rhinoUITheme";

import '../src/styles/utilities.scss';
import '../src/styles/variables/index.scss';
import '../src/styles/reset.scss';
import '../src/styles/fonts.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: rhinoUITheme,
    },
    a11y: {
      element: '#root',
      config: {},
      options: {},
      manual: false,
    },
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Get Started', 'Contributing'],
          'Foundation',
          ['Design Principles', 'Design Tokens'],
          'Content',
          ['Goals and Principles', 'Voice and Tone', 'Grammar and Mechanics', 'Word List'],
          'Theming',
          ['Overview', 'Form Controls'],
          'Components',
          'Patterns',
        ],
      },
    },
  },
};

export default preview;
