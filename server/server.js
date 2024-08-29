import express from "express";

const app = express();

// routes

app.get("/", (req, res) => {
  try {
    res.json("get response");
  } catch (error) {
    res.json(error);
  }
});

app.listen(8080, () => {
  console.log("Server Connected at https://localhost:8080 ");
});
