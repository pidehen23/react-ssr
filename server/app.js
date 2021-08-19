const express = require("express");
// require("node-jsx").install();
const app = express();

app.use(express.static("dist"));
const { render } = require("./utils");

app.use("*", function(req, res, ctx) {
  res.send(render(req));
});

app.listen(3001, () => {
  console.log("listen on port 3001");
});
