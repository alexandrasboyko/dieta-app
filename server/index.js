const Koa = require("koa");
const Router = require("@koa/router");
const router = new Router();
const app = new Koa();

const staticUtils = require("./static.utils");

router.get("*", (ctx) => {
  ctx.type = "text.html; charset=utf-8";
  ctx.body = staticUtils.getIndexHtmlContent();
});



//reponse
app.use(router.routes());

app.listen(3000);
