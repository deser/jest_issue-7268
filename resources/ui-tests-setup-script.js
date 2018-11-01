require('./base-test-setup');

// jsdom doesn't have implementaion of `window.open`
window.open = function() {};
