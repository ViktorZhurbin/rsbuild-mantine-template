import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSourceBuild } from '@rsbuild/plugin-source-build';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig(({ env, command, envMode }) => {
  const isDev = env === 'development';

  // https://rsbuild.dev/config/output/css-modules#template-string
  const localIdentName = isDev
    ? '[folder]__[local]-[hash:base64:6]'
    : '[local]-[hash:base64:6]';

  return {
    html: {
      template: './static/index.html',
    },

    plugins: [pluginReact(), pluginTypeCheck(), pluginSourceBuild()],

    output: {
      cssModules: {
        localIdentName,
      },
    },
  };
});
