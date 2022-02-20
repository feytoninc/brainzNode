import express from "express";
import apiRoute from "./src/main.js";
import path, { join } from "path";
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, "./client/build")));

app.use("/api", apiRoute);

app.use("*", (req, res) => {
  res.sendFile(join(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is running");
});
