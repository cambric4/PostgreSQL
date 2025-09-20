const express = require("express");
const path = require("node:path");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/", userRoutes);

// serve static html (if needed later)
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
