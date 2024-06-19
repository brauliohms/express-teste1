import { GetUserNfse } from "@src/core/nfse";
import { Request, RequestHandler, Response, Router } from "express";

export class GetUserNfseController {
  public constructor(
    // private servidor: Express,
    private servidor: Router,
    private casoDeUso: GetUserNfse,
    ...middleware: RequestHandler[]
  ) {
    // Função para verificar se um valor é um array de strings
    const isStringArray = (value: unknown): value is string[] => {
      return (
        Array.isArray(value) && value.every((item) => typeof item === "string")
      );
    };

    // ENDPOINT para retorno das nfse do usuário conferidas
    this.servidor.post(
      "/conferidas/:id",
      middleware,
      async (req: Request, res: Response) => {
        try {
          const id = +req.params.id;
          if (isNaN(id)) {
            return res.status(400).send("ID inválido");
          }

          if (!isStringArray(req.body)) {
            return res
              .status(400)
              .send("O corpo da requisição deve ser um array de strings");
          }

          const columns: string[] = req.body;

          const nfses = await this.casoDeUso.executar({
            user_id: id,
            conferido: true,
            columns,
          });
          res.status(200).json(nfses);
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

    // ENDPOINT para retorno das nfse do usuário conferidas
    this.servidor.get(
      "/conferidas/:id",
      middleware,
      async (req: Request, res: Response) => {
        try {
          const id = +req.params.id;
          if (isNaN(id)) {
            return res.status(400).send("ID inválido");
          }

          const nfses = await this.casoDeUso.executar({
            user_id: id,
            conferido: true,
          });
          res.status(200).json(nfses);
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

    // ENDPOINT para retorno das nfse do usuário não conferidas
    this.servidor.get(
      "/nao-conferidas/:id",
      middleware,
      async (req: Request, res: Response) => {
        try {
          const id = +req.params.id;
          if (isNaN(id)) {
            return res.status(400).send("ID inválido");
          }

          const nfses = await this.casoDeUso.executar({
            user_id: id,
            conferido: false,
          });
          res.status(200).json(nfses);
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
