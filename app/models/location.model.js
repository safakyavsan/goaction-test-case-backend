module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("locations", {
    lat: {
      type: Sequelize.STRING
    },
    lng: {
      type: Sequelize.STRING
    },
  });

  return Location;
};
