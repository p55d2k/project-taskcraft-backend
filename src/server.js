const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(5775, () => {
  console.log("Server started on http://localhost:5775");
});
