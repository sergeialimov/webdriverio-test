# webdriverio-test

In this repo you can find an example of code written with framework [Webdriver.io](http://webdriver.io)
The website for testing is [Gmail](https://gmail.com).
It contains two test cases - one positive and one negative.

Gmail has couple interesting features:
 1) Obfuscated class names. It doesn't allow to use internal methods for elements locating.
In negative test I faced issue that there is no available css selectors to locate warning messages. All of existing selector are generated automatically and could be changed in any moment with a new build. That is why I used "execute" and "window.find" to verify that warning message appears.
 2) Interface in different languages.
I added a data file with elements on pages in different languages. Test detects current language and verify required texts.
