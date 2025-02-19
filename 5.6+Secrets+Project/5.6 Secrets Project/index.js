import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the public folder
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    // Correct API request
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    // Render the index.ejs file with secret data
    res.render("index", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.error("Error fetching secret:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
