"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Todos",
            [
                {
                    title: "Ini judul todo ke satu",
                    description: "Ini description todo ke satu",
                    status: "created",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Ini judul todo Kedua",
                    description: "Ini description todo ke dua",
                    status: "created",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Ini judul todo ke tiga",
                    description: "Ini description todo ke tiga",
                    status: "created",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Ini judul todo ke empat",
                    description: "Ini description todo ke empat",
                    status: "created",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Ini judul todo ke lima",
                    description: "Ini description todo ke lima",
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
