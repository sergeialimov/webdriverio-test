const assert = require('assert');
const config = require('config');
const projectRoot = config.get('root');
const defaultConfig = require(`${projectRoot}/config/default`);
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const signInPage = new (require(`${projectRoot}/objects/sign-in.object`));
const inboxPage = new (require(`${projectRoot}/objects/inbox.object`));
const openPageStep = require(`${projectRoot}/helpers/steps/open-page.step`);
const elementStep = require(`${projectRoot}/helpers/steps/element.step`);

describe('Login to Gmail', function() {
  browser.addCommand('elementToBeClickable', function(selector, timeout) {
    return this.waitForVisible(selector, timeout).waitForEnabled(selector, timeout);
  });

  it('should open baseurl', function() {
    openPageStep.openHomePage();
  });

  it('should send email to input', () => {
    signInPage.emailInput.waitForEnabled(5000);

    signInPage.emailInput.clearElement();
    signInPage.emailInput.setValue(commonConstants.CREDENTIALS.login);
  });

  it('should click on Next button', () => {
    signInPage.emaillNextButton.waitForEnabled(5000);
    signInPage.emaillNextButton.click();
  });

  it('should  send password to input', () => {
    signInPage.passwordInput.waitForEnabled(5000);
    signInPage.passwordInput.clearElement();
    signInPage.passwordInput.setValue(commonConstants.CREDENTIALS.password);
  });

  it('should click Next button', () => {
    signInPage.passwordNextButton.waitForEnabled(5000);
    signInPage.passwordNextButton.click();
  });

  it('should verify that inbox page appears', () => {
    inboxPage.homeButton.waitForEnabled(5000);
    const title = browser.getTitle();
    assert.equal(title, commonConstants.TITLE.inbox);
  });
});
