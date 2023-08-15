const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Country', {
id: {
    type: DataTypes.STRING(3), 
    primaryKey: true, 
    allowNull: false, 
    unique: true, 
    validate: {
      len: [3, 3], 
    },
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {timestamps: false});
}



