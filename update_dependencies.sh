#!/usr/bin/bash

# Para esse script funcionar é preciso ter a ferramenta "jq" instalada.
# Link da ferramenta: https://jqlang.github.io/jq/

dependencies=`cat package.json | jq -r '.dependencies | keys[]'`
dev_dependencies=`cat package.json | jq -r '.devDependencies | keys[]'`

rm -rf node_modules .next
rm package-lock.json

echo "------------ Desinstalando dependências ------------"

npm remove $dependencies
npm remove $dev_dependencies

echo "------------ Instalando dependências novamente ------------"

npm install $dependencies
npm install -D $dev_dependencies
