import { readFileSync, writeFileSync } from 'fs';

// package.json -> public/manifest.json / src/constants/info.js
let manifest = JSON.parse(readFileSync('public/manifest.json', 'utf-8'));
let package_ = JSON.parse(readFileSync('package.json', 'utf-8'));

let info = {
   name: package_.name,
   description: package_.description,
   version: package_.version,
   start_url: package_.homepage
}

for (let key in info) manifest[key] = info[key];

writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 3), 'utf-8');
writeFileSync('src/constants/info.js', `const info = ${JSON.stringify(info, null, 3)}\n\nexport default info;`, 'utf-8');