const db = require("../models");
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
    next()
  });
};

checkDuplicateWallet = (req, res, next) => {
  User.findOne({
    where: {
      wallet_adress: req.body.wallet_adress
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Wallet is already in use!"
      });
      return;
    }

    next();
  });
}

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
  checkDuplicateWallet: checkDuplicateWallet
};

module.exports = verifySignUp;
