#!/bin/sh

echo "/!\ Nécessite MongoDB. Assurez-vous de l'avoir installé sur votre machine."

# nettoyer base MongoDB "ecoviz"
mongod > mongod.log 2>&1 &

./wait-for-it.sh localhost:27017

mongo ecoviz --eval "db.dropDatabase();"

mongo ecoviz mongoDbData.js

# télécharger https://repo.maven.apache.org/maven2/fish/payara/extras/payara-micro/5.182/payara-micro-5.182.jar
# le placer à la racine du projet
wget "https://repo.maven.apache.org/maven2/fish/payara/extras/payara-micro/5.182/payara-micro-5.182.jar"

# se placer dans ecoviz-service : "mvn install -Dmaven.test.skip=true"
mvn install -Dmaven.test.skip=true

if [ -f payara.log ]; then
    rm payara.log
fi
# se placer à la racine : "java -jar payara-micro-5.182.jar ./target/extracted-payaramicro/MICRO-INF/deploy/ecoviz-service-1.0.1.war --port 8083"
java -jar payara-micro-5.182.jar ./target/extracted-payaramicro/MICRO-INF/deploy/ecoviz-service-1.0.1.war --port 8083 > payara.log 2>&1 &
while ! grep 'REST Endpoints' payara.log; do sleep 2; done
echo "Payara OK"

# afficher la valeur de "Payara Micro URLs"
sed -n '/Payara Micro URLs/{n;p;}' payara.log

#afficher la valeur de "Creating a default user"
grep -A 6 "===== EcoViz =====" payara.log

# créé le fichier apiUrl.json et y enregistre l'url
result=`sed -n '/Payara Micro URLs/{n;p;}' payara.log`
echo "{ \"url\": \"$result\" }" > ../ecoviz-front/src/environments/apiUrl.json
