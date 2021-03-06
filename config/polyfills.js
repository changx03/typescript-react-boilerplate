'use strict';

// rejection tracking prevents error swallowed by a Promise
if (typeof Promise === void 0) {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions');
}

// fetch() polyfill
require('whatwg-fetch');

// Object.assign() will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
