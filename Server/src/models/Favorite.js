const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      idDB: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Alive", "Dead", "unknown"],
        defaultValue: "unknown",
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknown",
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Female", "Male", "Genderless", "unknown"],
        allowNull: false,
        defaultValue: "unknown",
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
