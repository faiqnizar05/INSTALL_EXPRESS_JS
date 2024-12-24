const express = require("express");

const router = require("./routes/api.js")

const app = express();

app.use(router);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


