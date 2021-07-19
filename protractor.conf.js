const commonCapabilities = require('./test/common.json');

exports.config = {
    seleniumAddress: `https://hub.lambdatest.com/wd/hub`,
    specs: [
      './test/example.int.test.ts',
    ],
    multiCapabilities: [{
        ...commonCapabilities,
        user: process.env.LB_USERNAME, // comes via Gitlab CI Variables or terminal
        accessKey: process.env.LB_ACCESSKEY,
        browserName: 'Chrome',
        platform: 'Windows 10',
        version: '92.0',
    }]
};
