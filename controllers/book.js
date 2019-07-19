  //CONTROLLERS
const Book = require('../models/book');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


module.exports.getAllBook = (req, res) => {
    // jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
    //     if(authData['roles']  == "user") {
            Book
                .findAll({
                    // attributes : ['id', 'kode', 'kategori', 'judul', 'pengarang', 'penerbit', 'tahun_terbit', 'deskripsi', 'stok', 'harga', 'berat']
                })
                .then((book) => {
                    res.json(book);
                })
                .catch((error) => {
                    console.log("Data gagal di load");
                })
    //     } else {
    //         res.sendStatus(403);
    //     }
    // }) 

}
module.exports.updateBook = (req, res) => {
    
    // jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
    //     if(authData['roles'] == "admin") {
      let value = {
      judul: req.body.judul,
      kategori: req.body.kategori,
      harga: req.body.harga,
      stok: req.body.stok
    }

    let conditional = {
      where : {id: req.params.id}
    }

    Book.
    update(value, conditional).then((book)=>{
      res.json(book);
    }).catch((error)=>{
      console.log("Data gagal di rubah!");
    }) 
    // }else {
    //         res.sendStatus(403);
    //     }
    // }) 
}

module.exports.deleteBook = (req, res) => {
// jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
//         if(authData['roles'] == "admin") {
    let conditional = {
      where : {id: req.params.id}
    }

    Book.
    destroy(conditional).then((book)=>{
      res.json(book);
    }).catch((error)=>{
      console.log("Data gagal di hapus!");
    })
    // }else {
    //         res.sendStatus(403);
    //     }
    // })  
}

module.exports.createBook = (req, res) => {
		// jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
  //       if(authData['roles'] == "admin") {
    Book.
    create({
			judul: req.body.judul,
      kategori: req.body.kategori,
      harga: req.body.harga,
			stok: req.body.stok
		}).then((book)=>{
			res.json(book);
		}).catch((error)=>{
			throw error;
		})
    // }else {
    //         res.sendStatus(403);
    //     }
    // })	
}

