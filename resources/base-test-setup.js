require('@babel/register');
require('@babel/polyfill');
require('core-js/shim');

require('jest-extended');

// hide unnecessary data which pollutes test report.
// BE CAREFUL: [console.error, console.warn, console.debug] won't output into console. You can use only console.log
global.console.error = () => {};
global.console.warn = () => {};
global.console.debug = () => {};
