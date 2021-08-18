const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
require("node-jsx").install();
const app = express();

const Home = require("../src/component/Home.js");
const content = renderToString(React.createElement(Home));
app.use(express.static("dist"));

app.use("/", function(req, res, next) {
  res.send(
    `
     <html>
       <head>
         <title>ssr</title>
       </head>
       <body>
         <div id="root">${content}</div>
       </body>
       <script src="/index.js"></script>
     </html>
    `
  );
});

app.listen(3001, () => {
  console.log("listen on port 3001");
});
