/*
regular expression in express routing
*/

const express = require('express');
const app = express();

// ✅ ID must be 3 digits
app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  if (!/^[0-9]{3}$/.test(id)) {
    return res.status(400).send("<h2>Invalid ID — must be exactly 3 digits</h2>");
  }

  res.send(`<h2>ID = ${id}</h2>`);
});

// ✅ Title must be 3 letters
app.get("/products/title/:title", (req, res) => {
  const title = req.params.title;

  if (!/^[a-zA-Z]{3}$/.test(title)) {
    return res.status(400).send("<h2>Invalid title — must be exactly 3 letters</h2>");
  }

  res.send(`<h2>Title = ${title}</h2>`);
});

// ✅ 404 fallback (Express 5 safe version)
app.use((req, res) => {
  res.status(404).send({
    message: "not a valid route",
  });
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
