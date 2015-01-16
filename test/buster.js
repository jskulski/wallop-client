var config = module.exports;

config["Tests"] = {
    rootPath: "../",
    environment: "browser",
    sources: [
        "lib/main.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/integration/*-test.js",
        "test/unit/*-test.js"
    ],
    extensions: [require('buster-selenium')],
    'buster-selenium': {
        driver: 'selenium-webdriver',
        timeout: 250, // this may cause the test to timeout, done intentionally
        config: {
            server: {},
            desiredCapabilities: {
                browserName: 'phantomjs',
                // 'phantomjs.binary.path': '../node_modules/.bin/phantomjs'
            }
        }
    }
}

return config;
