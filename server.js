const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ONLY JSON middleware (NO CORS)
app.use(express.json());

// Routes
const jobRoutes = require("./routes/jobroutes");
app.use("/api/jobs", jobRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/jobPortalDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});