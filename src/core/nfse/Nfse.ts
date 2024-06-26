export interface INfseTable {
  id: number;
  razao_social_prestador: string;
  razao_social_tomador: string;
  numero_nfse: string;
  data_nfse: string;
  valor_servicos: number;
  pdf_nfse?: string;
  xml_nfse?: string;
  log_integracao?: string;
}

export interface INfseIn extends Partial<INfseTable> {
  conferido: boolean;
  usuario_id: number;
}

export interface INfseDTO extends Omit<INfseTable, "id"> {
  data_importacao?: string;
  nfse_extractor_versao?: string;
  codigo_verificacao?: string;
  serie?: string;
  tipo?: string;
  base_calculo?: number;
  aliquota?: number;
  valor_iss?: number;
  valor_liquido_nfse?: number;
  cnpj_prestador?: string;
  nome_fantasia_prestador?: string;
  endereco_prestador?: string;
  numero_prestador?: string;
  complemento_prestador?: string;
  bairro_prestador?: string;
  codigo_municipio_prestador?: string;
  cep_prestador?: string;
  telefone_prestador?: string;
  email_prestador?: string;
  codigo_municipio_orgaogerador?: string;
  uf_orgaogerador?: string;
  competencia?: string;
  valor_deducoes?: number;
  valor_pis?: number;
  valor_cofins?: number;
  valor_inss?: number;
  valor_ir?: number;
  valor_csll?: number;
  iss_retido?: string;
  valor_iss_retido?: number;
  item_lista_servico?: string;
  discriminacao_servico?: string;
  codigo_municipio_servico?: string;
  cnpj_tomador?: string;
  nome_fantasia_tomador?: string;
  endereco_tomador?: string;
  numero_tomador?: string;
  complemento_tomador?: string;
  bairro_tomador?: string;
  codigo_municipio_tomador?: string;
  cep_tomador?: string;
  telefone_tomador?: string;
  email_tomador?: string;
  optante_simples_nacional?: string;
  data_emissao_rps?: string;
  natureza_operacao?: string;
  jpg_nfse?: string;
  conferido?: boolean;
  log?: string;
  log_conferido?: string;
  dominio_integration_key_prestador?: string;
  dominio_integration_key_tomador?: string;
  dominio_integracao_concluida?: number;
  usuario_id?: number;
  uf_sigla_prestador?: string;
  uf_sigla_tomador?: string;
  incentivador_cultural?: string;
  base_calculo_inss?: number;
  federal_retido?: string;
  inss_desoneracao?: string;
  inss_retido?: string;
  valor_deducoes_inss?: number;
  inss_aliquota?: number;
  is_ocr?: number;
  inscricaomunicipal_prestador?: string;
  inscricaomunicipal_tomador?: string;
  desconto_condicionado?: number;
  desconto_incondicionado?: number;
  outras_retencoes?: number;
  atividade_principal_prestador?: string;
  atividade_principal_tomador?: string;
  codigo_retencao_federal?: string;
  validade_nfse?: string;
}

export interface INfse extends INfseDTO {
  id?: number;
}
