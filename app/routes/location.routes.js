const { authJwt } = require("../middleware");
const controller = require("../controllers/location.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/location/create', [authJwt.verifyToken, authJwt.isAdmin], controller.createLocation);
  app.get('/api/location/:userId', [authJwt.verifyToken], controller.getLocation);
  app.get('/api/location', [authJwt.verifyToken, authJwt.isAdmin], controller.getLocations);
  app.put('/api/location/:locationId', [authJwt.verifyToken, authJwt.isAdmin], controller.updateLocation);
  app.delete('/api/location/:locationId', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteLocation);

};