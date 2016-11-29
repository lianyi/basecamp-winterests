'use strict';

import mongoose from 'mongoose';

const ThingSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  visitors: {type: Array, default: []},
  visitorsCount: {type: Number, default: 0}
});

export default mongoose.model('Thing', ThingSchema);
