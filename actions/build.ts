import { minify } from "npm:html-minifier";

const ouputDir = Deno.args[0] ?? "dist";

await Deno.mkdir(ouputDir).catch(async () => {
  await Deno.remove(ouputDir, { recursive: true });
  await Deno.mkdir(ouputDir);
});

Deno.copyFile("src/HYZhuanShuF.ttf", ouputDir + "/HYZhuanShuF.ttf");
Deno.copyFile("src/HYZhuanShuF.woff", ouputDir + "/HYZhuanShuF.woff");
Deno.copyFile("src/HYZhuanShuF.woff2", ouputDir + "/HYZhuanShuF.woff2");

const raw = await Deno.readTextFile("src/index.html");
Deno.writeTextFile(
  ouputDir + "/index.html",
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
