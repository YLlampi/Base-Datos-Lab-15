import path from "path";
import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";


const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs",
    exphbs({
      layoutsDir: path.join(app.get("views"), "layouts"),
      defaulLayout: "main",
      extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes)

export default app;