#!/bin/bash
# remember to chmod +x go

function usage()
{
  echo "Usage:"
  echo "    go                    Display this help message"
  echo "    go up                 Run the app"
  echo "    go spec               Run the specs"
  echo "    go install            Install dependencies"
}


function up {
  npm run build
  npm run start
}

function spec {
 npm run test
}

function install_deps {
  npm install
}

if [ "$1" == "up" ]; then
  up
elif [ "$1" == "spec" ]; then
  spec
elif [ "$1" == "install" ]; then
  install_deps
else
  usage
fi