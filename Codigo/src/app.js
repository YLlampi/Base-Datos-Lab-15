const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//conectando a la base de datos
mongoose
  .connect("mongodb://localhost:27017/conexion")
  .then((db) => console.log("DB connected"))
  .catch((err) => console.log(err));

//importando rutas
const indexRoutes = require("./routes/index");

//settings

app.set("port", process.env.port || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//rutas
app.use("/", indexRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
