#!/usr/bin/env bash

# --- CONFIGURACAO --- #
CONTAINER_NAME="expressv2"
NETWORK="projeto-idok_net_idok"
NETWORK_DB="projeto-idok_postgres"
ENV_FILE=".env"
IMAGEDOCKER_NAME="projeto-express"
IMAGEDOCKER_TAG="0.2.0"

# --- NAO ALTERAR --- #
NETWORK_ALIAS="${CONTAINER_NAME}"

docker run --name "${CONTAINER_NAME}" --network "${NETWORK}" --network-alias "${NETWORK_ALIAS}" --env-file "${ENV_FILE}" -d "${IMAGEDOCKER_NAME}":"${IMAGEDOCKER_TAG}" && docker network connect "${NETWORK_DB}" "${CONTAINER_NAME}"
