#!/bin/bash

if /wait-for-it.sh -t 60 $POSTGRES_HOST:$POSTGRES_PORT; then
  python manage.py migrate
  python manage.py loaddata config/initial_superusers.json
  exec "$@"
else
  echo -e "[ERROR]: Postgres server is not running.\n"
  exit -1
fi