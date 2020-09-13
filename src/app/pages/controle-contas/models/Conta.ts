import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Conta extends BaseResourceModel{
    dataCompra: Date;
    loja: string;
    produto: string;
    valor: number;
    formaPagamento: string;
    parcela: number;
    dataPagamento: Date;
  
    static fromJson(jsonData: any): Conta {
      return Object.assign(new Conta(), jsonData);
    }
  }