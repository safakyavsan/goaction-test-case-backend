module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("locations", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    lat: {
      type: Sequelize.STRING
    },
    lng: {
      type: Sequelize.STRING
    },
  });

  return Location;
};
