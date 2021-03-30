const express = require("express");
const path = require("path");
const app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://sreeharsha:mongodb@cluster0.aiglg.mongodb.net/sample?retryWrites=true&w=majority",
  function (err, database) {
    if (err) {
      console.log(err);
    } else {
      db = database;
      console.log("connected to database");
    }
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;

  var data = {
    name: name,
    email: email,
    password: pass,
    phone: phone,
  };
  db.collection("details").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.redirect("index.html");
});

app.listen(5000, () => {
  console.log("Listening on port", +5000);
});
