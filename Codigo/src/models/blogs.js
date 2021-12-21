const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blog = new Schema({
  titulo: String,
  autor: String,
  fecha: String,
  contenido: String,
  comentarios: [
    {
      nombre: String,
      comentario: String,
    },
  ],
  foto: String,
});

module.exports = mongoose.model("blog", blog);
