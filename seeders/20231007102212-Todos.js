"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "Learn Express",
          description: "Learn Express",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn Sequelize",
          description: "Learn Sequelize",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn Mocha",
          description: "Learn Mocha",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn Chai",
          description: "Learn Chai",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn Supertest",
          description: "Learn Supertest",
          status: "done",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
