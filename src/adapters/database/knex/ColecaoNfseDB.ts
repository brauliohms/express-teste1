import { ColecaoNfse, INfse, INfseIn, INfseTable } from "@src/core/nfse";
import dotenv from "dotenv";
import { conexao } from ".";
dotenv.config();

const tableDB: string = process.env.TABLE_NFSE || "";

export class ColecaoNfseDB implements ColecaoNfse {
  private columnsTable = [
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

  public async inserir(nfse: INfseIn): Promise<void> {
    await conexao.table(tableDB).insert(nfse);
  }

  public async deletar(usuario_id: number, nfse_id: number): Promise<void> {
    await conexao.table(tableDB).where({ usuario_id, id: nfse_id }).del();
  }

  public async buscarPorIdUsuario(
    usuario_id: number,
    conferido: boolean,
    columns: string[] = this.columnsTable
  ): Promise<INfseTable[] | INfse[] | null> {
    return await conexao(tableDB)
      .select<INfseTable[] | INfse[]>(columns)
      .where({ usuario_id: usuario_id, conferido });
  }
}
