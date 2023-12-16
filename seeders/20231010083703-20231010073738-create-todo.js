'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'Membuat API',
        description: 'Membuat API menggunakan Express.js dan PostgreSQL',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tugas Matematika',
        description: 'Mengerjakan halaman 100',
        status: 'in_progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan Anda
    ],
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
