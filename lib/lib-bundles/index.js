
/* eslint-env node */
/* eslint-disable consistent-return*/

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'lib-bundles',

  isDevelopingAddon() {
    return true;
  },

  treeForPublic(tree) {
    const pluginTree = this.treeGenerator(path.resolve(__dirname));

    return mergeTrees((tree ? [tree] : []).concat([
      new Funnel(pluginTree, {
        srcDir: './vendor/c3',
        files: ['c3.js'],
        destDir: 'assets'
      }),

      new Funnel(pluginTree, {
        srcDir: './vendor/dropzone',
        files: ['dropzone.min.js'],
        destDir: 'assets',
        getDestinationPath: () => 'dropzone.js'
      })
    ]));
  }
};
