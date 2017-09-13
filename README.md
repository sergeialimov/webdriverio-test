# webdriverio-test

In this repo you can find an example of code written with framework [Webdriver.io](http://webdriver.io).
It was my first experience with Webdriver.io. Previously I worked with [Protractor framework](http://www.protractortest.org/#/).
The website for testing is [Gmail](https://gmail.com).
Project contains two test cases - one positive and one negative, object and data files, constants, helpers.

Gmail has couple interesting features:
 1) Obfuscated class names. It doesn't allow to use internal methods for elements locating.
In negative test I faced the issue when there is no available css selectors to locate warning messages. All existing selectors are generated automatically and could be changed in any moment with a new build. That is why I used "execute" and "window.find" to verify that warning message appears.
 2) Interface in different languages.
I added a data file with elements on pages in different languages. Test detects current language and verify required texts.

During development I used a board for tasks. It could be found [here](https://trello.com/b/xVmP2pDV/webdriverio-atom-test).
