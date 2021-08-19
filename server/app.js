const express = require("express");
// require("node-jsx").install();
const app = express();

app.use(express.static("dist"));
const { render } = require("./utils");

app.get("/api/list", function(req, res, next) {
  res.json({
    data: Array(5)
      .fill(0)
      .map((_, index) => ({ id: index, name: "name" + index }))
  });
});

app.use("*", function(req, res, ctx) {
  res.send(render(req));
});

app.listen(3001, () => {
  console.log("listen on port 3001");
});
