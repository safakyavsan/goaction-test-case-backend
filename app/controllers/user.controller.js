const userService = require('../services/user.service');


exports.getUsers = (req, res) => {
  userService.getUsers(req, res);
};

exports.getUser = (req, res) => {
  userService.getUser(req, res);
};

exports.deleteUser = (req, res) => {
  res.status(200).send("Admin Content.");
};
