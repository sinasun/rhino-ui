const codesandbox = require('remark-codesandbox');
const { resolve } = require('path');

/**
 * The majority of the development webpack config comes directly from the @storybook
 * default config, since the output is rendered by their platform.
 * Webpack.config.js is configured to determine whether or not the env is development/storybook,
 * and if so, generate additional config options that will get merged into the storybook config
 * in order to process Typescript components and SCSS files appropriately.
 */
const webpackConfig = require('../webpack.config');

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // compilerOptions: {
      //   allowSyntheticDefaultImports: false,
      //   esModuleInterop: false,
      // },
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../src/**/*.stories.@([tj]sx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    'storybook-addon-mdx-embed',
    '@storybook/addon-postcss',
    './register',
  ],
  webpackFinal: config => {
    const mdxRule = config.module.rules.find((rule) =>
      rule.test.test('.story.mdx')
    );
    
    console.log('mdxRule', mdxRule);

    const {
      options: { remarkPlugins }
    } = mdxRule.use.find(
      ({ loader }) => loader === require.resolve('@mdx-js/loader')
    );

    remarkPlugins.push([
      codesandbox,
      {
        mode: 'iframe',
        query: {
          fontsize: 14
        },
        customTemplates: {
          'rhinolabs-components': {
            extends: `file:${resolve(
              __dirname,
              '../docs/codesandbox-template'
            )}`,
            entry: 'src/MyComponent.js'
          },
        },
        autoDeploy: true
      }
    ]);

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...webpackConfig.module.rules,
        ],
      },
    };
  },
};
