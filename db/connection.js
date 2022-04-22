const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db',
  define: {
    timestamps: true
  }
});

module.exports = sequelize