import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:5520/v1/node/api/web/blog/",
    changeOrigin: true,
  }),
);

app.listen(3000);
