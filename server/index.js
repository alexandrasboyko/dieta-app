const Koa = require("koa");
const Router = require("@koa/router");
const router = new Router();
const app = new Koa();

const staticUtils = require("./static.utils");

router.get("/", (ctx) => {
  console.log(ctx.request.path);
  ctx.type = "text.html; charset=utf-8";
  ctx.body = staticUtils.getIndexHtmlContent();
});

router.get("/static/:filepath", (ctx) => {
    ctx.type='application/javascript';
    ctx.body = staticUtils.getStaticJsContent(ctx.params.filepath)
  ;
});

//reponse
app.use(router.routes());

app.listen(3000);
