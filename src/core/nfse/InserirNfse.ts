import { CasoDeUso } from "../common";
import { ColecaoNfse } from "./ColecaoNfse";
import { INfseIn } from "./Nfse";

type E = { nfse: INfseIn };

export class InserirNfse implements CasoDeUso<E, void> {
  public constructor(private bancoDados: ColecaoNfse) {}

  public async executar(dto: E): Promise<void> {
    await this.bancoDados.inserir(dto.nfse);
  }
}
