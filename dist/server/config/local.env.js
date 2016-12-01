'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://127.0.0.1:9000',
  SESSION_SECRET: 'winterests-secret',
  TWITTER_ID: 'y1wpQmkGXYS9k1LrlYt2uWEgE',
  TWITTER_SECRET: 'dhFhRB9ZotcTjsJl7Z9UKxMr5YHRI9mSHyJBRWiRNfixX8yPra',
  MONGODB_URI: 'mongodb://heroku_9mj45hvv:m5c43pfv5v3k408ahslhlg3m8c@ds111798.mlab.com:11798/heroku_9mj45hvv',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
//# sourceMappingURL=local.env.js.map
