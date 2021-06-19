import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@dbayarchyk/design-system-components',
      proxiesFile: '../components-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/@dbayarchyk/design-system-design-tokens/dist/tokens.css',
      ],
    }),
  ],
};
