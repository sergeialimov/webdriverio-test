const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const baseUrl = config.get('testUrls.baseUrl');
const commonConstants = require(`${projectRoot}/constants/common.constants`);

const openSite = module.exports = {
		openSite: function() {
		browser.url(baseUrl);
    const title = browser.getTitle();
    assert.equal(title, commonConstants.TITLE.homepage);
	}
}
