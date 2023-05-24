module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define("quiz", {
    userID: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.STRING,
    },
  });

  return quiz;
};
