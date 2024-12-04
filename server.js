const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")

dotenv.config();

const app = express();

// middle wares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Configure routes
app.use("/api", userRoutes); // http://localhost:3000/api/users

// connect to database
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDb connect error", error));

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
