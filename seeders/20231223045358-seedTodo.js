'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todos', [
      {
        title: 'Week 8',
        description: 'MyApp todos',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Week 9',
        description: 'MovieDB',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Week 10',
        description: 'MovieDB Lanjutan',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
