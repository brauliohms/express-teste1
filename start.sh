#!/usr/bin/env bash

docker run --name expressv2 --network projeto-idok_postgres --env-file .env -p 4000:4000 -d projeto-express:0.1.0
# docker run --name test1 --env-file .env -p 4000:4000 -d projeto-express:0.2.0
