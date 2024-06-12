import { Knex } from "knex";
import { INfseTable } from "../../types";

export const selectNfseData = async (
  conexao: Knex,
  columns: string[] = ["*"],
  user_id: number = 1,
  conferido: boolean = true
): Promise<INfseTable[]> => {
  const data: INfseTable[] = await conexao("nfse_nfse")
    .select<INfseTable[]>(columns)
    .where({ usuario_id: user_id, conferido });
  return data;
};
