import { DeletarNfse } from "@src/core/nfse";
import { Request, RequestHandler, Response, Router } from "express";

export class DeleteNfseController {
  public constructor(
    private servidor: Router,
    private casoDeUso: DeletarNfse,
    ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para retorno das nfse do usuário conferidas
    this.servidor.delete(
      "/:usuario_id/:nfse_id",
      middleware,
      async (req: Request, res: Response) => {
        try {
          const usuario_id = +req.params.usuario_id;
          const nfse_id = +req.params.nfse_id;
          if (isNaN(usuario_id)) {
            return res.status(400).send("ID Usuário inválido");
          }
          if (isNaN(nfse_id)) {
            return res.status(400).send("ID NFSe inválida");
          }

          await this.casoDeUso.executar({ usuario_id, nfse_id });
          res.sendStatus(200);
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
