'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", 
    [
       {
         title: "Title ke 1",
         description: "Description ke 1",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Title ke 2",
         description: "Description ke 2",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Title ke 3",
         description: "Description ke 3",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Title ke 4",
         description: "Description ke 4",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Title ke 5",
         description: "Description ke 5",
         createdAt: new Date(),
         updatedAt: new Date(),
       }
    ],{});
 },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  }
};
