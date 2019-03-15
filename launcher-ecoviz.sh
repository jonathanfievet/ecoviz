#!/bin/sh

echo "=== Préparation de la base de données... ==="
sh ./launcher-ecoviz-database.sh

echo "=== Lancement du front... =================="
sh ./ecoviz-front/launcher-ecoviz-front.sh

echo "=== Lancement du back... ==================="
sh ./ecoviz-service/launcher-ecoviz-service.sh
