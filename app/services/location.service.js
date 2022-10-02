const db = require("../models");
const Location = db.location;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.lat || !req.body.lng) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Location


  // Save Location in the database
  Location.create({
    lat: req.body.lat,
    lng: req.body.lng,
    userId: req.body.userId
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    });
}

exports.getLocations = (req, res) => {
  Location.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
    });
}

exports.getLocation = (req, res) => {
  Location.findOne({ where: { userId: req.params.userId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.locationId;

  Location.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Location with id=${id}. Maybe Location was not found or params is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Location with id=" + id
      });
    });
}
exports.delete = (req, res) => {
  const id = req.params.locationId;

  Location.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Location with id=" + id
      });
    });
}