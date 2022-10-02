const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { isAdmin } = require("../middleware/authJwt");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    wallet_address: req.body.wallet_address,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId: 1
  })
    .then(user => {
      // user role = 1

      res.send({ message: "User registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });


      res.status(200).send({
        id: user.id,
        username: user.username,
        wallet_address: user.wallet_address,
        accessToken: token
      });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.wallet = (req, res) => {
  User.findOne({
    where: {
      wallet_address: req.body.wallet_address
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      else {
        return res.status(200).send({ message: "User found." });
      }

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}

exports.createAdmin = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    wallet_address: req.body.wallet_address,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId: 2
  })
    .then(user => {

      res.send({ message: "Admin registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}