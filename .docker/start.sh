#!/bin/bash


source ~/.bashrc

rbenv install 3.2.2

rbenv global 3.2.2

echo "gem: --no-document" > ~/.gemrc

gem install bundler

npm install npm@10.2.4 --location=global
npm install @shopify/cli @shopify/theme --location=global
yarn

tail -f /dev/null 
#npm run start:dev