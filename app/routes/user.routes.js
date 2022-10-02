const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user", [authJwt.verifyToken, authJwt.isAdmin], controller.getUsers);

  app.get("/api/user/:userId", [authJwt.verifyToken], controller.getUser);

  app.delete(
    "/api/user/:userId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteUser
  );
};
