const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);

/*
Function waitForWarning() looks a little bit complicated.
The reasons are:

1) Almost all class names at gmail.com are obfuscated.
That is why we cannot just wait for some located element.
Current solution is - find required text on the page.

2) There is no (I couldn't find) a native method in webdriver.io api
to find text on the page.

3) There are a lot of different languages of interface.
By default I added just two - English and Russian.
Other languages could be added if needed.

I'm sure that code could be simplified.
I'll update it when find better solution.
*/

module.exports = {
  waitForWarning: function(warnings) {
    browser.waitUntil(function() {
      const result = browser.execute(function(warnings) {
        let res = false;
        for (var i = 0; i < warnings.length; i++) {
          if (window.find(warnings[i])) {
            res = true;
            break;
          }
        }
        return res;
      }, warnings);
      return result.value;
    }, autotestConstants.TIME.element_enable_timeout, 'warning not found', 100)
  }
}
