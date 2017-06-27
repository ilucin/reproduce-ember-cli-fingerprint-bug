import Service from 'ember-service';

export default Service.extend({
  libs: {
    // c3: {
    //   url: '/assets/c3.js',
    //   resolveDefaultExport: () => window.c3
    // },

    dropzone: {
      url: '/assets/dropzone.js',
      resolveDefaultExport: () => window.Dropzone
    }
  }
});
