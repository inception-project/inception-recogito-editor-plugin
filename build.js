const esbuild = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin');

esbuild.build({
  entryPoints: ["src/main.ts"],
  outfile: "dist/RecogitoEditor.min.js",
  bundle: true,
  sourcemap: true,
  minify: true,
  target: "es6",
  globalName: "RecogitoEditor",
  loader: { ".ts": "ts" },
  logLevel: 'info',
  plugins: [sassPlugin()]
})
