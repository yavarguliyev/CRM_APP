#!/usr/bin/env bash

set -e

PROJECT_NAME='command_line_app'

docker network create common || true

docker-compose --project-name $PROJECT_NAME kill
docker-compose --project-name $PROJECT_NAME rm -f
docker-compose --project-name $PROJECT_NAME pull
docker-compose --project-name $PROJECT_NAME up -d --build