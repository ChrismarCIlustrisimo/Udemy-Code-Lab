import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "BookList",
  password: "admin",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // For form data
app.set("view engine", "ejs");

// Route: Home (Displays Books)
app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book ORDER BY id ASC");
        res.render("index.ejs", { books: result.rows });
    } catch (err) {
        console.log(err);
    }
});

// Route: Add Book Form
app.get("/books/add", (req, res) => {
    res.render("add.ejs");
});

// Route: Edit Book Form (Loads book details)
app.get("/books/edit/:id", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book WHERE id = $1", [req.params.id]);
        if (result.rows.length > 0) {
            res.render("update.ejs", { book: result.rows[0] });
        } else {
            res.send("Book not found");
        }
    } catch (err) {
        console.log(err);
    }
});

// Route: Update Book (Handles form submission)
app.post("/books/update/:id", async (req, res) => {
    try {
        const { title, author, date_read } = req.body;
        await db.query("UPDATE book SET title = $1, author = $2, date_read = $3 WHERE id = $4", 
            [title, author, date_read, req.params.id]
        );
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

// Route: Delete Book
app.post("/books/delete/:id", async (req, res) => {
    try {
        await db.query("DELETE FROM book WHERE id = $1", [req.params.id]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
