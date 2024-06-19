import { CasoDeUso } from "../common";
import { ColecaoNfse } from "./ColecaoNfse";

type E = { usuario_id: number; nfse_id: number };

export class DeletarNfse implements CasoDeUso<E, void> {
  public constructor(private bancoDados: ColecaoNfse) {}
  public async executar(dto: E): Promise<void> {
    await this.bancoDados.deletar(dto.usuario_id, dto.nfse_id);
  }
}
