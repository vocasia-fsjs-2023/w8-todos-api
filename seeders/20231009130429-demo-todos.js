'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
       [
        {
        title:"Membuat Todos APP",
        description:"deskripsi membuat todos app dengan postgreSQL",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
       },

       {
        title:"Mendapatkan Todos List",
        description:"deskripsi mendapatkan todos list dengan postgreSQL",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
       },

       {
       title:"Mendapatkan Todos dengan ID",
        description:"deskripsi mendapatkan todos dengan id",
        status: "done",
        createdAt: new Date(),
        updatedAt: new Date(),
       }, 

       {
        title:"Mengupdate Todos Data",
        description:"deskripsi mengupdate todos dengan id",
        status: "in_progress",
        createdAt: new Date(),
        updatedAt: new Date(),
       }, 

       {
        title:"Meenghapus Todos dengan ID",
        description:"deskripsi menghapus todos dengan id",
        status: "created",
        createdAt: new Date(),
        updatedAt: new Date(),
       }
       ],
       {}
       );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
