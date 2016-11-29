/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';


Thing.find({}).remove()
  .then(() => {
    Thing.create({
      title:'zebra',
      image_url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDHnhFacRHuHWnGLD3yCRw1u4KQO_BHJdnXB62DIDpDdy1UA5mkg',
      visitors: ['aa','bb','cc'],
      visitorsCount: 3
    }, {
      title:'tiger',
      image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Panthera_tigris_tigris.jpg/220px-Panthera_tigris_tigris.jpg',
      visitors: ['aa', 'cc'],
      visitorsCount: 2
    },{
      title:'leopard',
      image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/220px-African_Leopard_5.JPG',
      visitors: ['aa', 'cc'],
      visitorsCount: 2
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
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
    })
      .then(() => {
        console.log('finished populating users');
      });
  });
