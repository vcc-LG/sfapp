FROM mongo
COPY data.json /tmp/data.json
CMD mongoimport --host mongo --db sfdb --collection users --type json --file /tmp/data.json --jsonArray
