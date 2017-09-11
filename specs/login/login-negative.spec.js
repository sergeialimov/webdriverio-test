const expect = require('chai').expect;
const config = require('config');
const projectRoot = config.get('root');
const defaultConfig = require(`${projectRoot}/config/default`);
const commonConstants = require(`${projectRoot}/constants/common.constants`);
const autotestConstants = require(`${projectRoot}/constants/autotest.constants`);
const signInPage = new (require(`${projectRoot}/objects/sign-in.object`));
const inboxPage = new (require(`${projectRoot}/objects/inbox.object`));
const openPageStep = require(`${projectRoot}/helpers/steps/open-page.step`);
const warningWaiter = require(`${projectRoot}/helpers/warning-waiter`);

describe('Login to Gmail', function() {
  it('should open baseurl', function() {
    openPageStep.openHomePage();
  });

  it('should send email to input', () => {
    signInPage.emailInput.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.emailInput.clearElement();
    signInPage.emailInput.setValue('sehiufs');
  });

  it('should click on Next button', () => {
    signInPage.emaillNextButton.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.emaillNextButton.click();
  });

  it('should verify that account warning message appears', () => {
    warningWaiter.waitForWarning(commonConstants.WARNINGS_ACCOUNT);
  });
});
