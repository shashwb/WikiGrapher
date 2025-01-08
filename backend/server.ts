// import express, { Request, Response, NextFunction } from "express";
// import cors from "cors";
// import mysql from "mysql2";

// import jwt from "express-jwt";
// import jwksRsa from "jwks-rsa";
// import { expressjwt } from "express-jwt";

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// /** create a db connection instance */
// const db = mysql.createConnection({
//   host: "db",
//   user: "root",
//   password: "root",
//   database: "wikigrapher",
// });

// /** connect */
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database");
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Hello this is Seth, backend is running");
// });

// /** ---------------- VALIDATE TOKEN **/

// const checkJWT = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://dev-3vinuj746r0iz12j.us.auth0.com/.well-known/jwks.json`,
//   }),
//   audience: "",
//   issuer: "",
//   algorithms: ["RS256"],
// });

// // const checkJWT = jwt({
// //   secret: jwksRsa.expressJwtSecret({
// //     cache: true,
// //     rateLimit: true,
// //     jwksRequestsPerMinute: 5,
// //     jwksUri: `https:///.well-known/jwks.json`,
// //   }),
// //   audience: "",
// //   issuer: "",
// //   algorithms: ["RS256"],
// // });

// /** ---------------- API ROUTES **/

// /** fetch a list of categories */
// app.get("/categories", (req, res) => {
//   db.query("SELECT * FROM categories", (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     console.log("hello!");
//     res.json(results);
//   });
// });

// /** ---------------- (end) API ROUTES **/

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

/** restart the whole server */
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import mysql from "mysql2";
import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

const app = express();
const PORT = process.env.PORT || 3001;

/** auth0 config  */
const authConfig = {
  domain: "https://dev-3vinuj746r0iz12j.us.auth0.com", // ensures tokens are issued by the correct auth0 domain
  audience: "https://dev-3vinuj746r0iz12j.us.auth0.com/api/v2/", // ensures that tokens are meant for this API
};

const checkJWT = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-3vinuj746r0iz12j.us.auth0.com/.well-known/jwks.json`,
  }) as any,
  audience: authConfig.audience,
  issuer: authConfig.domain,
  algorithms: ["RS256"],
});

/** middleware  */
/** cors allows my frontend (localhost) to make requests to the backend without cross origin concerns */
app.use(cors());
app.use(express.json());

/** routes */
/** health check */
app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "Server is running",
  });
});

/** public route */
app.get("/api/public", (req: Request, res: Response) => {
  res.json({
    status: "Public endpoint, no authentication required",
  });
});

/** protected route */
app.get("/api/protected", checkJWT, (req: any, res: Response) => {
  res.json({
    status: "Protected endpoint, authentication required",
    message: "Authenticated!",
    user: req.user,
  });
});

/** ERROR HANDLING middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      status: "Unauthorized",
      message: "Invalid or missing token",
    });
  } else {
    next(err);
  }
});

/** endpoints for application */
/** currently just mock data */
const trending = ["Bollywood", "Mahatma Gandhi", "Quantum Physics"];
const graph = {
  nodes: [{ id: "Bollywood" }, { id: "India" }, { id: "Movies" }],
  edges: [
    { source: "Bollywood", target: "India" },
    { source: "Bollywood", target: "Movies" },
  ],
};

app.get("/api/trending", (req: Request, res: Response) => {
  res.json(trending);
});

app.get("/api/article/:title", (req: Request, res: Response) => {
  res.json({
    title: req.params.title,
    content: `Content for ${req.params.title}`,
    metadata: { hits: 123456, lastUpdated: "2025-01-06", wordCount: 2345 },
  });
});

app.get("/api/graph/:title", (req: Request, res: Response) => {
  res.json(graph);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
