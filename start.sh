#!/usr/bin/env bash

# --- CONFIGURACAO --- #
CONTAINER_NAME="expressv2"
NETWORK="projeto-idok_postgres"
ENV_FILE=".env"
PORT="4000"
IMAGEDOCKER_NAME="projeto-express"
IMAGEDOCKER_TAG="0.2.0"

# --- NAO ALTERAR --- #
docker run --name "${CONTAINER_NAME}" --network "${NETWORK}" --env-file "${ENV_FILE}" -p "${PORT}":4000 -d "${IMAGEDOCKER_NAME}":"${IMAGEDOCKER_TAG}"
