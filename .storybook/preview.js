import { configure ,addParameters} from '@storybook/html';
import buildStencilStories from './stories/automatedStories';
const loader = require('../loader/index.cjs.js');


const cssReq = require.context('!!raw-loader!./', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

const scssReq = require.context('!!raw-loader!../dist/initiative-ui2', true, /.\.scss$/);
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }));

const lessReq = require.context('!!raw-loader!../dist/initiative-ui2', true, /.\.less$/);
const lessTokenFiles = lessReq
  .keys()
  .map((filename) => ({ filename, content: lessReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../dist/initiative-ui2', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }));
console.log('cssTokenFiles',cssTokenFiles)
addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles,
      less: lessTokenFiles
    },
    options: {
      hideMatchingHardCodedValues: false
    }
  }
});




const COLLECTIONS = [
  {
    name: 'My Components',
    componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.stories\.tsx$/),
  },
];

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);

