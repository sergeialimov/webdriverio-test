const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);
const defaultConfig = require(`${projectRoot}/config/default`);
const signInPage = new (require(`${projectRoot}/objects/sign-in.object`));

module.exports = {
  checkWarning: function() {
		// to be implemented

}
