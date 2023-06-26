'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barbearia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      funcionario: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      cortes: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      setenhalf: {
        type: Sequelize.STRING
      },
      oitohalf: {
        type: Sequelize.STRING
      },
      novehalf: {
        type: Sequelize.STRING
      },
      dezhalf: {
        type: Sequelize.STRING
      },
      onzehalf: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('barbearia');
  }
};