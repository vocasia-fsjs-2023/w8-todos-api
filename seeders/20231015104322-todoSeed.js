'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert("Todos", 
     [
        {
          title: "Title Todo ke 1",
          description: "Ini description todo ke 1",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title Todo ke 2",
          description: "Ini description todo ke 2",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title Todo ke 3",
          description: "Ini description todo ke 3",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title Todo ke 4",
          description: "Ini description todo ke 4",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title Todo ke 5",
          description: "Ini description todo ke 5",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
     ],{});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete("Todos", null, {});
  }
};
