import { INfse, INfseIn, INfseTable } from "./Nfse";

export interface ColecaoNfse {
  inserir(nfse: INfseIn): Promise<void>;
  deletar(usuario_id: number, nfse_id: number): Promise<void>;
  buscarPorIdUsuario(
    usuario_id: number,
    conferido: boolean,
    columns?: string[]
  ): Promise<INfseTable[] | INfse[] | null>;
}
