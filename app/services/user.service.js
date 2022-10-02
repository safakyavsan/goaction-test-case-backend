const db = require("../models");
const User = db.user;

exports.getUsers = (req, res) => {
  User.findAll({ where: { roleId: 1 } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}

exports.getUser = (req, res) => {
  User.findOne({ where: { id: req.params.userId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}

exports.deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(data => {
      res.send({ message: "User Deleted!" });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}