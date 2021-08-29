const express = require("express");
const app = express();
const path = require("path");

const RouterHome = require("./Router/RouterHome");
const routerApp = require("./Router/RouterApp");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/public", express.static(path.join(__dirname, "./image")));
app.use("/user", routerApp);
app.use("/", RouterHome);

app.listen(9999);
