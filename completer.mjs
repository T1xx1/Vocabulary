import { readFileSync, writeFileSync } from 'fs';

// public/manifest.json + package.json -> src/constants/manifest.js
let app = {
   manifest: JSON.parse(readFileSync('public/manifest.json', 'utf-8')),
   version: JSON.parse(readFileSync('package.json', 'utf-8')).version
}
writeFileSync('src/constants/info.js', `const app = ${JSON.stringify(app, null, 3)}\n\nexport default app;`);