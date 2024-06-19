/* eslint-disable max-len */
import { INfseIn, InserirNfse } from "@src/core/nfse";
import { Request, RequestHandler, Response, Router } from "express";

export class InserirNfseController {
  public constructor(
    // private servidor: Express,
    private servidor: Router,
    private casoDeUso: InserirNfse,
    ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para inserir uma nfse do usuário
    servidor.post(
      "/inserir/:id",
      middleware,
      async (req: Request, res: Response) => {
        try {
          const id = +req.params.id;
          if (isNaN(id)) {
            return res.status(400).send("ID inválido");
          }

          const {
            conferido,
            razao_social_prestador,
            razao_social_tomador,
            data_nfse,
            log_integracao,
            numero_nfse,
            valor_servicos,
            pdf_nfse,
            xml_nfse,
          } = req.body as INfseIn;

          // Validações básicas
          if (typeof conferido !== "boolean")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo conferido é obrigatorio e deve ser true ou false"
              );
          if (typeof razao_social_prestador !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo razao_social_prestadpr é obrigatorio e deve ser string"
              );
          if (typeof razao_social_tomador !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo razao_social_tomador é obrigatorio e deve ser string"
              );
          if (typeof data_nfse !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo data_nfse é obrigatorio e deve ser string"
              );
          if (log_integracao && typeof log_integracao !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo log_integracao é opicional e deve ser string"
              );
          if (typeof numero_nfse !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo numero_nfse é obrigatorio e deve ser string"
              );
          if (typeof valor_servicos !== "number")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo valor_servicos é obrigatorio e deve ser number"
              );
          if (pdf_nfse && typeof pdf_nfse !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo pdf_nfse é opicional e deve ser string"
              );
          if (xml_nfse && typeof xml_nfse !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo xml_nfse é opicional e deve ser string"
              );

          const nfse: INfseIn = {
            usuario_id: id,
            conferido,
            razao_social_prestador,
            razao_social_tomador,
            data_nfse,
            log_integracao,
            numero_nfse,
            valor_servicos,
            pdf_nfse,
            xml_nfse,
          };

          await casoDeUso.executar({ nfse });

          res.status(201).json({ message: "Nfse criada com sucesso" });
        } catch (error) {
          // Verifica se o erro é uma instância de Error
          if (error instanceof Error) {
            res.status(500).send(error.message);
          } else {
            res.status(500).send("Erro desconhecido");
          }
        }
      }
    );
  }
}
