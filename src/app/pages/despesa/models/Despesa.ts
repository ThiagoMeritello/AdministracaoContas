import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Despesa extends BaseResourceModel{
    dataCompra: Date;
    loja: string;
    produto: string;
    valor: number;
    formaPagamento: string;
    parcela: number;
    dataPagamento: Date;
  
    static fromJson(jsonData: any): Despesa {
      return Object.assign(new Despesa(), jsonData);
    }
  }