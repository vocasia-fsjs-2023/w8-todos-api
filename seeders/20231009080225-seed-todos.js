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
    return queryInterface.bulkInsert("Todos", [
      {
        title: "Create POST in TODO App",
        description:
          "Membuat API Post Pada Todos app untuk menambahkan todo list",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create GET in TODO App",
        description:
          "Membuat API GET Pada Todos app untuk mendapatkan todo list",
        status: "in_progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create PUT in TODO App",
        description: "Membuat API PUT Pada Todos app untuk mengubah todo list",
        status: "in_progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create PATCH in TODO App",
        description:
          "Membuat API PATCH Pada Todos app untuk mengedit todo list",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create DELETE in TODO App",
        description:
          "Membuat API DELETE Pada Todos app untuk menghapus todo list",
        status: "done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
