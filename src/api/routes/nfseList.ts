import { Router } from "express";
import { knexConnector } from "../../database";
import { selectNfseData } from "../../services";

export const routerNfseList = Router();

routerNfseList.get("/", (req, res) =>
  res.status(200).json("Bem vindo integradocs")
);

routerNfseList.get("/conferidos/:id", async (req, res) => {
  const user_id = +req.params.id;
  const columns = [
    "id",
    "razao_social_prestador",
    "razao_social_tomador",
    "numero_nfse",
    "data_nfse",
    "valor_servicos",
    "pdf_nfse",
    "xml_nfse",
    "log_integracao",
  ];
  try {
    const dados = await selectNfseData(knexConnector, columns, user_id, true);
    res.status(200).send(dados);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerNfseList.get("/nao-conferidos/:id", async (req, res) => {
  const user_id = +req.params.id;
  const columns = [
    "id",
    "razao_social_prestador",
    "razao_social_tomador",
    "numero_nfse",
    "data_nfse",
    "valor_servicos",
    "pdf_nfse",
    "xml_nfse",
    "log_integracao",
  ];
  try {
    const dados = await selectNfseData(knexConnector, columns, user_id, false);
    res.status(200).send(dados);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerNfseList.get("/conferidosall/:id", async (req, res) => {
  const user_id = +req.params.id;
  const columns = ["*"];
  try {
    const dados = await selectNfseData(knexConnector, columns, user_id, true);
    res.status(200).send(dados);
  } catch (error) {
    res.status(500).send(error);
  }
});
