import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "BookList",
  password: "admin",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;

  try{
      let checkDublicate = await db.query("SELECT * FROM users WHERE email = $1", [email])

      if(checkDublicate.length > 0){
        res.send("Email already exists. Try logging in.");

      } else {
         await db.query("INSERT INTO users (email, password) VALUES ($1, $2)",
           [email, password])
           res.render("login.ejs");
      }
  }catch (err){
    console.log(err)
  }

});

app.post("/login", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;
  
    try{
      const result = await db.query("SELECT * FROM users WHERE email = $1", [email])
      let correctAccount = result.rows;

      if(correctAccount[0].password == password){
        res.render("secrets.ejs");
      }else{
        res.send("Incorrect password. Try again.");
      }
    }catch(err) {
      console.log(err);
      res.send("Error logging in.");
    }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
