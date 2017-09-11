const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const defaultConfig = require(`${projectRoot}/config/default`);
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);
const signInPage = new (require(`${projectRoot}/objects/sign-in.object`));
const inboxPage = new (require(`${projectRoot}/objects/inbox.object`));
const openPageStep = require(`${projectRoot}/helpers/steps/open-page.step`);

describe('Login to Gmail', function() {
  it('should open baseurl', function() {
    openPageStep.openHomePage();
  });

  it('should send email to input', () => {
    signInPage.emailInput.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.emailInput.clearElement();
    signInPage.emailInput.setValue(commonConstants.CREDENTIALS.correct.login);
  });

  it('should click on Next button', () => {
    signInPage.emaillNextButton.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.emaillNextButton.click();
  });

  it('should  send password to input', () => {
    signInPage.passwordInput.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.passwordInput.clearElement();
    signInPage.passwordInput.setValue(commonConstants.CREDENTIALS.correct.password);
  });

  it('should click Next button', () => {
    signInPage.passwordNextButton.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.passwordNextButton.click();
  });

  it('should verify that inbox page appears', () => {
    inboxPage.homeButton.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
  });
});
