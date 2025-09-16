const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForTimeout: 10000, 
      getPageTimeout: 90000  
    },
    AssertWrapper: {
       "require": "codeceptjs-assert"
     }
  },
  
  include: {
    I: './steps_file.js'
  },
  name: 'CodeceptJSPlayground'
}