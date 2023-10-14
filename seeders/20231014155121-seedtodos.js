"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      "Todos",
      [
        {
          title: "Title ke 1",
          description: "Description ke 1",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title ke 2",
          description: "Description ke 2",
          status: "in_progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title ke 3",
          description: "Description ke 3",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title ke 4",
          description: "Description ke 4",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Title ke 5",
          description: "Description ke 5",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
