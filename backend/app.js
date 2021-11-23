require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();
const dbHelpers = require("./db/helpers/dbHelpers")(db);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", usersRouter(dbHelpers));

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
    db.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
      [name, email, password],
      (err, result) => {
        console.log(err);
      }
    );

});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password],
    (err, result) => {
      if (err) {
        console.log({err : err});
      }
			if(result.rows.length > 0){
				res.send(result.rows);
			} else{
				res.send({message: "Wrong Combination"});
			}
    }
  );
});

module.exports = app;
