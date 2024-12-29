import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import mysql from "mysql2";

import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import { expressjwt } from "express-jwt";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/** create a db connection instance */
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "wikigrapher",
});

/** connect */
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database");
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Hello this is Seth, backend is running");
});

/** ---------------- VALIDATE TOKEN **/

const checkJWT = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-3vinuj746r0iz12j.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "",
  issuer: "",
  algorithms: ["RS256"],
});

// const checkJWT = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https:///.well-known/jwks.json`,
//   }),
//   audience: "",
//   issuer: "",
//   algorithms: ["RS256"],
// });

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
