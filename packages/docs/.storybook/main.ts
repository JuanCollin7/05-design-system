import type { StorybookConfig } from '@storybook/react-vite'
import { get } from 'http'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...(config.plugins || [])],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
        },
      },
    }
  },
}
export default config