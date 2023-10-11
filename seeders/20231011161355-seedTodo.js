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
      'Todos', 
      [
        {
      title: 'tugas week 4',
      description : 'menghias html dengan css',
      status: 'done',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        title: 'tugas week 5',
        description : 'probelem java script',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'tugas week 6',
        description : 'problem java script',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'tugas week 7',
        description : 'todos api',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'tugas week 8',
        description : 'todos api',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
