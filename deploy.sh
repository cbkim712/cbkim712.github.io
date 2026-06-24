#!/bin/bash
npm run build
cd build
git init
git add .
git commit -m "deploy"
git branch -M gh-pages
git remote add origin https://github.com/cbkim712/cbkim712.github.io.git
git push origin gh-pages --force
cd ..
echo "✅ Deployed to cbkim712.github.io!"