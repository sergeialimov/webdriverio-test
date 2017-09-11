const assert = require('assert');
const expect = require('chai').expect;
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
    signInPage.emailInput.setValue('sehiufs');
  });

  it('should click on Next button', () => {
    signInPage.emaillNextButton.waitForEnabled(autotestConstants.TIME.element_enable_timeout);
    signInPage.emaillNextButton.click();
  });

  it('should verify warning message', () => {
    browser.pause(1000);
    const result = browser.execute(function(wornings) {
      let res = false;
      for (var i = 0; i < wornings.length; i++) {
        if (window.find(wornings[i])) {
          res = true;
          break;
        }
      }
      return res;
    }, commonConstants.WARNINGS_ACCOUNT);
    expect(result.value).to.be.true;
  });
});
