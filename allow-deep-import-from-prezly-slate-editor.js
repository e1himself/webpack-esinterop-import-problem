const fs = require('fs');
const packageJson = require('./node_modules/@prezly/slate-editor/package.json');
const { exports: _, ...patchedPackageJson } = packageJson;

fs.writeFileSync('./node_modules/@prezly/slate-editor/package.json', JSON.stringify(patchedPackageJson, null, 4));
