import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';


export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/assets/styles/_StyleGuide.scss'
      ],
      includePaths:["src"]
    })
  ],
  namespace: 'initiative-ui2',
  globalStyle: 'src/assets/styles/App.scss',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'initiative-ui2',
      proxiesFile: '../initiative-ui2-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{src: 'assets', dest: '../assets'},
        {src: 'assets', dest: '../collection/components/assets'}],
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
  ]
};
