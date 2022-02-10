#!/usr/bin/env bash

set -e

PROJECT_NAME='command_line_app'

docker-compose --project-name $PROJECT_NAME down
docker-compose --project-name $PROJECT_NAME rm -f

docker image prune -f
docker volume prune -f
docker rmi -f $(docker images -a -q)