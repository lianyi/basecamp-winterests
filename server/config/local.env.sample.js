'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://127.0.0.1:9000',
  SESSION_SECRET: 'winterests-secret',

  TWITTER_ID: 'app-id',
  TWITTER_SECRET: 'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
