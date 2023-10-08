'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Isi dengan perintah untuk menambahkan data ke dalam tabel 'todos'
    await queryInterface.bulkInsert('todos', [
      {
        "title":"Membuat Todos APP",
        "description":"deskripsi dalam mebuat todos app dari judulnya",
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      
        title: "Mengubah Judul Todo",
        description: "Mengubah deskripsi Todo menjadi in_progress",
        status: 'in progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:"Mengupdate Todos",
        description:"deskripsi diupdate dalam mebuat todos app dari judulnya",
        status: "done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // perintah untuk menghapus data dari tabel 'todos'
    await queryInterface.bulkDelete('todos', null, {});
  }
};
