import { Knex } from "knex";

export const selectNfseData = async (
  conexao: Knex,
  columns: string[] = ["*"],
  user_id: number = 1,
  conferido: boolean = true
) => {
  const data = await conexao
    .select(columns)
    .from("nfse_nfse")
    .where({ usuario_id: user_id, conferido });
  return data;
};
