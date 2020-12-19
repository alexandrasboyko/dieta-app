const fs = require("fs");
const path = require("path");

const pathToIndexHtmlFile = path.resolve(__dirname, `../static/index.html`);

const resolveStaticJsFile = (fileName) =>
  path.resolve(__dirname, `../static/static/${fileName}`);
function getIndexHtmlContent() {
  return fs.readFileSync(pathToIndexHtmlFile, { encoding: "utf-8" });
}
function getStaticJsContent(fileName) {
  if (fs.existsSync(resolveStaticJsFile(fileName))) {
    return fs.readFileSync(resolveStaticJsFile(fileName), {
      encoding: "utf-8",
    });
  }
}

module.exports = {
  getIndexHtmlContent,
  getStaticJsContent,
};
