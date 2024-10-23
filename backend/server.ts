import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is Seth, backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
