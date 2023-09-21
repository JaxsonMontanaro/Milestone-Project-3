'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert("Contacts", [
    {
      id: "1",
      first_name: "Peter",
      last_name: "Parker",
      email: "notspiderman@hotmail.com",
      message: "Can you build me a website?",
      createdAt: '2023-06-22 19:10:25-07',
      updatedAt: '2023-06-22 19:10:29-07'
    },
    {
      id: "2",
      first_name: "Peter",
      last_name: "Griffin",
      email: "peterpumpkineater@gmail.com",
      message: "Hey loish look at my brand new Shoes... I call them Peter Cheeses. Dont you think that they are super duper cool! hehehehheheheheheheheh",
      createdAt: '2023-06-22 19:10:26-07',
      updatedAt: '2023-06-22 19:10:29-07'
    },
    {
      id: "3",
      first_name: "Mr.",
      last_name: "Beast",
      email: "mrbeast6000@gmail.com",
      message: "Heres $10,000!",
      createdAt: '2023-06-22 19:10:27-07',
      updatedAt: '2023-06-22 19:10:29-07'
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {});
  }
};
