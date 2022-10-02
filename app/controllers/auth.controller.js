const authService = require('../services/auth.service');

exports.signup = (req, res) => {
  authService.signup(req, res);
};

exports.signin = (req, res) => {
  authService.signin(req, res);
};

exports.wallet = (req, res) => {
  authService.wallet(req, res);
}
exports.createAdmin = (req, res) => {
  authService.createAdmin(req, res);
}