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

console.log("<<< SERVER >>> hello world!");

/** connect */
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database");
  } else {
    console.log("Connected to MySQL database");
  }
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is Seth, backend is running");
});

/** ---------------- API ROUTES **/

/** fetch a list of categories */
app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("hello!");
    res.json(results);
  });
});

/** ---------------- (end) API ROUTES **/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
