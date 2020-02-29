import express from "express";

const app = express();

const PORT = process.env.PORT || 7777;

app.get("/", (req, res) => {
  res.json({ message: "It works! :)" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
