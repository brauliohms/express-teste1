export interface CasoDeUso<IN, OUT> {
  executar(dto: IN): Promise<OUT>;
}
