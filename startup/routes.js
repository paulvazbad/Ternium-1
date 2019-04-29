const express = require('express');
const sessions = require('../routes/sessions');
const devices = require('../routes/devices');
const staffs = require('../routes/staffs');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/sessions', sessions);
  app.use('/api/devices', devices);
  app.use('/api/staffs', staffs);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
}