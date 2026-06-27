const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Mayan\\.gemini\\antigravity-ide\\brain\\51e9cebb-ee95-4008-b873-d11976c7522d';
const destDir = path.join(__dirname, 'public');

const files = [
  { src: 'event_tech_summit_1782584375333.png', dest: 'event-bharat-trilogy.png' },
  { src: 'event_investors_conclave_1782584394764.png', dest: 'event-tiecon-mp.png' },
  { src: 'event_design_expo_1782584410511.png', dest: 'event-hev-capital.png' },
  { src: 'event_csuite_roundtable_1782584423754.png', dest: 'event-oud-idol.png' }
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

files.forEach(f => {
  const srcPath = path.join(srcDir, f.src);
  const destPath = path.join(destDir, f.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.src} -> public/${f.dest}`);
  } else {
    console.warn(`Source file not found: ${srcPath}`);
  }
});
console.log('Copying complete!');
