'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'kimcoding@codestates.com',
        name: '김코딩',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'kmh@codestates.com',
        name: '김민혁',
        password: '4567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: 'kdg@codestates.com',
        name: '김동길',
        password: '1357',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        email: 'hwy@codestates.com',
        name: '홍왕열',
        password: '2468',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        email: 'ljm@codestates.com',
        name: '이정민',
        password: '1290',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('users', null, {});
  }
};
