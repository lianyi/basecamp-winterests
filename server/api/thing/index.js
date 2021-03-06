'use strict';

var express = require('express');
var controller = require('./thing.controller');
var router = express.Router();
import * as auth from '../../auth/auth.service';

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
