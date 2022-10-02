const locationService = require('../services/location.service');

exports.createLocation = (req, res) => {
  locationService.create(req, res);
};

exports.getLocation = (req, res) => {
  locationService.getLocation(req, res);
};

exports.getLocations = (req, res) => {
  locationService.getLocations(req, res);
}

exports.deleteLocation = (req, res) => {
  locationService.delete(req, res);
}

exports.updateLocation = (req, res) => {
  locationService.update(req, res);
}