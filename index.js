/** @ */
(() => {
  if (!String.prototype.interpolate) {
    const mustache = require('mustache');
    /**
     * @param {any | import('mustache/index').Context} view 
     * @param {undefined | import('mustache/index').PartialsOrLookupFn} partials 
     * @param {undefined | import('mustache/index').OpeningAndClosingTags | import('mustache/index').RenderOptions} config 
     * @returns {string}
     */
    String.prototype.interpolate = function(view, partials, config) {
      const result = mustache.render(this + '', view, partials, config)
      return result
    };
  }
})()