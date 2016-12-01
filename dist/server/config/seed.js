/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _thing = require('../api/thing/thing.model');

var _thing2 = _interopRequireDefault(_thing);

var _user = require('../api/user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_thing2.default.find({}).remove().then(function () {
  _thing2.default.create({
    title: 'zebra',
    image_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDHnhFacRHuHWnGLD3yCRw1u4KQO_BHJdnXB62DIDpDdy1UA5mkg',
    visitors: ['aa', 'bb', 'cc'],
    visitorsCount: 3
  }, {
    title: 'tiger',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Panthera_tigris_tigris.jpg/220px-Panthera_tigris_tigris.jpg',
    visitors: ['aa', 'cc'],
    visitorsCount: 2
  }, {
    title: 'leopard',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/220px-African_Leopard_5.JPG',
    visitors: ['aa', 'cc'],
    visitorsCount: 2
  }, {
    title: 'snow leopard',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lightmatter_snowleopard.jpg/220px-Lightmatter_snowleopard.jpg',
    visitors: ['aa'],
    visitorsCount: 1
  });
});

_user2.default.find({}).remove().then(function () {
  _user2.default.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@example.com',
    password: 'test12'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin12'
  }).then(function () {
    console.log('finished populating users');
  });
});
//# sourceMappingURL=seed.js.map
