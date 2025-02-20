import express from "express";
import axios from "axios";

const app = express();

const PORT = 3000;

// Set up EJS as the template engine
app.set("view engine", "ejs");

app.use(express.static("public"));

// Route to fetch a random cocktail
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktail = response.data.drinks[0];

        res.render("index", { cocktail });
    } catch (error) {
        console.error("Error fetching cocktail:", error);
        res.render("error", { message: "Failed to fetch a cocktail. Please try again!" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
