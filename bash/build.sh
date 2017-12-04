#!bin/bash


cd `dirname $0`
cd ../
cp -pr dist/ docs/
cp -p index.html manifest.json sw.js docs/