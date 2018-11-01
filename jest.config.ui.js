// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['lcov'],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src'],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'json',
        'node',
        'sass',
        'scss',
        'css',
        'png',
        'svg',
        'gif',
        'jpeg',
        'jpg'
    ],

    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            './resources/__mocks__/fileMock.js',
        '\\.(css|sass|scss|less)$': 'identity-obj-proxy'
    },

    // Automatically restore mock state between every test
    restoreMocks: true,

    // The path to a module that runs some code to configure or set up the testing framework before each test
    setupTestFrameworkScriptFile: './resources/ui-tests-setup-script.js',


    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The regexp pattern Jest uses to detect test files
    testRegex: '/__tests__/.*-test\\.js?$',

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: 'http://localhost'
};
