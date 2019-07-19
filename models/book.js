//MODULES
const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
  	judul: Sequelize.STRING,
  	kategori: Sequelize.STRING,
  	harga: Sequelize.INTEGER,
  	stok: Sequelize.INTEGER
}, { sequelize, modelName: 'book' });

module.exports = Book;