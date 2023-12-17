/* BEFORE */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

/* AFTER */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'Task 1',
        description: 'Description for Task 1',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 2',
        description: 'Description for Task 2',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 3',
        description: 'Description for Task 3',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 4',
        description: 'Description for Task 4',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 5',
        description: 'Description for Task 5',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
