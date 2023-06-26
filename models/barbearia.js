'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barbearia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  barbearia.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    funcionario: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cortes: DataTypes.STRING,
    img: DataTypes.STRING,
    setenhalf: DataTypes.STRING,
    oitohalf: DataTypes.STRING,
    novehalf: DataTypes.STRING,
    dezhalf: DataTypes.STRING,
    onzehalf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'barbearia',
  });
  return barbearia;
};