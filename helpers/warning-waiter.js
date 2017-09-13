const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);

module.exports = {
  waitForWarning: function(warning) {
    browser.waitUntil(function() {
      const result = browser.execute(function(warning) {
        return window.find(warning);
      }, warning);
      return result.value;
    }, autotestConstants.TIME.element_enable_timeout, 'warning not found', 100)
  }
}
