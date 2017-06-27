/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      prepend: 'https://assets.test.com/'
    },
    minifyJS: {enabled: true}
  });

  return app.toTree();
};
