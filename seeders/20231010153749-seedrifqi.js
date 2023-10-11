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
      "todos",
      [
        {
          title: "Test title todo pertama",
          description: "Test description pertama",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Test title todo kedua ",
          description: "Test description kedua",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Test title todo ketiga",
          description: "Test description ketiga",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Test description keempat",
          description: "Test description keempat",
          status: "created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Test description kelima",
          description: "Test description desctiption",
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
    return queryInterface.bulkDelete("todos", null, {});
  },
};
