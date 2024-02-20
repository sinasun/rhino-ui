import type {StorybookConfig} from "@storybook/react-vite";

import {dirname, join} from "path";
import {mergeConfig} from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        transcludeMarkdown: true,
      },
    },
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("storybook-addon-mdx-embed"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "./register",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
    })
  }
};
export default config;
