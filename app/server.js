import koa from "koa";
import proxy from "koa-proxy";
import path from "path";
import React from "react";
import serveStatic from "koa-static";
import Application from "./components/Application";
import HTMLDocument from "./components/HTMLDocument";

const app = koa();

app.use(serveStatic(path.join(__dirname, "../public")));
app.use(function* (next) {
  const markup = React.renderToString(<Application />);
  const html = React.renderToStaticMarkup(
    <HTMLDocument
      markup={ markup } />
  );
  this.body = `<!doctype>${html}`;
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
