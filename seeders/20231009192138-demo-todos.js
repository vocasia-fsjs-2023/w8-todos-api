'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'todos', 
      [
        {
          title: 'Installing the CLI',
          description: 'To install the Sequelize CLI',
          status: 'done',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Project bootstrapping',
          description: 'To create an empty project you will need to execute init command',
          status: 'done',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The .sequelizerc file',
          description: 'This is a special configuration file',
          status: 'done',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Dynamic configuration',
          description: 'The configuration file is by default a JSON file called config.json',
          status: 'done',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Storage',
          description: 'There are three types of storage that you can use: sequelize, json, and none.',
          status: 'done',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('todos', null, {});
  }
};
