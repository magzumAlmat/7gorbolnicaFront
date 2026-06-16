const fs = require('fs');
const path = require('path');

const innerDir = path.join(__dirname, 'src/app/(inner)');

const excludePaths = [
  path.join(innerDir, 'news'),
  path.join(innerDir, 'about-us/page.js'),
  path.join(innerDir, 'layout.js')
];

function traverse(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (excludePaths.some(ex => fullPath.startsWith(ex))) {
      continue;
    }
    
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (file === 'page.js') {
      const parts = fullPath.replace(innerDir, '').split('/').filter(Boolean);
      // parts for /about-us/governing-bodies/page.js is ['about-us', 'governing-bodies', 'page.js']
      // The number of levels from 'src/app/(inner)' to 'src' is 2 ('app', '(inner)').
      // So from 'src/app/(inner)/about-us/governing-bodies', we are 2 levels below (inner). Total levels to src = 2 + 2 = 4.
      // So number of '../' is parts.length + 1. (since parts includes 'page.js', parts.length is 3. 3 + 1 = 4).
      const numUps = parts.length + 1;
      
      let relativePath = '';
      for (let i = 0; i < numUps; i++) {
        relativePath += '../';
      }
      
      const adjustedContent = `'use client';\n\nimport DynamicKazniisaPage from '${relativePath}components/DynamicKazniisaPage';\n\nexport default function Page() {\n  return <DynamicKazniisaPage />;\n}\n`;
      
      fs.writeFileSync(fullPath, adjustedContent);
      console.log('Fixed:', fullPath, 'with', relativePath);
    }
  }
}

traverse(innerDir);
