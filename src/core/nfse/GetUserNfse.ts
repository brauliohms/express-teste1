import { CasoDeUso } from "../common";
import { ColecaoNfse } from "./ColecaoNfse";
import { INfse, INfseTable } from "./Nfse";

type Entrada = { user_id: number; conferido: boolean; columns?: string[] };

export class GetUserNfse implements CasoDeUso<Entrada, INfseTable[] | INfse[]> {
  public constructor(private bancoDados: ColecaoNfse) {}

  public async executar(dto: Entrada): Promise<INfseTable[] | INfse[]> {
    const nfses = await this.bancoDados.buscarPorIdUsuario(
      dto.user_id,
      dto.conferido,
      dto.columns
    );

    if (!nfses) return [];

    return nfses;
  }
}
