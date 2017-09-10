const config = require('config');
const projectRoot = config.get('root');
const commonConstants = require(`${projectRoot}/constants/common.constants`);

module.exports = class SignIn {
  get emailInput() {
    return $('#identifierId');
  }

  get emaillNextButton() {
    return $('#identifierNext');
  }

  get passwordInput() {
		return browser.element("[name='password']");
  }

  get passwordNextButton() {
    return $('#passwordNext');
  }
}
