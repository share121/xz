import { minify } from "npm:html-minifier";

await Deno.mkdir("dist").catch(async () => {
  await Deno.remove("dist", { recursive: true });
  await Deno.mkdir("dist");
});

Deno.copyFile("src/HYZhuanShuF.ttf", "dist/HYZhuanShuF.ttf");
Deno.copyFile("src/HYZhuanShuF.woff", "dist/HYZhuanShuF.woff");
Deno.copyFile("src/HYZhuanShuF.woff2", "dist/HYZhuanShuF.woff2");

const raw = await Deno.readTextFile("src/index.html");
Deno.writeTextFile(
  "dist/index.html",
  minify(raw, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
  }),
);
