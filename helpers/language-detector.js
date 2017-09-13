const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);

module.exports = {
  detectLanguage: function(warnings) {
    return $('html').getAttribute('lang');
  }
}
