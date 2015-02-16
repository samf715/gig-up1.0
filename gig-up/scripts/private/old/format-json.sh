#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/events | grep -v \\\.\$`; do
  cat app/events/$file | python -mjson.tool > tmp.json
  rm app/events/$file
  mv tmp.json app/events/$file
done
