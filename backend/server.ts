import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const PORT = process.env.PORT || 500;

/** create a db connection instance */
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "wikigrapher",
});

/** connect */

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is Seth, backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
