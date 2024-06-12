#!/usr/bin/env bash

docker run --name test1 --network projeto-idok_postgres -p 4000:4000 -d projeto-express:0.1.0
