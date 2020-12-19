const fs = require("fs");
const path = require("path");

const pathToIndexHtmlFile = path.resolve(__dirname, "../static/index.html");

function getIndexHtmlContent() {
  return fs.readFileSync(pathToIndexHtmlFile, { encoding: "utf-8" });
}

module.exports= {
    getIndexHtmlContent
}
